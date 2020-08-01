import React from 'react';
import './orderItem.css';
export default function orderItem({ order, findPrice, staticProducts, deleteOneOrder }) {
    console.log(findPrice);
    return (
        <div className="order">
            <h4 className="order-name">
                <span className="order-count">x{order.count}</span> {order.name}
            </h4>
            <span className="order-price">{findPrice(order)} KGS</span>
            <span>
                {
                    staticProducts.find(elem => elem.name === order.name).category === "food"
                        ? (
                            <i className="fas fa-utensils"></i>
                        ) :
                        (
                            <i className="fas fa-coffee"></i>
                        )
                }
            </span>
            <button onClick={() => deleteOneOrder(order.name)} className="order-delete-btn">
                <i className="fas fa-minus-circle"></i>
            </button>
        </div>
    );
}
