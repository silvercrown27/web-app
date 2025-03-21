import { useState, useEffect } from "react";
import analytics from "../../assets/images/anlytics.png";
import { NavbarListProps } from "../../types/types";
import navbarRoute from "../../../constants/navigation-routes";
import Button from "./buttons";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed w-full transition duration-300 ${
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
          <div>
            <ul className="flex space-x-4">
              {navbarRoute.map((item) => (
                <NavbarList
                  key={item.title}
                  route={item.route}
                  title={item.title}
                  isActive={location.pathname == item.route}
                  scrolled={scrolled}
                />
              ))}
            </ul>
          </div>
          <div className="flex space-x-2">
            <Button text="Signup" filled={false} color={scrolled ? "blue" : "white"} />
            <Button text="Login" filled={false} color={scrolled ? "blue" : "white"} />
          </div>
        </div>
      </div>
    </section>
  );
}

const NavbarList = ({ route, isActive, title, scrolled }: NavbarListProps & { scrolled: boolean }) => {
  return (
    <li>
      <a
        href={route}
        className={`transition duration-300 ${
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
