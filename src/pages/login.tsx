import LoginBanner from "../components/sections/auth/login-banner";
import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";

function Login() {
  return (
    <>
      <Navbar />
      <LoginBanner />
      <Footer />
    </>
  );
}

export default Login;