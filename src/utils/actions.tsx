import { SignupSchema } from "./schema";
import { SignupFormState, TaskState } from "./states";

export async function signup(
  _: SignupFormState,
  formData: FormData
): Promise<SignupFormState> {
  const parsed = SignupSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { fullName, email, password } = parsed.data;

  try {
    const apiUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password }),
    });    

    if (!response.ok) {
      const resData = await response.json();
      return {
        errors: {
          general: [resData?.error || "Signup Failed, please try again later"],
        },
      };
    }

    return { success: true };
  } catch (error: any) {
    return {
      errors: { general: [error.message || "something went wrong"] },
      success: false,
    };
  }
}

export async function getTasks(_: TaskState): Promise<TaskState> {
  try {
    const response = await fetch("https://localhost:8000/api/tasks", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const resData = await response.json();
      return {
        errors: {
          general: [resData?.error || "Signup Failed, please try again later"],
        },
      };
    }

    return { success: true };
  } catch (error: any) {
    return {
      errors: { general: [error.message || "something went wrong"] },
      success: false,
    };
  }
}
