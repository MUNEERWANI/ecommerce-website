import React from 'react';
import {Row,  Col, Container, Card } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../../context/cartContext';

const productsArr = [
  { 
    id:'m1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id:'m2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id:'m3',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id:'m4',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id:'m5',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id:'m6',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
  
];

const StorePage = () => {
  const cartCtx=useContext(CartContext);
  // const amount=cartCtx.totalAmount;
  // const quantity=cartCtx.totalQuantity;
  const addToCartHandler = (item) => {
    cartCtx.addItem({
      ...item,

    });
  };

  const productsList = productsArr.map((item) => {
    return (
      <Col key={item.id} xs={12} sm={6} md={4} lg={3} className='mb-3'>
        <Card>
        <Card.Img variant='top' src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <button className='btn btn-primary' onClick={() => addToCartHandler(item)}>Add to Cart</button>
        </Card.Body>

        </Card>

      </Col>
    );
  });
  

  return <Container>
    <h1>Add your favourite Items to Store</h1>
    <Row>{productsList}</Row>
    </Container>;
};

export default StorePage;
