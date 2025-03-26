import { useState, useEffect } from "react";
import analytics from "../../assets/images/anlytics.png";
import { NavbarListProps } from "../../types/types";
import navbarRoute from "../../../constants/navigation-routes";
import Button from "./buttons";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed w-full transition duration-300 z-[99] ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div>
            <a href="/" className="flex items-center space-x-2">
              <img src={analytics} alt="Logo" className="w-12 h-12" />
              <h3
                className={`text-xl font-bold ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                WorkFlo
              </h3>
            </a>
          </div>

          <div className="hidden lg:flex space-x-4">
            <ul className="flex space-x-4">
              {navbarRoute.map((item) => (
                <NavbarList
                  key={item.title}
                  route={item.route}
                  title={item.title}
                  isActive={location.pathname === item.route}
                  scrolled={scrolled}
                />
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex space-x-2">
            <Button
              text="Signup"
              filled={false}
              color={scrolled ? "blue" : "white"}
            />
            <Button
              text="Login"
              filled={false}
              color={scrolled ? "blue" : "white"}
            />
          </div>

          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: menuOpen ? "0%" : "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-[9999] transition-transform"
        >
          <button
            className="absolute top-5 right-5"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-8 h-8 text-gray-800" />
          </button>
          <ul className="flex flex-col space-y-6 text-lg">
            {navbarRoute.map((item) => (
              <NavbarList
                key={item.title}
                route={item.route}
                title={item.title}
                isActive={location.pathname === item.route}
                scrolled={true}
              />
            ))}
          </ul>
          <div className="mt-8 flex flex-col space-y-4">
            <Button text="Signup" filled={true} color="blue" />
            <Button text="Login" filled={true} color="blue" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const NavbarList = ({
  route,
  isActive,
  title,
  scrolled,
}: NavbarListProps & { scrolled: boolean }) => {
  return (
    <li>
      <a
        href={route}
        className={`transition duration-300 z-50 ${
          scrolled
            ? "text-gray-700 hover:text-blue-500"
            : "text-white hover:text-gray-300"
        } ${isActive ? "font-semibold" : ""}`}
      >
        {title}
      </a>
    </li>
  );
};

export default Navbar;
