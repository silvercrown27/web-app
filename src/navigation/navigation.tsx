import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import navRoutes from "../../constants/navigation-routes";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const componentsMap: { [key: string]: JSX.Element } = {
  Home: <Home />,
  About: <About />,
  Login: <Login />,
  Signup: <Signup />,
};

function Navigation() {
  return (
    <Router>
      <Routes>
        {navRoutes.map((item) => (
          <Route key={item.route} path={item.route} element={componentsMap[item.title]} />
        ))}
      </Routes>
    </Router>
  );
}

export default Navigation;
