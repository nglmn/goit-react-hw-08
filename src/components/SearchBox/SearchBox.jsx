import { TextField } from '@mui/material';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { selectFilter } from "../../redux/filters/selectors";


const SearchBox = () => {
    const dispatch = useDispatch();
    const filterUsers = useSelector(selectFilter);

    const onFilterContacts = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <div className={css.searchBar}>
            <TextField
                id="outlined-basic"
                label="Find contacts by name"
                variant="outlined"
                type='text'
                name='search'
                value={filterUsers}
                onChange={onFilterContacts} />
        </div>
    )
}

export default SearchBox;