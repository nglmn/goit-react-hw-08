import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllContacts } from "../../redux/contactsOps";
import { selectLoading, selectFilteredUsers } from "../../redux/selectors";
import Spinner from "../Spinner/Spinner";

const App = () => {
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

export default App;