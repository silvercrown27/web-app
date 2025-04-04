import LoginBanner from "../components/sections/auth/login-banner";
import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";
import LoginForm from "../components/sections/auth/login-form";

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