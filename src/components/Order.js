import {useContext} from 'react';
import OrderContext from '../context/OrderContext'
import ApiContext from '../context/ApiContext'
const Order = () => {
    const {order,changeOrder,orderUserByNameAlt,orderUserByDateAlt,orderUserByName,orderUserByDate} = useContext(OrderContext);
    const {setUsers} = useContext(ApiContext);
    return (
        <section id="order">
            {
                order !== 'name' ?             <button onClick={() => {
    setUsers( users => orderUserByName(users));
    changeOrder('name');
}}>
    <i className="fas fa-sort-alpha-down"></i>
</button> : null
            }

{
    order !== 'nameAlt' && order !== null ?             <button onClick={() => {
        setUsers( users => orderUserByNameAlt(users));
        changeOrder('nameAlt');
    }}>
        <i className="fas fa-sort-alpha-up"></i>
    </button> : null
            
            }

{
order !== 'date' ?             <button onClick={() => {
    setUsers( users => orderUserByDate(users));
    changeOrder('date');
}}>
    <i className="fas fa-sort-numeric-down"></i>
</button> : null
            }

    {
        order !== 'dateAlt' && order !== null ? <button onClick={() => {
            setUsers( users => orderUserByDateAlt(users));
            changeOrder('dateAlt');
        }}>
            <i className="fas fa-sort-numeric-up"></i>
        </button> : null
    }
</section>
    )
}

export default Order
