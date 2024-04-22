import { FaUserCircle } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import './Contact.css';
import { useDispatch } from "react-redux";
import { deleteContactById } from "../../redux/contactsOps";


const Contact = ({ userProps: { name, number }, id }) => {
    const dispatch = useDispatch();
    const handleDeleteUser = (id) => {
        dispatch(deleteContactById(id));
    }

    function cutParameter(str) {
        if (str.length > 12) {
            return str = `${str.slice(0, 12)}..`;
        } else {
            return str;
        }
    }
    return (
        <li className="user-item">
            <div className="user-info">
                <p className="userName"><FaUserCircle className="icon" />{cutParameter(name)}</p>
                <p className="userNumber"><HiPhone className="icon" />{cutParameter(number)}</p>
            </div>
            <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteUser(id)}>Delete
            </button>
        </li>
    )
}

export default Contact