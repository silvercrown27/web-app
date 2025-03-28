import bannerImage from "../../../assets/images/banner.png";

const LoginBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-200 to-blue-400 text-gray-900 py-28 px-6 shadow-lg rounded-3xl mx-auto max-w-6xl flex flex-col md:flex-row items-center md:text-left text-center">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-extrabold animate-fade-in-down">
          Secure & Seamless Login
        </h2>
        <p className="text-lg opacity-90 animate-fade-in-up">
          Access your WorkFlo account with ease. Stay connected, manage tasks
          efficiently, and keep your work organized, all in one place.
        </p>
        <button className="rounded-full bg-white text-blue-600 px-8 py-3 font-semibold transition-transform transform hover:bg-gray-200 hover:scale-105 shadow-md">
          Login Now
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={bannerImage}
          alt="Login Banner"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl mix-blend-multiply"
        />
      </div>
    </section>
  );
};

export default LoginBanner;
