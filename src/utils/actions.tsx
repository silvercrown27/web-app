import { LoginSchema, SignupSchema } from "./schema";
import { createSession } from "./sessions";
import { LoginFormState, SignupFormState, TaskState } from "./states";
import Cookies from "js-cookie";

const apiUrl = import.meta.env.VITE_API_URL;

export async function signup(
  _: SignupFormState,
  formData: FormData
): Promise<SignupFormState> {
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

    const response = await fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password }),
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


export async function login(
  _: LoginFormState,
  formData: FormData,
): Promise<LoginFormState>{
  const parsed = LoginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!parsed.success){
    return {
      errors: parsed.error.flatten().fieldErrors
    }
  }

  const { email, password } = parsed.data;

  try{
    const res = await fetch(`${apiUrl}/login`, {
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
      method: 'post'
    })

    if (!res.ok) {
      const resData = await res.json();

      return {
        errors: {
          general: [resData?.error || 'Login Failed, please try again later']
          
        }
      }
    }
  } catch (error:any){
    return {
      errors: { general: [error.message || "something went wrong"] },
      success: false,
    };
  }

  return ({success: true})
}

export async function getTasks(_: TaskState): Promise<TaskState> {

  const token = Cookies.get('session');

  if (!token){
    return {
      errors: {
        general: ['User is not logged in, cannot update information']
      }
    }
  }

  try {
    const response = await fetch("https://localhost:8000/api/tasks", {
      method: "get",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
       },
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
