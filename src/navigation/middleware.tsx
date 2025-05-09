import { JSX, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { verifySession } from "../utils/sessions";

const userRoutes = ['dashboard'];
const publicRoutes = ['/login', '/signup', '/'];

const Redirect = ({children}: {children: JSX.Element}) => {
    const navigation = useNavigate();
    const location = useLocation();

    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const checkIsAuth = async () => {
            const { isAuth } = await verifySession();

            const isInUserRoutes = userRoutes.includes(location.pathname);
            const isInPublicRoutes = publicRoutes.includes(location.pathname);

            if (!isAuth && isInUserRoutes){
                navigation('/login');
            } else if (isAuth && isInPublicRoutes){
                navigation('dashboard');
            } else {
                setChecking(false)
            }
        }

        checkIsAuth()
    }, [])

    if (checking) return null;

    return children;
}

export default Redirect;