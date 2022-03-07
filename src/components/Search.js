import {useContext,useRef} from 'react';
import SearchContext from '../context/SearchContext';

const Search = () => {
    const {searchByName,setSearchUser} = useContext(SearchContext);
    const search = useRef();

    return (
        <article id="search">
            <input type="search" name="search" id="search" placeholder="buscar por signo..." ref={search} onChange={() => search.current.value.length > 2 ? searchByName(search.current.value): setSearchUser(null)}/>
        </article>
    )
}

export default Search
