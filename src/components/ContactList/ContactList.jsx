import Contact from "../Contact/Contact";
import './ContactList.css';

const ContactList = ({ users }) => {
    return (
        <ul className="user-list">
            {users && users.length !== 0
                ? users.map(({ id, ...userProps }) => {
                    return <Contact key={id} userProps={userProps} id={id} />
                })
                : <li>
                    <p>The contacts list are empy, add new contact</p>
                </li>
            }
        </ul>
    )
}

export default ContactList;