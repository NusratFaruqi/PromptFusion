import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { feedback, email } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!feedback) {
      return new NextResponse("Feedback is required", { status: 400 });
    }

    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }

    // @ts-ignore
    const response = await prismadb.reviews.create({
      data: {
        feedback,
        email,
        userId,
      },
    });

    return NextResponse.json(response);
  } catch (error: any) {
    if (error.code === "P2002") {
      return new NextResponse("Email already exists", { status: 400 });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const searchquery = url.searchParams.get("searchquery");
    // @ts-ignore
    if (searchquery) {
      const response = await prismadb.reviews.findMany({
        where: {
          OR: [
            {
              email: {
                contains: searchquery,
              },
            },
            {
              feedback: {
                contains: searchquery,
              },
            },
          ],
        },
      });
      return NextResponse.json(response);
    }

    // @ts-ignore
    const response = await prismadb.reviews.findMany();

    return NextResponse.json(response);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function DELETE(req: Request) {
  try {
    const { userId } = auth();

    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!id) {
      return new NextResponse("Id is required", { status: 400 });
    }

    // check if the user is the owner of the review
    // @ts-ignore
    const review = await prismadb.reviews.findUnique({
      where: {
        id,
      },
    });

    if (!review) {
      return new NextResponse("Review not found", { status: 404 });
    }

    if (review.userId !== userId) {
      return new NextResponse("You can not delete others reviews ", {
        status: 401,
      });
    }

    // @ts-ignore
    const response = await prismadb.reviews.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
