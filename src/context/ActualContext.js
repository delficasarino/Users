import { createContext,useState } from "react"
import moment from 'moment';

const ActualContext = createContext(null);

const ActualProvider =  ({children}) => { 
    const [actual, setActual] = useState(null)
    const getUserBirthday = async () => {
        try {
            const endpoint = process.env.REACT_APP_SERVER_URL;
            const request = await fetch(endpoint);
            const datas = await request.json();
            setActual((actual)=> [...datas].find(user => moment(user.birthday).month() >= moment().month() && moment(user.birthday).dayOfYear() >= moment().dayOfYear()   ))
        } catch (error) {
            console.error(error);
        }
    }
    const data = {actual,getUserBirthday}
    return <ActualContext.Provider value={data}>{children}</ActualContext.Provider>
}

export {ActualProvider}
export default ActualContext;