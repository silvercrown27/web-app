const Banner = () => {
  return (
    <section className="bg-blue-400 text-white py-28">
      <div className="container mx-auto text-center">
        <div className="text-5xl font-extrabold mb-6 animate-fade-in-down">
          <h2>Welcome to WorkFlo</h2>
        </div>
        <div className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-in-up">
          <p>Streamlining your daily tasks with our powerful and efficient workflow management software.
            Boost productivity and staty organized like never before.
          </p>
        </div>
        <div className="mt-12">
          <button className="rounded-full bg-white text-blue-600 px-8 py-3 font-semibold transition ease-in-out duration-400 transform hover:bg-gray-200 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
