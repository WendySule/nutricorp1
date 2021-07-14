import React from "react";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Navbar = ({Allproduct, setProductFilter, orderProduct, productFilter, setQuantity}) => {
console.log(productFilter)
  console.log(orderProduct, 'orderP1')

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
  console.log(orderProduct, 'orderP3')
  getQuantity()}

  const getQuantity = () => {
    console.log(orderProduct, 'orderp4')
    productFilter.forEach((prod) => {
      if( orderProduct && orderProduct.find((e) => e.id === prod.id)){
        setQuantity(orderProduct.find((e) => e.id === prod.id).qty)
      }
    })
  }

  return (
    <div>
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

        <section id="navProducts">
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item   >
              <img className="icons" src="assets/image/icon_aceites.png" alt="icon" />
              <h4 onClick={()=>handleClick('aceite')} >Aceites</h4>
            </Nav.Item>
            <Nav.Item>
              <img className="icons" src="assets/image/icon_conservas.png" alt="icon" />
              <h4 onClick={()=>handleClick('conservas')}>Conservas</h4>
            </Nav.Item>
            <Nav.Item>
              <img className="icons" src="assets/image/icon_pastas.png" alt="icon" />
              <h4 onClick={()=>handleClick('pastas')}>Pastas</h4>
            </Nav.Item>
            <Nav.Item>
              <img
                className="icons"
                src="assets/image/icon_detergentes.png"
                alt="icon"
              />
              <h4 onClick={()=>handleClick('detergentes')}>Detergentes</h4>
            </Nav.Item>
            <Nav.Item>
              <img
                className="icons"
                src="assets/image/icon_jabones.png"
                alt="icon"
              />
              <h4 onClick={()=>handleClick('jabon')}>Jabones</h4>
            </Nav.Item>
          </Nav>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
