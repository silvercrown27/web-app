const Banner = () => {
  return (
    <section className="bg-blue-400 text-white py-28">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 animate-fade-in-down">
          Welcome to WorkFlo
        </h2>
        <p className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-in-up">
          Streamline your daily tasks with our powerful and efficient workflow management software.
          Boost productivity and stay organized like never before.
        </p>
        <div className="mt-12">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold shadow-lg transition duration-300 ease-in-out transform hover:bg-gray-100 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
