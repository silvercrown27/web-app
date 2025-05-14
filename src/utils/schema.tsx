import { z } from "zod";

export const SignupSchema = z
    .object({
        fullName: z.string().min(2, "Name must have atleast 2 characters"),
        email: z.string().email("Please enter a valid email"),
        password: z
            .string()
            .min(8, "Password must be atleast 8 characters")
            // .regex(/a-zA-Z/, "Password must contain both capital and small letters")
            // .regex(/0-9/, "Password must contain atleast one number")
            // .regex(
            //   /[^a-zA-Z0-9]/,
            //   "Password must contain atleast one special character"
            // )
            .trim(),
        confirmPassword: z.string().trim(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"],
    });

export const LoginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string(),
});

export const TaskSchema = z.object({
    id: z.string().optional().nullable(),
    name: z.string(),
    dueDate: z.string(),
    description: z.string().nullable().optional(),
    score: z.number().default(0),
    isCompleted: z.boolean().default(false),
});

export const UserSchema = z.object({
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    emails: z.string().email(),
    country: z.string(),
    postal: z.coerce.number().default(11111),
});

export type TaskType = z.infer<typeof TaskSchema>;
export type UserType = z.infer<typeof UserSchema>;
