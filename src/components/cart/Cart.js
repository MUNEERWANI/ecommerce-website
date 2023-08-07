import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import Header from '../header/Header';

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[
        {
          id: 'c1',
          name: 'sushi',
          quantity: 2,
          price: 12,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {cartItems}
      <div>
        <span>Total amount</span>
        <span>34.34</span>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
      <Button>Purchase</Button>
    </Modal.Footer>
  </Modal>
  );
};

export default Cart;
