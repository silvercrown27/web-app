import analytics from "../../assets/images/anlytics.png";
import { NavbarListProps } from "../../types/types";
import navbarRoute from "../../../constants/navigation-routes";
import Button from "./buttons";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className={`fixed w-full transition duration-400 ${scrolled ? 'bg-white' : 'bg-transparent'} `}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-row justify-between items-center">
          <div>
            <a href="/" className="row flex flex-row text-xl font-bold items-center space-x-2">
              <img src={analytics} className="w-12 h-12" />
              <h3 className="text-xl font-bold">WorkFlo</h3>
            </a>
          </div>
          <div>
            <ul className="flex flex-row space-x-4 items-center">
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
          <div className="flex flex-row">
            <Button text="signup" filled={true} color='cyan' />
            <Button text="login" filled={false} color='cyan' />
          </div>
        </div>
      </div>
    </section>
  );
}

const NavbarList = ({ route, isActive, title, isScrolled }: NavbarListProps) => {
  return (
    <li>
      <a href={route} className={`${isScrolled ? 'text-blue-700': ''} hover:text-gray-100 ${isActive ? "text-gray-100 font-semibold" : ""} transition duration-400`}>
        {title}
      </a>
    </li>
  );
};

export default Navbar;
