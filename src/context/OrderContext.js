import { createContext,useContext,useEffect,useState} from "react"
import ApiContext from '../context/ApiContext';
import moment from "moment";

const OrderContext = createContext();

const OrderProvider =  ({children}) => { 
    const [order, setOrder] = useState(null)
    const changeOrder = (type) => setOrder(type)  

    const orderUserByName = data => [...data].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)) 
    const orderUserByDate = data =>  [...data].sort((a, b) => moment(a.birthday).format("YYYYMMDD") - moment(b.birthday).format("YYYYMMDD"))
    const orderUserByNameAlt = data => [...data].sort((a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)) 
    const orderUserByDateAlt = data =>  [...data].sort((a, b) => moment(b.birthday).format("YYYYMMDD") - moment(a.birthday).format("YYYYMMDD"))

    const data = {order,changeOrder,orderUserByName,orderUserByDate,orderUserByNameAlt,orderUserByDateAlt}
    return <OrderContext.Provider value={data}>{children}</OrderContext.Provider>
}

export {OrderProvider}
export default OrderContext;