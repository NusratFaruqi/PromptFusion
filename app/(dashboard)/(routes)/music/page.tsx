"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Headphones, Music, Send } from "lucide-react";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "@/components/loader";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";

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

const MusicPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [music, setMusic] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic(undefined);

      const response = await axios.post("/api/music", values);
      console.log(response);

      setMusic(response.data.audio);
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
        title="Music Generation"
        description="Turn your prompt into music."
        icon={Headphones}
        iconColor="text-cyan-400"
        bgColor="bg-black"
      />
      <div className="px-4 lg:px-8">
        {isLoading && (
          <div className="p-20">
            <Loader />
          </div>
        )}
        {!music && !isLoading && <Empty label="No music generated." />}
        {music && (
          <audio controls className="w-full mt-8">
            <source src={music} />
          </audio>
        )}
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
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent px-5 py-10"
                      disabled={isLoading}
                      placeholder="guitar with sad melody"
                      {...field}
                    />
                  </FormControl>
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

export default MusicPage;
