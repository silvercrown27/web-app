import { Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailRegex = /^\S+@\S+.\S+$/;

  const handleFormChange = (field: any, value: any) => {
    console.log(field, value);
    setFormData({ ...formData, [field]: value });
  };
  const validateFormData = () => {
    setErrors({ name: "", email: "", message: "" });

    if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, ["email"]: "Please enter a valid email" });
    }

    if (formData.name.length! > 0) {
      setErrors({ ...errors, ["name"]: "The name field is required" });
    }

    if (formData.message.length! > 0) {
      setErrors({ ...errors, ["message"]: "The messsage field is required" });
    }
  };

  const submitForm = (event: any) => {
    console.log("sumbitting the data");
    event.preventDefault();
    validateFormData();

    if (
      errors.name.length > 0 ||
      errors.email.length > 0 ||
      errors.message.length > 0
    ) {
      console.log("Please fill in the form correctly!");
      return;
    }

    console.log("You have submitted your data successfully!");
  };

  return (
    <section id="contact" className="my-16 mx-10 p-8 bg-gray-50 rounded-3xl">
      <div className="container">
        <div className="flex flex-row px-12 space-x-10">
          <div className="w-[45%] space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Get In Touch</h1>
              <p>Feel free to contact us at any time</p>
            </div>
            <div className="flex flex-col space-y-2 items-start">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                className="w-full p-3 border border-gray-300 rounded-xl "
              />
            </div>

            <div className="flex flex-col space-y-2 items-start">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Name"
                className="w-full p-3 border border-gray-300 rounded-xl "
                onChange={(value) => {
                  handleFormChange("email", value.target.value);
                }}
              />
              {errors.email.length > 0 ? (
                <div>
                  <p className="text-red-600 font-bold text-3xl">
                    {errors.email}
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col space-y-2 items-start">
              <label className="font-semibold">Messsage</label>
              <input
                type="text"
                name="message"
                placeholder="Enter Message"
                className="w-full p-3 border border-gray-300 rounded-xl "
              />
            </div>

            <button
              type="submit"
              onSubmit={submitForm}
              onClick={submitForm}
              className="px-9 py-2 border rounded-full flex flex-row space-x-4 font-semibold text-xl items-center hover:bg-cyan-600  "
            >
              Contact Us
              <Send className="ml-4" />
            </button>
          </div>
          <div className="w-[45%] flex flex-col items center justify-evenly space-y-10 py-10">
            <div className="bg-gray-200 shadow-lg text-gray-800 rounded-xl px-9 py-6">
              <h3 className="font-semibold text-2xl">Head Office</h3>
              <p>Region: Nairobi, Kenya</p>
              <p>Street: Mama Ngina Street</p>
              <p>Phone: +254 123 456 7890</p>
            </div>
            <div className="bg-gray-200 shadow-lg text-gray-800 rounded-xl px-9 py-6">
              <h3 className="font-semibold text-2xl">Support</h3>
              <p>Email: company@email.com</p>
              <p>Phone: +254 123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
