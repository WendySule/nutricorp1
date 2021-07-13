import React, { useState } from "react";

import "../styles/card.css";

export const CardProduct = ({ prod, orderProduct, setOrderProduct }) => {
  const [quantity, setQuantity] = useState(0);

  console.log(`HoLA ORDER `);
  console.log(orderProduct);

  const handleAdd = (prop) => {
    if (orderProduct.find((elem) => elem.id === prop.id)) {
      console.log(`mas1`);
      setOrderProduct = orderProduct.map((elem) => {
        let item;
        if (elem.id === prop.id) {
          const qty = elem.qty++;
          item = { ...elem, qty };
        } else {
          item = elem;
        }
        getQuantity(prop, "+");
        return item;
      });
    } else {
      setOrderProduct([...orderProduct, { ...prop, qty: 1 }]);
      getQuantity(prop , "+");
      console.log("mas11");
    }
  };
  const getQuantity = (prod, operateMat) => {

    if (orderProduct.find((e) => e.id === prod.id)) {
      setQuantity(orderProduct.find((e) => e.id === prod.id).qty);
    } else if(operateMat==="+") {
      setQuantity(1);
    }else{
      setQuantity(0)
    }
  };

  const handleRest = (prop) => {
    // console.log(`menos 1 `);
    if (orderProduct.find((elem) => elem.id === prop.id)) {
      console.log(`menos 12`)
      setOrderProduct = orderProduct.map((elem) => {
        let item;
        if (elem.id === prop.id && elem.qty >= 1) {
          console.log(elem.id );
          console.log(prod.id);
          
          console.log(`menos 12.1`)
          const qty = elem.qty--;
          console.log(qty);
          console.log(item);
          item = { ...elem, qty };
          console.log(item);
          getQuantity(prop,"");
          
        } else {
          console.log(`menos 12.2`)
          // item = elem;
          let index = orderProduct.indexOf(prop.id);
          orderProduct.splice(index, 1);
          console.log(orderProduct);
          getQuantity(prop,"");
          
        }
        return item;
      });
    }
  };

  return (
    <>
      <section className="card-container">
        <article className="card-section">
          <img className="card-img" src={prod.img} alt="img"></img>
          <div className="card-section-sum">
            <button className="button-rad" onClick={() => handleAdd(prod)}>
              +
            </button>
            <p>{quantity}</p>
            <button className="button-rad" onClick={() => handleRest(prod)}>
              -
            </button>
          </div>
        </article>
        <article className="card-section1">
          <h2 className="title">{prod.title}</h2>
          <p className="subtitle">{prod.product}</p>
          <p className="subtitle">Cantidad: {prod.quantity}</p>
          <p className="subtitle">Precio: s/.{prod.price} </p>
          <p className="subtitle">Precio Sugerido: s/.{prod.price + 10}</p>
          <div>
            <button className="button-red" onClick={() => handleAdd(prod)}>
              Agregar
            </button>
            <button className="button-white">Quitar</button>
          </div>
        </article>
      </section>
    </>
  );
};
