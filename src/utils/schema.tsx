import { z } from "zod";

export const SignupSchema = z
  .object({
    fullName: z.string().min(2, "Name must have atleast 2 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const TaskSchema = z.object({
  name: z.string(),
  dueDate: z.string(),
  description: z.string().nullable().optional(),
});

export type TaskType = z.infer<typeof TaskSchema>;
