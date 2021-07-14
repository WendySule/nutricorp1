import React, { useEffect, useState } from 'react'
import vector from '../assets/image/vector.svg'
import trash from '../assets/image/trash.svg'
import "../styles/CartStyle.css"
// import {fb}from '../environments/firebase-config'
import 'firebase/firestore'


const CartContainer = () => {
    const Order = JSON.parse(localStorage.getItem('order'))
    console.log(Order)
    // const  [totalOrder, setTotalOrder] = useState ([])
    if(Order) {
        const data = [...Order]
        console.log(data)
    }
    // setTotalOrder(Order)
    

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
                {
                    Order.map(ord => (
                    <div>    
                    <section className="cardContainer">
                    <article className="card-section">
                        <img className="card-img" alt="img" src={ord.img}></img>
                        <div className="card-section-sum">
                            <button className="button-rad">
                            +
                            </button>
                                <p>{ord.qty }</p>
                            <button className="button-rad" >
                            -
                            </button>
                        </div>
                    </article>
                    <article className="card-section1">
                        <h2 className="title">{ord.title }</h2>
                        <p className="subtitle">{ord.product }</p>
                        <p className="subtitle">{ord.quantity }</p>
                        <p className="subtitle">Cómpralo a: {ord.price } </p>
                        <p className="subtitle">Véndelo a: s/.{ord.price + ord.price*0.25} </p>
                        <p className="subtitle">Ganancia: s/. {ord.price*0.25 }</p>
                    </article>
                    <section className='trash-icon'>
                        <img src={trash} alt="trash-icon" className="trash-icon2" />
                    </section>  
                    </section>
                    </div>
                    ))  
                }
                 <hr className='line'></hr>
                        <section className='total-container'>
                        <p className='first-total'>Monto total: </p>
                        <section className='pay'>s/ </section> 
                        </section>
                        <section className='total-container'>  
                        <p className='discount-total'>Descuento de colaborador: </p>
                        <section className='pay1'>- s/</section>
                        </section>
                        <hr className='line'></hr>
                        <section className='total-container'>
                        <p className='final-total'>Total a pagar:</p> 
                        <section className='pay'> s/</section>
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
