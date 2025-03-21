const Contact = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto bg-white shadow-lg rounded-2xl p-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col space-y-4 w-full lg:w-1/2">
            <div className="bg-gray-50 shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Head Office
              </h3>
              <p className="text-gray-600">1234 WorkFlo Lane</p>
              <p className="text-gray-600">Suite 100</p>
              <p className="text-gray-600">San Francisco, CA 94107</p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
            </div>
            <div className="bg-gray-50 shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800">Support</h3>
              <p className="text-gray-600">support@workflo.com</p>
              <p className="text-gray-600">Phone: (987) 654-3210</p>
            </div>
          </div>

          <div className="bg-gray-50 shadow-md rounded-2xl p-8 w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                rows={4}
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
