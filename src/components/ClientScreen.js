import React from 'react'
import { Form } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { getClients } from '../services/clientServices.js'
import OtherClient from './OtherClient.js'
import ClientNew from './ClientNew.js';

const ClientScreen = () => {
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
            <ClientNew/>
            <div> 
              {otherClient?  <OtherClient listClient={listClient}/>: null
            }
                
            </div>

        </div>
    )
}

export default ClientScreen
