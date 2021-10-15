import {useContext} from 'react';
import moment from 'moment';
import ApiContext from '../context/ApiContext';

const Order = () => {
    const {users,setUsers} = useContext(ApiContext);
    
    let newOrderByName = [...users].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
    let newOrderByDate = [...users].sort((a, b) => moment(a.birthday).format("YYYYMMDD") - moment(b.birthday).format("YYYYMMDD"))

    return (
        <section id="order">
            <button
            onClick={() => {
            if (newOrderByName[0] === users[0])
                newOrderByName = [...users].sort((b, a) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
                setUsers(newOrderByName)
            }}
            >
                <i className="fas fa-sort-alpha-down"></i>
            </button>
            <button
            onClick={() => {
                if (newOrderByDate[0] === users[0])
                newOrderByDate = [...users].sort((b, a) => moment(a.birthday).format("YYYYMMDD") - moment(b.birthday).format("YYYYMMDD"))
                  setUsers(newOrderByDate)
              }}
            >
                <i className="fas fa-sort-numeric-down"></i>
            </button>
        </section>
    )
}

export default Order
