import {useContext} from 'react';
import ApiContext from '../context/ApiContext';
import ThemeContext from '../context/ThemeContext';
import SearchContext from '../context/SearchContext';
import ActualContext from '../context/ActualContext';

import User from './User';

const List = () => {
    const {theme} = useContext(ThemeContext);
    const {users} = useContext(ApiContext);
    const {searchUser} = useContext(SearchContext);
    const {setActual} = useContext(ActualContext);

    return (
        <section className={theme}>
            {users.filter(user => {
                return searchUser ? user.id !== searchUser.id && user.id !== setActual.id : user.id !== setActual.id
            }).map((user) => 
                <User key={user.id} name={user.name} image={user.avatar} birthday={user.birthday} />
            )}
        </section>
    )
}

export default List
