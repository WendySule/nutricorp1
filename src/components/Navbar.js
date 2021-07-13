import React from "react";
// import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Navbar = ({product}) => {
  console.log(`hola navbar`);
  console.log(product);
  // const[filtercategory, setFilterCategory] = useState([])

  // const ShowCategory = () => {

  // }

  return (
    <div>
      <nav>
        <section >
          <Form.Group controlId="formBasicSearch" id="container-center">
            <div id="inputSearch">
              <Form.Control
                type="text"
                placeholder="Encuentra tu producto aqui..."
              />
              <img id="imgSearch" src="assets/image/Vector.png" alt="" />
            </div>
          </Form.Group>
        </section>

        <section id="navProducts">
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <img className="icons" src="assets/image/icon_aceites.png" alt="" />
              <Nav.Link href="/home">Aceites</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <img className="icons" src="assets/image/icon_conservas.png" alt="" />
              <Nav.Link eventKey="link-1">Conservas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <img className="icons" src="assets/image/icon_pastas.png" alt="" />
              <Nav.Link eventKey="link-2">Pastas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <img
                className="icons"
                src="assets/image/icon_detergentes.png"
                alt=""
              />
              <Nav.Link eventKey="link-3">Detergentes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <img
                className="icons"
                id="icon_jabones"
                src="assets/image/icon_jabones.png"
                alt=""
              />
              <Nav.Link eventKey="link-4">Jabones</Nav.Link>
            </Nav.Item>
          </Nav>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
