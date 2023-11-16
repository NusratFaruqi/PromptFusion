import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required.",
  }),
  title: z.string().max(30, {
    message: "Title should be under 30 characters.",
  }),
});
