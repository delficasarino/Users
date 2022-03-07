import {useContext,useEffect} from 'react';
import ApiContext from '../context/ApiContext';
import ThemeContext from '../context/ThemeContext';
import SearchContext from '../context/SearchContext';
import ActualContext from '../context/ActualContext';

import User from './User';

const List = () => {
    const {theme} = useContext(ThemeContext);
    const {users,getUsers} = useContext(ApiContext);
    const {searchUser} = useContext(SearchContext);
    const {actual} = useContext(ActualContext);

    useEffect(() => getUsers(), [])

    return (
        <section className={theme}>
            {users.filter(user => searchUser ? user.id !== searchUser.id && user.id !== actual.id : user.id !== actual.id).map((user) => 
                <User key={user.id} name={user.name} image={user.avatar} birthday={user.birthday} />
            )}
        </section>
    )
}

export default List
