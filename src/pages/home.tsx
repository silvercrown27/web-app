import About from "../components/sections/home/about";
import Banner from "../components/sections/home/banner";
import Contact from "../components/sections/home/contact";
import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;