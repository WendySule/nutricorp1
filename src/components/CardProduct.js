import React from 'react';
import { Card } from 'react-bootstrap'

import '../styles/card.css'


export const CardProduct = () => {

  return(
  <section className="card-container">
<article  className="card-section">
<img src="" alt="img"></img>
<div>
<p>+</p>
<p>qty</p>
<p>-</p>
</div>

</article>
<article className="card-section">
<h2>title del producto</h2>
<p>Precio: 20</p>
<p>Precio Sugerido: 25</p>

<button className="button-red">Agregar</button>
<button className="button-white">Quitar</button>
</article>
  </section>

  )
}

