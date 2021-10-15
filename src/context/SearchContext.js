import { createContext,useState,useContext } from "react"
import ApiContext from '../context/ApiContext';

const SearchContext = createContext();

const SearchProvider =  ({children}) => { 
    const {users} = useContext(ApiContext);
    const [searchUser, setSearchUser] = useState();
    const searchByName = (value) => {        
        if(value){
            setSearchUser((searchUser) => users.find(s => String(s.name).toLowerCase().includes(value)))
        } else{
            setSearchUser((searchUser) => null)
        } 
    }   

    const data = {setSearchUser,searchByName,searchUser}
    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    )
}

export {SearchProvider}
export default SearchContext;