// components/ProtectedRedirect.tsx
import { JSX, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifySession } from "../utils/sessions";

export const ADMIN_ROUTES = ["/dashboard"];
export const USER_ROUTES = ["/", "/about", "/contact-us", "/login", "/signup"];

const ProtectedRedirect = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { isAuth } = await verifySession();

      const isInAdminRoute = ADMIN_ROUTES.includes(location.pathname);
      const isInUserRoute = USER_ROUTES.includes(location.pathname);

      if (!isAuth && isInAdminRoute) {
        navigate("/login", { replace: true });
      } else if (isAuth && isInUserRoute) {
        navigate("/dashboard", { replace: true });
      } else {
        setChecking(false);
      }
    };

    checkAuth();
  }, [navigate, location.pathname]);

  if (checking) return null;

  return children;
};
export default ProtectedRedirect;
