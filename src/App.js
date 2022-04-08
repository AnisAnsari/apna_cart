// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 10s Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10s Max",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQunatity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQunatity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQunatity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    // console.log(newProductList);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQunatity={incrementQunatity}
          decrementQunatity={decrementQunatity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQunatity={resetQunatity} />
    </>
  );
}

export default App;
