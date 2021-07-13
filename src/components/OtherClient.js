import React from 'react'
import {Table} from 'react-bootstrap'


const OtherClient= ({listClient}) => {

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
                        <tr key={cli.id}>
                        <td>{cli.nombre}</td>
                        <td>{cli.dni}</td>
                        <td>{cli.codigodezona}</td>
                        <td> <img src="assets/image/icon_edit.png"/> <img src="assets/image/icon_delete.png"/></td>
                        </tr>
                    ))
                }
               
                
               
            </tbody>
            </Table>
            
            <button className="button-red" type="submit">
            FINALIZAR PEDIDO
            </button>

        </div>
    )
}

export default OtherClient
