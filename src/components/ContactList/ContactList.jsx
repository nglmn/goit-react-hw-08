import Contact from "../Contact/Contact";
import './ContactList.css';

const ContactList = ({ users }) => {
    return (
        <ul className="user-list">
            {users.map(({ id, ...userProps }) => {
                return <Contact key={id} userProps={userProps} id={id} />
            })}
        </ul>
    )
}

export default ContactList;