import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required.",
  }),
  amount: z.string().min(1).max(25),
});

export const nameOptions = [
  {
    value: "1",
    label: "1 Name",
  },
  {
    value: "10",
    label: "10 Names",
  },
  {
    value: "15",
    label: "15 Names",
  },
  {
    value: "20",
    label: "20 Names",
  },
  {
    value: "25",
    label: "25 Names",
  },
];
