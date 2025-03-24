import About from "../components/sections/home/about";
import Banner from "../components/sections/home/banner";
import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Footer />
    </>
  );
}

export default Home;