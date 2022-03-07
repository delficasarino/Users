import { createContext,useState } from "react"

const SearchContext = createContext(null);

const SearchProvider =  ({children}) => { 
    const [searchUser, setSearchUser] = useState();

    const searchByName = async (value) => {
        try {
            const endpoint = process.env.REACT_APP_SERVER_URL;
            const request = await fetch(endpoint);
            const datas = await request.json();
            setSearchUser(datas.find(s => 
                    String(s.name).toLowerCase().includes(value)))
             
        } catch (error) {
            console.error(error);
        }
    }

    const data = {setSearchUser,searchByName,searchUser}
    return <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
}

export {SearchProvider}
export default SearchContext;