import SignupBanner from "../components/sections/auth/signup-banner";
import SignupForm from "../components/sections/auth/signup-form";
import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";

function Signup() {
  return (
    <>
      <Navbar />
      <SignupBanner />
      <SignupForm />
      <Footer />
    </>
  );
}

export default Signup;