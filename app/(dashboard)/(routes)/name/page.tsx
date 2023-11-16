"use client";

import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Download, FolderEdit, ImageIcon, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "@/components/loader";
import { Empty } from "@/components/ui/empty";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema, nameOptions } from "./constants";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import { cn } from "@/lib/utils";
import { ChatCompletionRequestMessage } from "openai";

import dynamic from "next/dynamic";

const Tooltip = dynamic(
  () => import("@/components/ui/tooltip").then((module) => module.Tooltip),
  { ssr: false }
);
const TooltipContent = dynamic(
  () =>
    import("@/components/ui/tooltip").then((module) => module.TooltipContent),
  { ssr: false }
);
const TooltipProvider = dynamic(
  () =>
    import("@/components/ui/tooltip").then((module) => module.TooltipProvider),
  { ssr: false }
);
const TooltipTrigger = dynamic(
  () =>
    import("@/components/ui/tooltip").then((module) => module.TooltipTrigger),
  { ssr: false }
);

const PhotoPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/name", {
        messages: newMessages,
        amount: values.amount,
      });
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-700 via-stone-900 to-slate-800 h-full py-4 relative">
      <Heading
        title="Unique Name Generation"
        description="Turn your prompt unique name."
        icon={FolderEdit}
        iconColor="text-orange-700"
        bgColor="bg-black"
      />
      <div className="px-2 lg:px-4">
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No names are generated." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 inset-x-0 w-10/12">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              rounded-lg 
              border 
              w-full 
              p-4 
              px-3 
              md:px-6 
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2
            "
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-8">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent px-5 py-10"
                      disabled={isLoading}
                      placeholder="Catagory:ex. company name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" h-20 ">
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {nameOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Button
              className="w-full col-span-12 lg:col-span-2 h-full bg-blue-500 hover:bg-yellow-600 text-white flex-grow"
              type="submit"
              disabled={isLoading}
              size="icon"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Send />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send Prompt</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PhotoPage;
