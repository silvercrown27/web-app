import bannerImage from "../../../assets/images/login.png";

const LoginBanner = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-300 to-blue-600 text-gray-900 py-28 px-6 shadow-2xl rounded-4xl mx-auto max-w-6xl flex md:flex-row items-center md:text-start self-center">
      <div className="md:w-2/3 space-y=3">
        <div className="text-5xl font-extrabold mb-6 animate-fade-in-down">
          <h2>Secure & Seamless Login</h2>
        </div>
        <div className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-in-up Z-[0]">
          <p>
            Access your workflo account with ease. Stay connected, manage tasks, efficiently, and keep your work organized
          </p>
        </div>
      </div>
      <div className="md:w-1/3 flex items-center">
        <img src={bannerImage} alt="banner image" className=" mix-blend-multiply w-full" />
      </div>
    </section>
  );
};

export default LoginBanner;
