import { Send } from "lucide-react";
import { useState } from "react";
import Label from "../../ui/label";
import Input from "../../ui/input";
import Button from "../../ui/buttons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const emailRegex = /^\S+@\S+\.\S+$/;

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateFormData = () => {
    let newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) newErrors.name = "The name field is required.";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.message.trim())
      newErrors.message = "The message field is required.";

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error.length > 0);
  };

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateFormData()) {
      console.log("You have submitted your data successfully!", formData);
    } else {
      console.log("Please fill in the form correctly!");
    }
  };

  return (
    <section className="my-16 mx-auto max-w-5xl p-8 bg-white shadow-md rounded-3xl border border-gray-200 flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-2/5">
        <h1 className="text-3xl font-bold text-center mb-6">Get In Touch</h1>
        <p className="text-center text-gray-600 mb-6">
          Feel free to contact us at any time.
        </p>
        <form onSubmit={submitForm} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleFormChange("name", e.target.value)}
              placeholder="Enter Full Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={(e) => handleFormChange("message", e.target.value)}
              placeholder="Enter Message"
              rows={4}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
          >
            Contact Us <Send size={16} />
          </Button>
        </form>
      </div>
      <div className="w-full md:w-3/5 flex flex-col space-y-6 bg-gray-100 p-6 rounded-xl shadow-inner">
        <div className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="font-semibold text-xl">Head Office</h3>
          <p>Region: Nairobi, Kenya</p>
          <p>Street: Mama Ngina Street</p>
          <p>Phone: +254 123 456 7890</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="font-semibold text-xl">Support</h3>
          <p>Email: company@email.com</p>
          <p>Phone: +254 123 456 7890</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
