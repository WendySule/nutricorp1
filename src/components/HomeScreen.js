import React, { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../services/productService";
import { CardProduct } from "./CardProduct";
import MenuName from "./MenuName";
import Navbar from "./Navbar";
import "../styles/home.css";

const HomeScreen = () => {
  const [product, setProduct] = useState([]);
  const [orderProduct, setOrderProduct] = useState([]);

  const bringProduct = () => {
    getProducts(setProduct);
  };
  console.log(product);

  useEffect(() => {
    bringProduct();
  }, []);

  return (
    <>
      <MenuName />
      <Navbar />
      <main className="main-container">
        {product.map((prod) => {
          return <CardProduct key={prod.id} prod={prod}  orderProduct={orderProduct} setOrderProduct={setOrderProduct}/>;
        })}
      </main>
    </>
  );
};

export default HomeScreen;
