import {useContext} from 'react';
import OrderContext from '../context/OrderContext'
const Order = () => {
    const {orderUserByName,orderUserByDate} = useContext(OrderContext);
    return (
        <section id="order">
            <button onClick={() => orderUserByName()}>
                <i className="fas fa-sort-alpha-down"></i>
            </button>
            <button onClick={() => orderUserByDate()}>
                <i className="fas fa-sort-numeric-down"></i>
            </button>
        </section>
    )
}

export default Order
