import React from 'react'
import vector from '../assets/image/vector.svg'
import trash from '../assets/image/trash.svg'
import "../styles/CartStyle.css"
// import {fb}from '../environments/firebase-config'
import 'firebase/firestore'


const CartContainer = () => {



        
    return(
       <> 
        <section>
            <section >
                <section className="vector-icon" >  
                    <a href="/home">
                    <img src={vector} alt="vector-icon" className="vector-icon2" 
                    />
                    </a>
                </section>
                <section className='balance'>
                    <p>Saldo disponible: s/50.00</p>
                </section>
            </section>
            <section className='bar2'>
                <section className='bar'>
                    <p className='barText1'>Cantidad</p>
                    <p className='barText2'>Producto / Descripción</p>
                </section>
            </section>
            <section>
                <section className="cardContainer">
                    <article className="card-section">
                        <img className="card-img" alt="img"></img>
                        <div className="card-section-sum">
                            <button className="button-rad">
                            +
                            </button>
                                <p>0</p>
                            <button className="button-rad" >
                            -
                            </button>
                        </div>
                    </article>
                    <article className="card-section1">
                        <h2 className="title">-Título-</h2>
                        <p className="subtitle">-Descripción-</p>
                        <p className="subtitle">-Cantidad-</p>
                        <p className="subtitle">Cómpralo a: </p>
                        <p className="subtitle">Véndelo a: s/. </p>
                        <p className="subtitle">Ganancia: s/.</p>
                    </article>
                    <section className='trash-icon'>
                        <img src={trash} alt="trash-icon" className="trash-icon2" />
                    </section>  
                </section>   
                    <hr className='line'></hr>
                    <section className='total-container'>
                       <p className='first-total'>Monto total: </p>
                       <section className='pay'>s/ 200.00</section> 
                    </section>
                     <section className='total-container'>  
                       <p className='discount-total'>Descuento de colaborador: </p>
                       <section className='pay1'>- s/ 10.00</section>
                    </section>
                    <hr className='line'></hr>
                    <section className='total-container'>
                    <p className='final-total'>Total a pagar:</p> 
                    <section className='pay'> s/ 180.00</section>
                    </section>
                    <section className='continue-container'>
                        <bottom className='continue'>CONTINUAR</bottom>
                    </section>
            </section>
        </section>  
       </> 
    )
}

export default CartContainer
