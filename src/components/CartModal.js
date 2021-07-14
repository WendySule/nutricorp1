
import React from 'react'
import {Modal} from 'react-bootstrap'

const CartModal = ({show, fullscreen, setShow}) => { 

    
  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}

export default CartModal
