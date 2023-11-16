import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
  feedback: z.string().min(1, {
    message: "feedback is required.",
  }),
});
