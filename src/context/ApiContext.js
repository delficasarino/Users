import { createContext,useState } from "react";

const ApiContext = createContext();

const ApiProvider =  ({children}) => { 
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const endpoint = process.env.REACT_APP_SERVER_URL;
        const request = await fetch(endpoint);
        const datas = await request.json();
        setUsers((users)=> [...datas]);
    }

    const data = {users,getUsers,setUsers};
    return (
        <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
    )
}

export {ApiProvider}
export default ApiContext;