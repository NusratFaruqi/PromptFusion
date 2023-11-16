"use client";
import Link from "next/link";
import React from "react";
import { formSchema } from "./constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ReviewsAdd = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      feedback: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      const response = await axios.post("/api/reviews", {
        email: values.email,
        feedback: values.feedback,
      });
      form.reset();

      toast.success("Thank you for your feedback!");

      router.push("/reviews");
    } catch (error: any) {
      console.log(error);
      if (error?.response?.status === 403) {
        toast.error(error?.response?.data || "Something went wrong");
      } else {
        toast.error(error?.response?.data || "Something went wrong");
      }
    } finally {
      form.reset();
    }
  };
  return (
    <section>
      <div className="bg-indigo-100 h-full py-20">
        <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 p-8">
            <p className="ml-6 text-yellow-500 text-4xl uppercase tracking-loose">
              REVIEW
            </p>
            <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
              Leave us a feedback!
            </p>
            <p className="text-sm md:text-base leading-snug text-opacity-100">
              Give Your Honest opinion!
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-2/3 justify-center">
            <div className="container w-full px-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl mb-4 text-black font-semibold">
                        Have any suggestion?
                      </h4>

                      <Form {...form}>
                        <form
                          id="feedbackForm"
                          onSubmit={form.handleSubmit(onSubmit)}
                        >
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="email"
                            >
                              Email
                            </label>

                            <FormField
                              name="email"
                              render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-10">
                                  <FormControl className="m-0 p-0">
                                    <input
                                      type="email"
                                      disabled={isLoading}
                                      {...field}
                                      id="email"
                                      className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                                      placeholder=" "
                                      style={{
                                        transition: "all 0.15s ease 0s",
                                      }}
                                      required
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="feedback"
                            >
                              Message
                            </label>

                            <FormField
                              name="feedback"
                              render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-10">
                                  <FormControl className="m-0 p-0">
                                    <textarea
                                      maxLength={300}
                                      disabled={isLoading}
                                      {...field}
                                      id="feedback"
                                      rows={4}
                                      cols={80}
                                      className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                      placeholder=""
                                      required
                                    ></textarea>
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="text-center mt-6">
                            <Button
                              id="feedbackBtn"
                              className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                              style={{ transition: "all 0.15s ease 0s" }}
                              disabled={isLoading}
                            >
                              Submit
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsAdd;
