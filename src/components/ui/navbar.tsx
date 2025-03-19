import analytics from "../../assets/images/anlytics.png";
// import { useLocation } from "react-router-dom";
import navRoutes from "../../../constants/navigation-routes";
import { NavbarListProps } from "../../types/types";

function Navbar() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <img src={analytics} width={80} height={80} />
        </div>
        <div>
          <ul>
            {navRoutes.map((item) => (
              <NavbarList
                key={item.route}
                title={item.title}
                isActive={location.pathname === item.route}
                route={item.route}
              />
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}

const NavbarList = ({ title, isActive, route }: NavbarListProps) => {
  return (
    <li>
      <a href={route} className={isActive ? "active" : ""}>
        {title}
      </a>
    </li>
  );
};

export default Navbar;
