import React from 'react'
import cart1 from '../assets/image/cart1.svg'
import home from '../assets/image/home.svg'
import cart2 from '../assets/image/cart1.svg'
import logOut from '../assets/image/logOut.svg'
import "../styles/MenuStyle.css"
import { Nav, Navbar} from "react-bootstrap";
import {fb}from '../environments/firebase-config'
import 'firebase/auth'
import { signOutAuth}from '../services/authService'


const MenuName = (orderProduct) => {
    const currentUser =fb.auth().currentUser;
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Navbar.Brand  >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nutriMarket' />
        </Navbar.Brand>
            <h3 className='nutriMarket'>Nutrimarket</h3>
        <Navbar.Brand href="/cart">
            { orderProduct.orderProduct.length ? (<p className="pop">{orderProduct.orderProduct.length}</p>) : ''}
            <img src={cart2}
            alt="cart-icon"
            width="30"
            height="30"
            className="cart-icon"
            />
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <h4 className='welcome'>¡Hola, {currentUser.displayName}!</h4>
                <Nav.Link href="/home">
                <Navbar.Brand >
                <img src={home}
                alt="cart-icon"
                width="20"
                height="20"
                className="cart-icon"
                />
                </Navbar.Brand>
                Inicio</Nav.Link>
            </Nav>
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Nav>
            <Nav.Link href="/cart">
                <Navbar.Brand >
                <img src={cart1}
                alt="cart-icon"
                width="20"
                height="20"
                className="cart-icon"
                />
                </Navbar.Brand>
            Carrito de compras</Nav.Link>
            <Nav.Link onClick={signOutAuth} href="/">
            <Navbar.Brand >
                <img src={logOut}
                alt="cart-icon"
                width="20"
                height="20"
                className="cart-icon"
                />
            </Navbar.Brand>
            Cerrar sesión</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}

export default MenuName
