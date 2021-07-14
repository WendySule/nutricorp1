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
  console.log(`hola order home `);
  console.log(orderProduct);


  useEffect(() => {
    bringProduct();
  }, []);

  return (
    <>
      <MenuName />
      <Navbar product={product}/>
      <main className="main-container">
        {product.map((prod) => {
          return <CardProduct key={prod.id} prod={prod}  orderProduct={orderProduct} setOrderProduct={setOrderProduct}/>;
        })}
      </main>
      <footer className='the-footer'>
      Saldo disponible  s/. 150.00
      </footer>
    </>
  );
};

export default HomeScreen;
