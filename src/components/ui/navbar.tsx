import analytics from "../../assets/images/anlytics.png";
import { NavbarListProps } from "../../types/types";
import navbarRoute from "../../../constants/navigation-routes";
import Button from "./buttons";
import { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
  }

  return (
    <section
      className={`fixed w-full transition duration-400 ${
        scrolled ? "bg-white" : "bg-transparent"
      } `}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-row justify-between items-center">
          <div>
            <a
              href="/"
              className="row flex flex-row text-xl font-bold items-center space-x-2"
            >
              <img
                src={analytics}
                className="w-12 h-12 sm:w-5 lg:w-9 xl:w-12"
              />
              <h3 className="sm:text-lg lg:text-xl font-bold font-black-ops-one">WorkFlo</h3>
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
                />
              ))}
            </ul>
          </div>
          <div className="flex lg:hidden">
            <div className="relative">
              <AlignRight onClick={handleHumbergerToggle} />
            </div>
            <div className="relative w-1000px">
              {isOpen ? <HumbergerMenu /> : <></>}
            </div>
          </div>
          <div className="hidden lg:flex flex-row">
            <Button text="signup" filled={true} color="cyan" />
            <Button text="login" filled={false} color="cyan" />
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
}: NavbarListProps) => {
  return (
    <li>
      <a
        href={route}
        className={`${isScrolled ? "text-blue-700" : ""} hover:text-gray-100 ${
          isActive ? "text-gray-100 font-semibold font-open-sans" : ""
        } transition duration-400`}
      >
        {title}
      </a>
    </li>
  );
};


const HumbergerMenu = () => {
  return(
    <div className="h-screen w-screen bg-gray-900">

    </div>
  );
}

export default Navbar;
