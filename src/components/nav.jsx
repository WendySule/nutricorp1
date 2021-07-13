import React from 'react'
import {Nav} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import MenuName from './MenuName'

function nav() {
    return (
      <div>
        <MenuName/>
        <nav>   
        <>
        <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control type="search" placeholder="Busca un producto" />
        </Form.Group>

        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <img  class="icons" src="assets/image/icon_aceites.png" alt="" />
            <Nav.Link href="/home">Aceites</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <img class="icons" src="assets/image/icon_conservas.png" alt="" />
            <Nav.Link eventKey="link-1">Conservas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <img class="icons" src="assets/image/icon_pastas.png" alt="" />
            <Nav.Link eventKey="link-2">Pastas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <img class="icons" src="assets/image/icon_detergentes.png" alt="" />
            <Nav.Link eventKey="link-3">Detergentes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <img class="icons" id="icon_jabones" src="assets/image/icon_jabones.png" alt="" />
            <Nav.Link eventKey="link-4">Jabones</Nav.Link>
          </Nav.Item>
        </Nav>
      </>   
      </nav>
     </div> 
    )
    
}

export default nav
