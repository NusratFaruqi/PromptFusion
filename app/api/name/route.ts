import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages, amount } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", {
        status: 400,
      });
    }

    const instructionMessage: ChatCompletionRequestMessage = {
      role: "system",
      content: `Generate unique names for a ${messages[0]} using artificial intelligence. Please provide a list of names suitable for ${messages[0]}.`,
    };

    const instructionMessage1: ChatCompletionRequestMessage = {
      role: "system",
      content: `Category: ${messages[0]}\nNumber of Names: ${amount}`,
    };

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      );
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, instructionMessage1, ...messages],
    });

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[Name_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
