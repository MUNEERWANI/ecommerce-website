import React from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../../context/cartContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
const productsArr = [
  {
    id: 'm1',
    title: 'Monalisa',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 'm2',
    title: 'Javascript',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 'm3',
    title: 'bootstrap',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 'm4',
    title: 'Kalhan',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 'm5',
    title: 'Galib',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 'm6',
    title: 'useRef',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
  {
    id: 'm7',
    title: 'useEffect',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 'm8',
    title: 'useContext',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 'm9',
    title: 'useState',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 'm10',
    title: 'Synchronous',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },

];

const StorePage = () => {
  const cartCtx = useContext(CartContext);
  let totalQuantity = 1;

  const addToCartHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      totalQuantity: totalQuantity,
      price: item.price,
    });
    const email = localStorage.getItem('email');
    const x = email.replace("@", "").replace(".", "");
    const postData = {
      title: item.title,
      totalQuantity: totalQuantity,
      price: item.price,
      email: email
    };

    axios.post(`https://crudcrud.com/api/337a26a7e6304929869639b1c9bb079c/cart/email/${x}`, postData)
      .then(response => {
        console.log('Post request successful:', response.data);
      })
      .catch(error => {
        console.error('Error making post request:', error);
      });



    console.log(item);
    console.log("addtocart");
    alert(`${item.title} was added to cart`)
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
            <Link to={`/store/${item.id}`}><Button>Product details</Button></Link>



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
