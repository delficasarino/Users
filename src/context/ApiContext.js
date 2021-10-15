import { createContext,useState,useEffect } from "react";

const ApiContext = createContext();

const ApiProvider =  ({children}) => { 
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async (url) => {
            try {
                const endpoint = process.env.REACT_APP_SERVER_URL;
                const request = await fetch(endpoint);
                const datas = await request.json();
                setUsers((users)=> [...datas]);
            } catch (error) {
                console.error(error);
            }
            
        }
        getUsers(process.env.REACT_APP_SERVER_URL)
    }, [])
    
    const data = {users,setUsers};
    return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
}

export {ApiProvider}
export default ApiContext;