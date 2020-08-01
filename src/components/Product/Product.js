import React from 'react';
import "./Product.css";


export default function Product({  addOrder, elem }) {
    return (
        <div className="static-product" onClick={() => addOrder(elem.name)}>
            <div className="static-product-left">
                <h4 className="static-product-name">{elem.name}</h4>
                <span className="static-product-price">Price: {elem.price} KGS</span>
            </div>
            <div className="static-product-right">
                {
                    elem.category === "food" ? (
                        <i className="fas fa-utensils"></i>
                    ) : (
                            <i className="fas fa-coffee"></i>
                        )
                }
            </div>
        </div>
    );
}
