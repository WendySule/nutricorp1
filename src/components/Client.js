import React from 'react'
import { Form } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { getClients } from '../services/clientServices.js'
import OtherClient from './OtherClient.js'

function Client() {
    const [otherClient, setOtherClient] = useState(false)
    const [listClient, setListClient] = useState([])

    const getAllClients = () => {
        getClients(setListClient);
    }

    const handelCheck = () => {
        setOtherClient(!otherClient);
        if (!otherClient) {
            getAllClients()
            console.log("bien check")
        } else {
            setListClient([])
            console.log("no traer datos")
        }

    }
    useEffect(() => {
        getAllClients()
    }, [])
    return (
        <div>
            <div>
            <img id="retro" src="assets/image/icon_retro.png" alt="" />
            <p id="saldo"> Saldo disponible: S/50.00 </p>
            <section id="barClient">
                <p>Cliente</p>
            </section>


            <div id="chooseClient">
                <Form>
                    {['radio'].map((type) => (
                        <div key={`custom-inline-${type}`} className="mb-3">
                            <Form.Check
                                custom
                                inline
                                label="Para mi"
                                type={type}
                                id={`custom-inline-${type}-1`}
                            />
                            <Form.Check
                                custom
                                inline
                                label="Para otro cliente"
                                type="checkbox"
                                checked={otherClient}
                                onChange={handelCheck}
                                id={`custom-inline-${type}-2`}
                            />
                        </div>
                    ))}
                </Form>
            </div>
            <div id="dataClient">
                <Form>
                    <Form.Group >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Código de trabajador</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Código de zona</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form>

                <div id="codZona">
                    <img id="iconI" src="assets/image/icon_i.png"></img>
                    <a href="https://portal.mtc.gob.pe/comunicaciones/autorizaciones/radiodifusion/documentos/1/CODIGOS%20DE%20AREA%20-%20PERU.pdf">Consultar el código de zona</a>
                </div>

                <section className="container-center">
                    <p></p>
                    <button className="button-red" type="submit">
                        AGREGAR CLIENTE
                    </button>
                </section>
            </div>
            </div>

            <div> 
              {otherClient?  <OtherClient listClient={listClient}/>: null
            }
                
            </div>

        </div>
    )
}

export default Client
