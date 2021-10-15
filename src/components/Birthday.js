import {useContext} from 'react';
import User from './User';
import SearchContext from '../context/SearchContext'
import ActualContext from '../context/ActualContext'

const Birthday = () => {
    const {searchUser} = useContext(SearchContext);
    const {setActual} = useContext(ActualContext);

    return (
        <section id="destacado">
            {searchUser ? <User name={searchUser.name} image={searchUser.avatar} birthday={searchUser.birthday}/> : setActual ? <User name={setActual.name} image={setActual.avatar} birthday={setActual.birthday} destacado={true} /> : null  }
        </section>
    )
}

export default Birthday
