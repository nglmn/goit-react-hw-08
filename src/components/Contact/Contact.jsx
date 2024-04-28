import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import css from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContactById } from "../../redux/contacts/contactsOptions";



const Contact = ({ userProps: { name, number }, id }) => {
    const dispatch = useDispatch();
    const onDeleteUser = (id) => {
        dispatch(deleteContactById(id));
    }

    function cutParameter(str) {
        if (str.length > 40) {
            return str = `${str.slice(0, 40)}..`;
        } else {
            return str;
        }
    }
    return (
        <li className={css.userItem}>
            <div className={css.btns}>
                <CloseIcon onClick={() => onDeleteUser(id)} />
            </div>
            <div className={css.contactContainer}>
                <div className={css.userInfo}>
                    <p className={css.userName}><PersonIcon className={css.icon} />{cutParameter(name)}</p>
                    <p className={css.userName}><CallIcon className={css.icon} />{cutParameter(number)}</p>
                </div>

            </div>
        </li>
    )
}

export default Contact