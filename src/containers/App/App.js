import React from 'react';
import './App.css';
import { useState } from 'react';
// import { useState } from 'react';

function App() {
  const staticProducts = [
    {
      name: "Hamburder",
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
      category: "Food"
    },
    {
      name: "Coffee",
      price: 60,
      category: "drink",
    },
  ];
  const [orders, setOrders] = useState([
    {
      name: "Hamburger",
      count: 1,
    }
  ]);
  return (
    <div className="App">
      <div className="orders-block">
        <h3 className="title">Order details</h3>
        <div className="orders-list">
          {
            
          }
        </div>
      </div>
      <div className="add-product-block">
        <h3 className="title">Add items</h3>
        <div className="all-products">
          {staticProducts.map(elem => (
            <div className="static-product" key={elem.name}>
              <h4 className="static-product-name">{elem.name}</h4>
              <span className="static-product-price">Price: {elem.price} KGS</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
