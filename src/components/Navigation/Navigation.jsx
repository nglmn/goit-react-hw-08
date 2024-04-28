import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import css from "./Navigation.module.css";
import { useSelector } from 'react-redux';
import { selectIsLogged, selectUserData } from '../../redux/auth/selectors';
import { logOutUser } from '../../redux/auth/operations';


const Navigation = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(selectIsLogged);
    const userName = useSelector(selectUserData);

    const onHandleLogOut = () => {
        dispatch(logOutUser());

    }

    return (
        <nav className={css.navContainer}>
            <div className={css.navMenu}>
                <NavLink to="/">Home</NavLink>
                {isLogged
                    ? (
                        <>
                            <NavLink to="/contacts">Contacts</NavLink>
                            <div className={css.userContainer}>
                                <span className={css.person}>
                                    <PersonIcon className={css.icon} />
                                    <p className={css.name}>{userName.name}</p>
                                </span>
                                <Button type='button' onClick={onHandleLogOut} className={css.btn}>Log out</Button>
                            </div>
                        </>
                    )
                    : (
                        <>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>
                    )
                }
            </div>
        </nav>
    )
}

export default Navigation;