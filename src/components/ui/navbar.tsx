import analytics from "../../assets/images/anlytics.png";
import { NavbarListProps } from "../../types/types";
import navbarRoute from "../../../constants/navigation-routes";
import Button from "./buttons";
import { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHumbergerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className={`fixed w-full transition duration-400 z-[1] ${
        scrolled ? "bg-white" : "bg-transparent"
      } `}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-row justify-evenly items-center">
          <div>
            <a
              href="/"
              className="row flex flex-row text-xl font-bold items-center space-x-2"
            >
              <img
                src={analytics}
                className="w-12 h-12 sm:w-5 lg:w-9 xl:w-12"
              />
              <h3 className="sm:text-lg lg:text-xl font-bold font-black-ops-one">
                WorkFlo
              </h3>
            </a>
          </div>
          <div>
            <ul className="hidden sm:hidden lg:flex flex-row space-x-4 items-center">
              {navbarRoute.map((item) => (
                <NavbarList
                  key={item.title}
                  route={item.route}
                  title={item.title}
                  isActive={location.pathname == item.route}
                  isScrolled={scrolled}
                  isOpen={false}
                />
              ))}
            </ul>
          </div>
          <div>
            <AlignRight
              onClick={handleHumbergerToggle}
              className="absolute top-5 right-5 z-[999] lg:hidden"
            />
          </div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? "0%" : "100%" }}
            className={`fixed top-0 left-0 w-full h-full bg-gray-500 flex flex-col justify-center items-center lg:hidden transition-transform ${
              isOpen ? "" : ""
            }`}
          >
            <div className={` ${isOpen ? "flex flex-col" : "hidden"}`}>
              <ul className="space-y-5">
                {navbarRoute.map((item) => (
                  <NavbarList
                    key={item.title}
                    route={item.route}
                    title={item.title}
                    isActive={location.pathname == item.route}
                    isScrolled={scrolled}
                    isOpen={true}
                  />
                ))}
              </ul>
              <div className="hidden lg:flex flex-row">
                <Button
                  onClick={() => navigate("/signup")}
                  className="rounded-full bg-blue-600 text-white px-6 py-2 font-semibold transition-transform transform hover:bg-blue-700 hover:scale-105 shadow-md"
                >
                  Signup
                </Button>
                <Button
                  onClick={() => navigate("/login")}
                  className="rounded-full bg-white text-blue-600 px-6 py-2 font-semibold transition-transform transform hover:bg-gray-200 hover:scale-105 shadow-md border border-blue-600"
                >
                  Login
                </Button>
              </div>
            </div>
          </motion.div>
          <div className="hidden lg:flex flex-row">
            <Button
              onClick={() => navigate("/signup")}
              className="rounded-full bg-blue-600 text-white px-6 py-2 font-semibold transition-transform transform hover:bg-blue-700 hover:scale-105 shadow-md"
            >
              Signup
            </Button>
            <Button
              onClick={() => navigate("/login")}
              className="rounded-full bg-white text-blue-600 px-6 py-2 font-semibold transition-transform transform hover:bg-gray-200 hover:scale-105 shadow-md border border-blue-600"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const NavbarList = ({
  route,
  isActive,
  title,
  isScrolled,
  isOpen,
}: NavbarListProps) => {
  return (
    <li>
      <a
        href={route}
        className={`${
          isScrolled
            ? isOpen
              ? "text-white hover:text-gray-900"
              : "text-blue-700"
            : ""
        } hover:text-gray-500 ${
          isActive ? "text-gray-100 font-semibold font-open-sans" : ""
        } transition duration-400`}
      >
        {title}
      </a>
    </li>
  );
};

export default Navbar;
