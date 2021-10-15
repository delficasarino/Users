import { createContext,useState,useContext,useEffect } from "react"
import ApiContext from '../context/ApiContext';
import moment from 'moment';

const ActualContext = createContext();

const ActualProvider =  ({children}) => { 
    const {users} = useContext(ApiContext);

    const [actual, setActual] = useState()
        
    useEffect(() => {
        let actualUser =  users.find(user => {
            let init = moment(user.birthday, "YYYYMMDD");
            let now = moment();
            let valid = now.isAfter(init);
            return valid
        })
        setActual (actualUser)
    }, [])

    const data = {actual,setActual}
    return <ActualContext.Provider value={data}>{children}</ActualContext.Provider>
}

export {ActualProvider}
export default ActualContext;