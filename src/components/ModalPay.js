import React from 'react'
import { Modal, Button} from 'react-bootstrap';


const ModalPay = ({show, setShow}) => {
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


                return (
                    <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Felicidades</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Tu pedido ha sido registrado exitosamente y sera descontado de tu proxima planilla</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Aceptar
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </>
                );
           
}

export default ModalPay
