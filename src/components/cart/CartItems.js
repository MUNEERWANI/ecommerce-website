import React from 'react'
import { Col, Container,Row } from 'react-bootstrap';

const CartItems = (props) => {
  console.log(props)
  const price = `$${props.price.toFixed(2)}`;
  const quantity= props.totalQuantity;
  
  return (
    <Container>
      <Row>
        <Col>{props.title}</Col>
        <Col>{quantity}</Col>
        <Col>{price}</Col>
        <Col><button onClick={props.onRemove}>−</button></Col>
        <Col><button onClick={props.onAdd} >+</button></Col>


    
        
      </Row>
        
      
  
    </Container>
  )
}

export default CartItems
