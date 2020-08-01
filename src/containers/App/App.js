import React from 'react';
import './App.css';
import { useState } from 'react';
import OrderList from '../../components/OrderLIst/orderList';
import TotalPrice from '../../components/TotalPrice/totalPrice';
import Product from '../../components/Product/Product';
import "./../../fontawesome-free-5.14.0-web/css/all.min.css";





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
    {
      name: "pie",
      price: 70,
      category: "food"

    },
    {
      name: "cola",
      price: 32,
      category: "drink",
    },
    {
      name: "coсktail",
      price: 50,
      category: "drink",
    }, {
      name: "fruit drink",
      price: 25,
      category: "drink",
    }
  ];
  const getCleanOrders = () => {
    return staticProducts.map(elem => ({ name: elem.name, count: 0 }));
  };
  const [orders, setOrders] = useState(getCleanOrders());
  const addOrder = (name) => {
    const copyOrders = [...orders];
    const index = copyOrders.findIndex(order => order.name === name);
    const copyOrder = copyOrders[index];
    copyOrder.count++;
    copyOrders[index] = copyOrder;
    setOrders(copyOrders);

  };
  const findPrice = order => {
    return order.count * staticProducts.find(elem => elem.name === order.name).price;
  };
  const getTotalPrice = () => {
    return orders.reduce((acc, order) => {
      return acc + findPrice(order);
    }, 0);
  };
  const deleteOneOrder = (name) => {
    const copyOrders = [...orders];
    const index = copyOrders.findIndex(order => order.name === name);
    const copyOrder = copyOrders[index];
    copyOrder.count--;
    copyOrders[index] = copyOrder;
    setOrders(copyOrders);
  };
  return (
    <div className="App">
      <div className="orders-block">
        <h3 className="title">Order details </h3>
        <OrderList
          orders={orders}
          findPrice={findPrice}
          deleteOneOrder={deleteOneOrder}
          staticProducts={staticProducts}
        />
        <TotalPrice
          getTotalPrice={getTotalPrice}
          setOrders={setOrders}
          getCleanOrders={getCleanOrders}
        />
      </div>
      <div className="product-block">
        <h3 className="title">
          Add items
        </h3>
        <div className="all-products">
          {staticProducts.map(elem => (
            <Product
              elem={elem}
              key={elem.name}
              addOrder={addOrder}
            />
          ))}
        </div>
      </div>
    </div >
  );
}

export default App;
