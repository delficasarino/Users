import { createContext,useContext } from "react"
import ApiContext from '../context/ApiContext';
import moment from "moment";

const OrderContext = createContext();

const OrderProvider =  ({children}) => { 
    const {setUsers} = useContext(ApiContext);

    const orderUserByName = () =>  setUsers((users)=> [...users].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)))  
    const orderUserByDate = () => setUsers((users)=> [...users].sort((a, b) => moment(a.birthday).format("YYYYMMDD") - moment(b.birthday).format("YYYYMMDD")))

    const data = {orderUserByDate,orderUserByName}
    return (
        <OrderContext.Provider value={data}>{children}</OrderContext.Provider>
    )
}

export {OrderProvider}
export default OrderContext;