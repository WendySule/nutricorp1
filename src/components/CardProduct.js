import React from "react";
import { Card } from "react-bootstrap";

import "../styles/card.css";

export const CardProduct = ({ product }) => {

  return (
    <div>
      {product.map((prod)=>(
        <section className="card-container">
        <article className="card-section">
          <img src={prod.img} alt="img"></img>
          <div>
            <p>+</p>
            <p>qty</p>
            <p>-</p>
          </div>
        </article>
        <article className="card-section">
          <h2>{prod.product}</h2>
          <p>Precio:{prod.price} </p>
          <p>Precio Sugerido: {prod.price + 10}</p>
  
          <button className="button-red">Agregar</button>
          <button className="button-white">Quitar</button>
        </article>
      </section>
      ))}
    </div>

  );
};
