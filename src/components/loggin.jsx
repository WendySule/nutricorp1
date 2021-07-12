import React from 'react';
import {Form} from 'react-bootstrap';
import '../styles/loggin.css'

export function loggin() {
  return (
    <section class="container-center">
      <img src="../assets/image/logo.png" class="logo" alt="logo" />
<Form  className="xs">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control  id="inputs" type="email" placeholder="Correo electronico" />
  </Form.Group>

  <Form.Group  className="mb-3" controlId="formBasicPassword">
    <Form.Control id="inputs" type="password" placeholder="Contraseña" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" id="red" label="Recuerdame" />
  </Form.Group>
  <section class="container-center">
  <button class="button-red" type="submit">
  Ingresar
  </button >
  </section>
</Form>
</section>
  )
}


