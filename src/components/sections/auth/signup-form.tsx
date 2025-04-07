import { Send } from "lucide-react";
import { useState } from "react";
import Label from "../../ui/label";
import Input from "../../ui/input";
import Button from "../../ui/buttons";
import { signupSchema } from "../../../utils/schema";
import { createSession } from "../../../utils/cookies";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateFormData = () => {
    const result = signupSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors((prev) => ({ ...prev, ...fieldErrors }));
      return false;
    }

    return true;
  };

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const isValid = validateFormData();
    if (!isValid) {
      console.log("Please fix the errors and try again.");
      return;
    }

    const { confirmPassword, ...payload } = formData;

    const response = await fetch("https://inveca.co/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      method: "POST",
    });

    const data = await response.json();

    if (response.ok && data?.token) {
      createSession(data.token);
      console.log("Signup Successful!", data);
    } else {
      console.log("Signup failed:", data?.message || "Unknown error");
    }
  };

  return (
    <section className="my-16 mx-auto max-w-3xl p-8 bg-white shadow-md rounded-3xl border border-gray-200 flex flex-col gap-10 justify-center">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
          Create an Account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign up to get started with WorkFlo.
        </p>
        <form onSubmit={submitForm} className="space-y-5">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleFormChange("fullName", e.target.value)}
              placeholder="Enter Full Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleFormChange("email", e.target.value)}
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleFormChange("password", e.target.value)}
              placeholder="Create a Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleFormChange("confirmPassword", e.target.value)
              }
              placeholder="Re-enter Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
          >
            Sign Up <Send size={16} />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
