import { z } from "zod"

export const SignupSchema = z.object({
    fullName: z.string().min(2, 'Name must have atleast 2 characters'),
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(8, "Password must be more than 8 characters"),
})

export const TaskSchema = z.object({
    name: z.string(),
    dueDate: z.string(),
    description: z.string().nullable().optional(),
})