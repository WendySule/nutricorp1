import React from 'react';
import {Form, Button} from 'react-bootstrap';

export function loggin() {
  return (
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Correo</Form.Label>
    <Form.Control type="email" placeholder="Correo electronico" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Contraseña" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Recuerdame" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  )
}


