import {useContext} from 'react';
import moment from 'moment';
import ApiContext from '../context/ApiContext';
import ThemeContext from '../context/ThemeContext';
import SearchContext from '../context/SearchContext';

import User from './User';

const List = () => {
    const {theme} = useContext(ThemeContext);
    const {users} = useContext(ApiContext);
    const {searchUser} = useContext(SearchContext);
    let actual = users.find(user => {
        let init = moment(user.birthday, "YYYYMMDD");
        let now = moment();
        let valid = now.isAfter(init);
        return valid
    });

    return (
        <section className={theme}>
            {users.filter(user => {
                return searchUser ? user.id !== searchUser.id && user.id !== actual.id : user.id !== actual.id
            }).map((user) => 
                <User key={user.id} name={user.name} image={user.avatar} birthday={user.birthday} />
            )}
        </section>
    )
}

export default List
