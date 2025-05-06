import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Contact from "../pages/contact";
import About from "../pages/about";
import DashboardContent from "../pages/dashboard";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={<DashboardContent />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
