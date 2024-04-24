import { NavLink } from 'react-router-dom'
import css from "./Navigation.module.css";


const Navigation = () => {
    return (
        <nav className={css.navContainer}>
            <div className={css.navMenu}>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>

                <NavLink to="/contacts">Contacts</NavLink>
            </div>
        </nav >
    )
}

export default Navigation