import {useContext,useRef} from 'react';
import SearchContext from '../context/SearchContext';

const Search = () => {
    const {searchByName} = useContext(SearchContext);
    const search = useRef();

    return (
        <article id="search">
            <input type="search" name="search" id="search" placeholder="buscar por signo..." ref={search} onChange={() => searchByName(search.current.value)}/>
        </article>
    )
}

export default Search
