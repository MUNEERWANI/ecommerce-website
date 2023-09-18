import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import StorePage from './StorePage';

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
const ProductDetails = () => {
  const { id } = useParams();
  const product = productsArr.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container key={product.id}>
      <Header />
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <h1>Price :${product.price}</h1>
      <h2></h2>
      <h1>Reviews</h1>
      <span>4.3 star</span>
      <p>please use this product  its truely magical</p>
      <StorePage/>
    </Container>
  );
};

export default ProductDetails
