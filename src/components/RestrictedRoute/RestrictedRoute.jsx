import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLogged);

    return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
}

export default RestrictedRoute