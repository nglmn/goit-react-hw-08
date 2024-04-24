import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllContacts } from "../redux/contacts/contactsOps";
import { selectLoading } from "../redux/contacts/contactsSelectors";
import { selectFilteredUsers } from "../redux/filters/filtersSelectors"
import Spinner from "../components/Spinner/Spinner";

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch])

    //фільтрація йде тільки коли в полі пошуку введені данні, коли воно пусте, то показуються усі користувачі
    const visibleUsers = useSelector(selectFilteredUsers);
    return (
        <div className="phonebook">
            <h1>Phonebook</h1>
            <div className="app-interface">
                <div className="form-panel">
                    <ContactForm />
                    <SearchBox />
                </div>
                {isLoading && <Spinner />}
                <ContactList users={visibleUsers} />
            </div>
        </div>
    )
}

export default ContactsPage