import React, {useState} from 'react'
import {Table} from 'react-bootstrap'
import ModalPay from './ModalPay'

const OtherClient= ({listClient}) => {
    const [clientSelect, setClientSelect] = useState({})
    const [payOrder, setPayOrder] = useState({})
    const [show, setShow] = useState(false);

    console.log(payOrder)
    
    console.log(clientSelect)
    const handleClick = (e) => {
        const idOtherClient = e.currentTarget.getAttribute("data-mi");
        const list = listClient.find((element)=>{ 
            if(element.id === idOtherClient ){
                console.log(element)
                return element
            }
        })
        console.log("click me " );
        setClientSelect(list)
    }

    const handleClickFind = () => {
        console.log("finalizar pedido")
        if (clientSelect){
            setPayOrder({...clientSelect})
            setShow(true)
        }else{

        }
    }
    // console.log(listClient);
    return (
        <div>
             
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>DNI/codigo de trabajador</th>
                <th>Codigo de zona</th>
                <th> </th>
                </tr>
            </thead>
            <tbody>
                {
                    listClient.map(cli=>(
                        <tr onClick={handleClick} key={cli.id} data-mi={cli.id}>
                        <td>{cli.nombre}</td>
                        <td>{cli.dni}</td>
                        <td>{cli.codigodezona}</td>
                        <td> <img src="assets/image/icon_edit.png"/> <img src="assets/image/icon_delete.png"/></td>
                        </tr>
                    ))
                }
               
            </tbody>
            </Table>
            
            <button className="button-red" type="submit" onClick={handleClickFind}>
            FINALIZAR PEDIDO
            </button>

            <ModalPay show={show} setShow={setShow}/>

        </div>
    )
}

export default OtherClient
