import { z } from "zod";
import { apiRequest } from "./api";
import { LoginSchema, SignupSchema, TaskSchema, TaskType } from "./schema";
import { createSession } from "./sessions";
import { LoginFormState, SignupFormState, TaskState } from "./states";
import Cookies from "js-cookie";

export async function signup(_: SignupFormState, formData: FormData): Promise<SignupFormState> {
    const apiUrl = import.meta.env.VITE_API_URL;

    const parsed = SignupSchema.safeParse({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    });

    if (!parsed.success) {
        return {
            errors: parsed.error.flatten().fieldErrors,
        };
    }

    const { fullName, email, password } = parsed.data;

    try {
        const response = await apiRequest(`${apiUrl}/signup`, {
            method: "POST",
            body: JSON.stringify({ fullName, email, password }),
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const resData = await response.json();

        if (!response.ok) {
            const resData = await response.json();
            return {
                errors: {
                    general: [resData?.error || "Signup Failed, please try again later"],
                },
            };
        }

        const token = resData.token;

        createSession(token);

        return { success: true };
    } catch (error: any) {
        return {
            errors: { general: [error.message || "something went wrong"] },
            success: false,
        };
    }
}

export async function login(_: LoginFormState, formData: FormData): Promise<LoginFormState> {
    const parsed = LoginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!parsed.success) {
        return {
            errors: parsed.error.flatten().fieldErrors,
        };
    }
    const apiUrl = import.meta.env.VITE_API_URL;

    const { email, password } = parsed.data;

    try {
        const res = await fetch(`${apiUrl}/login`, {
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
            method: "post",
            credentials: "include",
        });

        if (!res.ok) {
            const resData = await res.json();

            return {
                errors: {
                    general: [resData?.error || "Login Failed, please try again later"],
                },
            };
        }
    } catch (error: any) {
        return {
            errors: { general: [error.message || "something went wrong"] },
            success: false,
        };
    }

    return { success: true };
}

export async function getTasks(_: TaskState): Promise<{
    data: TaskType[] | null;
    errors: string | null;
}> {
    const token = Cookies.get("session");

    if (!token) {
        return {
            data: null,
            errors: "User is not logged in, cannot update information",
        };
    }

    try {
        const response = await fetch("https://localhost:8000/api/tasks", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const resData = await response.json();
            return {
                data: null,
                errors: resData.error || "Failed to get information",
            };
        }

        const parsed = z.array(TaskSchema).safeParse(response)

        return { data: parsed.data ?? [], errors: null };
    } catch (error: any) {
        return {
            errors: error.message || "something went wrong",
            data: null,
        };
    }
}
