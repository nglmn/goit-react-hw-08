import { useSelector } from "react-redux"
import { selectIsLogged } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLogged);
    return isLoggedIn ? children : < Navigate to="/login" replace />
}

export default PrivateRoute