import analytics from "../../assets/images/anlytics.png";
import { NavbarListProps } from "../../types/types";
import navbarRoute from "../../../constants/navigation-routes";
import Button from "./buttons";

function Navbar() {
  return (
    <section className="navbar">
      <div className="container">
        <div className="row flex flex-row justify-between list">
          <div>
            <a href="/" className="row flex flex-row">
              <img src={analytics} width={50} height={50} />
              <h3>WorkFlo</h3>
            </a>
          </div>
          <div>
            <ul className="flex flex-row">
              {navbarRoute.map((item) => (
                <NavbarList
                  key={item.title}
                  route={item.route}
                  title={item.title}
                  isActive={location.pathname == item.route}
                />
              ))}
            </ul>
          </div>
          <div className="flex flex-row">
            <Button text="signup" filled={false} color="blue" />
            <Button text="login" filled={false} color="blue" />
          </div>
        </div>
      </div>
    </section>
  );
}

const NavbarList = ({ route, isActive, title }: NavbarListProps) => {
  return (
    <li>
      <a href={route} className={isActive ? "active" : ""}>
        {title}
      </a>
    </li>
  );
};

export default Navbar;
