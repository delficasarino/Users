import {useContext,useEffect} from 'react';
import User from './User';
import SearchContext from '../context/SearchContext'
import ActualContext from '../context/ActualContext'

const Birthday = () => {
    const {searchUser} = useContext(SearchContext);
    const {actual,getUserBirthday} = useContext(ActualContext);
    useEffect(() => getUserBirthday(),[actual])
    return (
        <section id="destacado">
            {searchUser ? <User name={searchUser.name} image={searchUser.avatar} birthday={searchUser.birthday}/> : actual ? <User name={actual.name} image={actual.avatar} birthday={actual.birthday} destacado={true} /> : null  }
        </section>
    )
}

export default Birthday
