import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import './SearchBox.css';
import { selectFilter } from '../../redux/selectors';

const SearchBox = () => {
    const filterUsers = useSelector(selectFilter);
    const dispatch = useDispatch();

    function showFilteredUsers(e) {
        dispatch(setFilter(e.target.value));
    }

    return (
        <div className="search-bar">
            <label htmlFor="search" className='search-label'>Find contacts by name</label>
            <input
                type="text"
                name="search"
                className='search-input'
                value={filterUsers}
                onChange={showFilteredUsers} />
        </div>
    )
}

export default SearchBox;