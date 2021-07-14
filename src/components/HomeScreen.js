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
  const [quantity, setQuantity] = useState(0);

  const getQuantity = (prod, operateMat) => {
    if (orderProduct.find((e) => e.id === prod.id)) {
      setQuantity(orderProduct.find((e) => e.id === prod.id).qty);
    } else if(operateMat==="+") {
      setQuantity(1);
    }else{
      setQuantity(0)
    }
  };


  const bringProduct = () => {
    getProducts(setAllProduct);
  };

  useEffect(() => {
    bringProduct();
  }, []);
  return (
    <>
      <MenuName
      orderProduct={orderProduct}
        />
      <Navbar
      Allproduct={Allproduct}
      productFilter={productFilter}
      setProductFilter={setProductFilter}
      setQuantity={setQuantity}
      orderProduct={orderProduct} />
      <main className="main-container">
        {
  productFilter.length > 0 ?
productFilter.map((prod) => {
  return <CardProduct
  key={prod.id}
  prod={prod}
  orderProduct={orderProduct}
  setOrderProduct={setOrderProduct} getQuantity={getQuantity}
  quantity={quantity}/>;
}): Allproduct.map((prod) => {
  return <CardProduct
  key={prod.id}
  prod={prod}
  orderProduct={orderProduct}
  setOrderProduct={setOrderProduct} getQuantity={getQuantity}
  quantity={quantity}/>;
})
      }

      </main>
      <footer className='the-footer'>
      Saldo disponible  s/. 150.00
      </footer>
    </>
  );
};

export default HomeScreen;
