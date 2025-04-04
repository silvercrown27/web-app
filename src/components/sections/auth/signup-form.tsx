import { Send } from "lucide-react";
import { useState } from "react";
import Label from "../../ui/label";
import Input from "../../ui/input";
import Button from "../../ui/buttons";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const emailRegex = /^\S+@\S+\.\S+$/;

  const handleFormChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleErrors = (field: string, value: any) => {
    setErrors((prev) => ({ ...prev, [field]: value }));
  };

  const validateFormData = () => {
    if (!formData.fullName.trim())
      handleErrors("fullName", "Full Name is required.");
    if (!emailRegex.test(formData.email))
      handleErrors("email", "Please enter a valid email.");
    if (formData.password.length < 8)
      handleErrors("password", "Password must be at least 8 characters.");

    return !Object.values(errors).some((error) => error.length > 0);
  };

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    if (validateFormData()) {
      console.log("Signup Successful!", formData);
    } else {
      console.log("Please fix the errors and try again.");
    }

    const response = await fetch("https://inveca.co/users", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      method: "POST",
    });

    console.log(response);
  };

  return (
    <section className="my-16 mx-auto max-w-5xl p-8 bg-white shadow-md rounded-3xl border border-gray-200 flex flex-col md:flex-row gap-10 justify-center">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Create an Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Sign up to get started with WorkFlo.
        </p>
        <form onSubmit={submitForm} className="space-y-6">
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
