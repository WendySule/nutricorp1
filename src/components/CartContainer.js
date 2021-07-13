import React from 'react'
import vector from '../assets/image/vector.svg'
import "../styles/CartStyle.css"




const CartContainer = () => {

    return(
        <section>
            <section >
                <section className="vector-icon" >  
                    <a href="/home">
                    <img src={vector} alt="cart-icon" className="vector-icon2" 
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
                <section>contenedor</section>

            </section>
        </section>  
    )
}

export default CartContainer
