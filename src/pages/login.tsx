import LoginBanner from "../components/sections/auth/login-banner";
import LoginForm from "../components/sections/auth/login-form";
import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";

function Login() {
  return (
    <>
      <Navbar />
      <LoginBanner />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;