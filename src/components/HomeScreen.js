import React, { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../services/productService";
import { CardProduct } from "./CardProduct";
import MenuName from "./MenuName";
import Navbar from "./Navbar";
import "../styles/home.css";

const HomeScreen = () => {
  const [Allproduct, setAllProduct] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const [orderProduct, setOrderProduct] = useState([]);


  const bringProduct = () => {
    getProducts(setAllProduct);
  };

  useEffect(() => {
    bringProduct();
  }, []);

  return (
    <>
      <MenuName />
      <Navbar Allproduct={Allproduct} productFilter={productFilter} setProductFilter={setProductFilter}/>
      <main className="main-container">
        {productFilter.map((prod) => {
          return <CardProduct key={prod.id} prod={prod}  orderProduct={orderProduct} setOrderProduct={setOrderProduct}/>;
        })}
      </main>
    </>
  );
};

export default HomeScreen;
