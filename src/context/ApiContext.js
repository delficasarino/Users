import { createContext,useState } from "react";

const ApiContext = createContext(null);

const ApiProvider =  ({children}) => { 
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const endpoint = process.env.REACT_APP_SERVER_URL;
            const request = await fetch(endpoint);
            const datas = await request.json();
            setUsers((users)=> [...datas]);
        } catch (error) {
            console.error(error);
        }
    }
    
    const data = {users,setUsers,getUsers};
    return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
}

export {ApiProvider}
export default ApiContext;