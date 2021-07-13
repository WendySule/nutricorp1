import React from "react";

import "../styles/card.css";

export const CardProduct = ({ prod, orderProduct, setOrderProduct }) => {

  const handleAdd = () =>{
    console.log(`mas1`);
  }

  const handleRest = () =>{
   console.log(`menojs 1 `);
  }


  return (
    <>
      <section className="card-container" key={prod.id}>
        <article className="card-section">
          <img className="card-img" src={prod.img} alt="img"></img>
          <div className="card-section-sum">
            <button 
            className="button-rad"
            onClick={handleAdd}
            >+</button>
            <p>0</p>
            <button 
            className="button-rad"
            onClick={handleRest}
            >-</button>
          </div>
        </article>
        <article className="card-section1">
          <h2 className="title">{prod.title}</h2>
          <p className="subtitle">{prod.product}</p>
          <p className="subtitle">Cantidad: {prod.quantity}</p>
          <p className="subtitle">Precio: s/.{prod.price} </p>
          <p className="subtitle">Precio Sugerido: s/.{prod.price + 10}</p>
          <div>
            <button className="button-red"
            >Agregar</button>
            <button className="button-white">Quitar</button>
          </div>
        </article>
      </section>
    </>
  );
};
