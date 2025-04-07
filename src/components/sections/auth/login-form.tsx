import { LogIn } from "lucide-react";
import { useState } from "react";
import Label from "../../ui/label";
import Input from "../../ui/input";
import Button from "../../ui/buttons";
import { loginSchema } from "../../../utils/schema";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateFormData = () => {
    const result = loginSchema.safeParse(formData);

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

    const response = await fetch("https://inveca.co/login", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      method: "POST",
    });

    console.log("Login Response:", await response.json());
  };

  return (
    <section className="my-16 mx-auto max-w-3xl p-8 bg-white shadow-md rounded-3xl border border-gray-200 flex flex-col gap-10 justify-center">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Log in to access your dashboard.
        </p>
        <form onSubmit={submitForm} className="space-y-5">
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
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
          >
            Log In <LogIn size={16} />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
