import {useContext} from 'react';
import moment from 'moment';
import User from './User';
import ApiContext from '../context/ApiContext'
import SearchContext from '../context/SearchContext'

const Birthday = () => {
    const {users} = useContext(ApiContext);
    const {searchUser} = useContext(SearchContext);

    let busqueda = searchUser;

    let actual = users.find(user => {
        let init = moment(user.birthday, "YYYYMMDD");
        let now = moment();
        let valid = now.isAfter(init);
        return valid
    });

    return (
        <section id="destacado">
            {busqueda ? <User name={busqueda.name} image={busqueda.avatar} birthday={busqueda.birthday}/> : actual ? <User name={actual.name} image={actual.avatar} birthday={actual.birthday} destacado={true} /> : null  }
        </section>
    )
}

export default Birthday
