import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { fetchAllContacts } from "../redux/contacts/options";
import { selectLoading } from "../redux/contacts/selectors";
import { selectFilteredUsers } from "../redux/filters/selectors.js";
import Spinner from "../components/Spinner/Spinner";

import "../../src/css/style.css";

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch])

    //фільтрація йде тільки коли в полі пошуку введені данні, коли воно пусте, то показуються усі користувачі
    const filteredUsers = useSelector(selectFilteredUsers);


    return (
        <div className="container">
            <Helmet>
                <title>Phonebook</title>
            </Helmet>
            <div className="phonebook">
                <h1 className="titleContacts">Phonebook</h1>
                <div className="app-interface">
                    <div className="form-panel">
                        <ContactForm />
                        <SearchBox />
                    </div>
                    <ContactList users={filteredUsers} />
                    {isLoading && <Spinner />}
                </div>
            </div>
        </div>
    )
}

export default ContactsPage