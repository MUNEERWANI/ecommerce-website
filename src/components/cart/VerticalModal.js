import React from 'react';
import { Modal,Button } from 'react-bootstrap';

const VerticalModal = (props) => {
  console.log(props)
  console.log(props.cartItems)

  return (
    
      <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {props.cartItems}
     
    </Modal.Body>
    <Modal.Footer>
    <div>
        <span>Total amount</span>
        <span>{props.totalAmount}</span>
      </div>
      <Button onClick={props.onHide}>Close</Button>
      <Button>Purchase</Button>
    </Modal.Footer>
  </Modal>
    
  )
}

export default VerticalModal
