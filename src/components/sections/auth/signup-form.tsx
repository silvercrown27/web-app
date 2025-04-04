import { useState } from "react";
import Input from "../../ui/input";
import Button from "../../ui/buttons";
import { Label } from "../../ui/lable";

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

  const emailRegex = /^\S+@\S+.\S+$/;
  const result = "";
  const isError = false;

  const handleFormChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateFormData = () => {
    let newErrors = { fullName: "", email: "", password: "" };

    if (formData.fullName.trim().length <= 0)
      newErrors.fullName = "Please enter a value for your name";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (formData.password.trim().length < 8)
      newErrors.fullName = "Please enter atleast 8 characters for the password";

    setErrors(newErrors);
    return [Object.values(newErrors).some((error) => error.length > 0)];
  };

  const submitForm = (event: any) => {
    event.preventDefault();

    if (!validateFormData) {
      return;
    }

    console.log("Data submitted", formData);
  };

  return (
    <section className="my-36 mx-auto max-w-4xl p-10 shadow-2xl rounded-4xl border-gray-400 flex flex-col space-y-14">
      <div className="w-full md:w-2/3">
        <h1>Create An Account</h1>
        <p>Signup to get started with workFlo.</p>
      </div>

      <form className="space-y-6">
        <div>
          <Label>Full Name</Label>
          <Input
            placeholder="Enter your fullname"
            name="fullname"
            type="text"
            onChange={(event) =>
              handleFormChange("fullname", event.target.value)
            }
            required
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            placeholder="Enter your email"
            name="email"
            type="email"
            onChange={(event) => handleFormChange("email", event.target.value)}
            required
          />
        </div>
        <div>
          <Label className="text-sm">Password</Label>
          <Input
            placeholder="Enter your password"
            name="password"
            type="password"
            className="w-10 w-20 w-36"
            onChange={(event) =>
              handleFormChange("password", event.target.value)
            }
            required
          />
        </div>

        <Button variant="primary" onSubmit={submitForm}>
          Signup
        </Button>

        {result && (
          <div
            className={`px-10 py-5 rounded-4xl ${
              isError ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {result}
          </div>
        )}
      </form>
    </section>
  );
};

export default SignupForm;
