import React from 'react';
import OrderItem from './../OrderItem/orderItem';
import "./orderList.css";


export default function OrderList({ orders, findPrice, staticProducts, deleteOneOrder }) {
    const ordersList = (
        orders.map(order => (
            <div key={order.name}>
                {
                    order.count ?
                        (
                            <OrderItem
                                order={order}
                                findPrice={findPrice}
                                staticProducts={staticProducts}
                                deleteOneOrder={deleteOneOrder}
                            />
                        )
                        : (
                            <></>
                        )
                }
            </div>
        ))
    );
    return (
        <div className="orders-list">
            {orders.reduce((acc, order) => { if (order.count || acc) { return true; } return false; }, false)
                ? (ordersList) :
                (
                    <span style={{ color: "#fff", fontSize: "20px" }}>
                        Order is empty!
                        <br />
                        please add some items!
                    </span>
                )
            }
        </div>
    );
}
