import {useContext,useEffect} from 'react';
import Birthday from './Birthday';
import List from './List';
import ApiContext from '../context/ApiContext';

const Main = () => {
    const {getUsers} = useContext(ApiContext);

    useEffect(() => getUsers(), [])

    return (
        <main id="signos" >
            <Birthday />
            <List />
        </main>
    )
}

export default Main
