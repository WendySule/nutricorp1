import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { logInAuth } from "../services/authService";
import logo from '../assets/image/logo.png'
import design from '../assets/image/design.png'
import "../styles/loggin.css";

const emptyForm = {
  email: "",
  password: "",
};

const Loggin = ({ history }) => {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState(false);
  const [remenber, setRemenber] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    setRemenber(!remenber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(` ya exito `);
    console.log(form.email);
    logInAuth(form.email, form.password)
      .then((res) => {
        console.log(`holas email`);
        console.log(res);
        if (remenber) {
          localStorage.setItem("user", JSON.stringify({...form, remenber}));
        } else {
          localStorage.removeItem("user");
        }
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setForm(emptyForm);
      });
  };

  const startSessionWithLocalstorage = () =>{
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user);
    if(!user){
        setForm(emptyForm)
        setRemenber(false)
    }else{
        setForm(user)
        setRemenber(true)
    }
    
  }

  useEffect(()=>{
      startSessionWithLocalstorage()
      
  },[])

  return (
    <section className="container-center">
      <img src={logo}className="logo" alt="logo" />
      <Form className="xs" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            value={form.email}
            name="email"
            onChange={handleChange}
            id="input-email"
            type="email"
            placeholder="Correo electronico"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            value={form.password}
            name="password"
            onChange={handleChange}
            id="input-password"
            type="password"
            placeholder="Contraseña"
          />
        </Form.Group>
        <Form.Group className="mb-3"  controlId="formBasicCheckbox">
          <Form.Check className='remember'
            type="checkbox"
            label="Recuérdame"
            checked={remenber}
            onChange={handleCheck}
            //   name="remenber"
            //   value={remenber}
          />
          {error ? (
            <p className="danger">Usuario o contraseña incorrecto </p>
          ) : null}
        </Form.Group>
        <section className="container-center">
          <button className="button-red1" type="submit">
            Ingresar
          </button>
          <section className='container-design'>
            <img src={design}className="design" alt="design" />
          </section>
        </section>
      </Form>
    </section>
  );
};

export default Loggin;
