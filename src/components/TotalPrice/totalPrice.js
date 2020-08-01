import React from 'react';
import './totalPrice.css';


export default function totalPrice({ getCleanOrders, setOrders, getTotalPrice }) {
    return (
        <div className="orders-block__bottom">
            <div className="total-price">Total price: {getTotalPrice()}</div>
            <button className="clear-all-btn" onClick={() => setOrders(getCleanOrders())}>clear all</button>
        </div>
    );
}
