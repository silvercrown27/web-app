import { Send } from "lucide-react";
import React, { useState } from "react";
import Label from "../../ui/label";
import Input from "../../ui/input";
import Button from "../../ui/buttons";
import { signup } from "../../../utils/actions";
import { SignupFormState } from "../../../utils/states";

const SignupForm = () => {
  const [formState, setFormState] = useState<SignupFormState>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const result = await signup(formState, form);

    setFormState(result)
  }

  return (
    <section className="my-16 mx-auto max-w-5xl p-8 bg-white shadow-md rounded-3xl border border-gray-200 flex flex-col md:flex-row gap-10 justify-center">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Create an Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Sign up to get started with WorkFlo.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
            />
            {formState?.errors?.fullName && (
              <p className="text-red-500 text-sm mt-1">{formState?.errors?.fullName}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            {formState?.errors?.email && (
              <p className="text-red-500 text-sm mt-1">{formState?.errors?.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Create a Password"
            />
            {formState?.errors?.password && (
              <p className="text-red-500 text-sm mt-1">{formState?.errors?.password}</p>
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
