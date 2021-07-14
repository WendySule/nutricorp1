import React from "react";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../styles/nav.css";

const Navbar = ({Allproduct, setProductFilter, orderProduct, productFilter, setQuantity}) => {

  const handleClick = (cat) =>{
    setProductFilter(Allproduct.filter((elem) => elem.category.includes(cat) === true))
    console.log(orderProduct, 'orderP2')
    getQuantity()
  }

  const handleChange = (e) =>{
    const value =e.target.value;
    if(value){
    setProductFilter(Allproduct.filter((elem) => elem.title.includes(value) === true))}

    else{
    setProductFilter(Allproduct)
  }
  getQuantity()}

  const getQuantity = () => {
    productFilter.forEach((prod) => {
      if( orderProduct && orderProduct.find((e) => e.id === prod.id)){
        setQuantity(orderProduct.find((e) => e.id === prod.id).qty)
      }
    })
  }

  return (
      <nav>
        <section >
          <Form.Group controlId="formBasicSearch" id="container-center">
            <div id="inputSearch">
              <Form.Control name="search"  onChange={handleChange}
                type="text"
                placeholder="Encuentra tu producto aqui..."
              />
              <img id="imgSearch" src="assets/image/Vector.png" alt="icon" />
            </div>
          </Form.Group>
        </section>


          <Nav id="navProducts" activeKey="/home">
            <Nav.Item   >
              <img
              className="icons"
              src="assets/image/icon_aceites.png"
                alt="icon"
                onClick={()=>handleClick('aceite')} />
              <h4  className="text-m" >Aceites</h4>
            </Nav.Item>
            <Nav.Item>
              <img
              className="icons"
              src="assets/image/icon_conservas.png"
              alt="icon"
              onClick={()=>handleClick('conservas')} />
              <h4 className="text-m" >Conservas</h4>
            </Nav.Item>
            <Nav.Item>
              <img
              className="icons"
              src="assets/image/icon_pastas.png"
              alt="icon"
              onClick={()=>handleClick('pastas')} />
              <h4 className="text-m" >Pastas</h4>
            </Nav.Item>
            <Nav.Item>
              <img
                className="icons"
                src="assets/image/icon_detergentes.png"
                alt="icon"
                onClick={()=>handleClick('detergentes')}
              />
              <h4 className="text-m" >Detergentes</h4>
            </Nav.Item>
            <Nav.Item>
              <img
                className="icons"
                src="assets/image/icon_jabones.png"
                alt="icon"
                onClick={()=>handleClick('jabon')}
              />
              <h4 className="text-m" >Jabones</h4>
            </Nav.Item>
          </Nav>
      </nav>
  );
};

export default Navbar;
