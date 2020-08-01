import React from 'react';
import './App.css';
import './../../fontawesome-free-5.14.0-web/css/all.min.css';
import { useState } from 'react';
// import { useState } from 'react';

function App() {
  const staticProducts = [
    {
      name: "Hamburger",
      price: 80,
      category: "food"
    },
    {
      name: "Cheeseburger",
      price: 100,
      category: "food",
    },
    {
      name: "Fries",
      price: 50,
      category: "food"
    },
    {
      name: "Coffee",
      price: 60,
      category: "drink",
    },
  ];
  const setCleanOrders = () => {
    return staticProducts.map(elem => ({ name: elem.name, count: 0 }));
  };
  const [orders, setOrders] = useState(setCleanOrders());
  const addOrder = (name) => {
    const copyOrders = [...orders];
    const index = copyOrders.findIndex(order => order.name === name);
    const copyOrder = copyOrders[index];
    copyOrder.count++;
    copyOrders[index] = copyOrder;
    setOrders(copyOrders);

  };
  const findPrice=order=>{
    return order.count * staticProducts.find(elem => elem.name === order.name).price
  }
  const getTotalPrice=()=>{
    return orders.reduce((acc,order)=>{
      return acc+findPrice(order)
    },0)
  }
  const ordersList = (
    orders.map(order => (
      <div key={order.name}>
        {
          order.count ?
            (
              < div className="order">
                <h4 className="order-name">
                  <span className="order-count">x{order.count}</span> {order.name}
                </h4>
                <span className="order-price">{findPrice(order)} KGS</span>
                <span>
                  {
                    staticProducts.find(elem => elem.name === order.name).category === "food" ? (
                      <i className="fas fa-utensils"></i>
                    ) : (
                        <i className="fas fa-coffee"></i>
                      )
                  }
                </span>
                <button className="order-delete-btn">
                  <i className="fas fa-minus-circle"></i>
                </button>
              </div>
            )
            : (
              <></>
            )
        }
      </div>
    ))
  );
  return (
    <div className="App">
      <div className="orders-block">
        <h3 className="title">Order details</h3>
        <div className="orders-list">
          {orders.reduce((acc, order) => {
            if (order.count || acc) {
              return true;
            }
            return false;
          }, false)
            ?
            (ordersList)
            :
            (
              <span style={{ color: "#fff", fontSize: "20px" }}>
                Order is empty!
                <br />
                please add some items!
              </span>
            )
          }
        </div>
        <div className="total-price">Total price: {getTotalPrice()}</div>
      </div>
      <div className="product-block">
        <h3 className="title">Add items</h3>
        <div className="all-products">
          {staticProducts.map(elem => (
            <div className="static-product" key={elem.name} onClick={() => addOrder(elem.name)}>
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
          ))}
        </div>
      </div>
    </div >
  );
}

export default App;
