import React from 'react';
import {Form} from 'react-bootstrap';
import '../styles/loggin.css'

export function Loggin() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const user = {
    email: email,
    password: password,
  };

const handleSubmit =(e)=>{
    console.log(e);
    console.log(user)
  }
  return (
    <section className="container-center">
      <img src="../assets/image/logo.png" className="logo" alt="logo" />
<Form  className="xs" onSubmit={(e) => handleSubmit(e)}>
  <Form.Group className="mb-3">
    <Form.Control value={email}   onChange={(e) => setEmail(e.target.value)}
    id="input-email" type="email" placeholder="Correo electronico" />
  </Form.Group>

  <Form.Group  className="mb-3" >
    <Form.Control value={password}  onChange={(e) => setPassword(e.target.value)} id="input-password" type="password" placeholder="Contraseña" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" id="red" label="Recuerdame" />
  </Form.Group>
  <section className="container-center">
  <button className="button-red" type="submit">
  Ingresar
  </button >
  </section>
</Form>
</section>
  )
}


