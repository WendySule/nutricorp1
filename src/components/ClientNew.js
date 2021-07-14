import React, {useState} from 'react'
import { Form } from 'react-bootstrap'
import { createClient } from '../services/clientServices';
import {fb} from '../environments/firebase-config.js'
import 'firebase/auth'

const emptyClient = {
    name: "",
    dni : 0,
    codigo: ""
};

const ClientNew = () => {
    const [form, setForm] = useState(emptyClient)
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = fb.auth().currentUser;
        console.log(user.uid);

        createClient(form.dni, form.name, form.codigo, user.uid);


        console.log("click formulario");
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        console.log("completando datos")
    }
    console.log(form)
    return (
        <>
             <div id="dataClient">
                <Form onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control onChange={handleChange} name={"name"} value={form.name}/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Código de trabajador</Form.Label>
                        <Form.Control name={"dni"} value={form.value} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Código de zona</Form.Label>
                        <Form.Control name={"codigo"} value={form.codigo} onChange={handleChange}/>
                    </Form.Group>
                    <div id="codZona">
                        <img id="iconI" src="assets/image/icon_i.png"></img>
                        <a href="http://www.codigopostal.gob.pe/pages/invitado/consulta.jsf">Consultar el código de zona</a>
                    </div>

                    <section className="container-center">
                        <p></p>
                        <button className="button-red" type="submit">
                            AGREGAR CLIENTE
                        </button>
                    </section>
                </Form>

            </div>
            </>
    )
}

export default ClientNew
