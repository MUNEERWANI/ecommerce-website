import React, { useState,useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import Cart from '../cart/Cart';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import CartContext from '../../context/cartContext';

const Header = () => {
  const cartCtx=useContext(CartContext);
  const [showCart,setShowCart]=useState(false);

  const onClickHandler=()=>{
    const enteredEmail = localStorage.getItem('email'); // Get the email from local storage
    const x=enteredEmail.replace("@", "").replace(".", "")
    fetchCartData(x);

    setShowCart(true);

  }
  const fetchCartData=(x)=>{
      axios.get(`https://crudcrud.com/api/bd906cc553fd473e9d5f8dea751bff85/cart/${x}`)
        .then((response) => {
          // setCartData(response.data); // Set the fetched cart data
          cartCtx.addItem({
            id: response.data.id,
            title: response.data.title,
            totalQuantity: response.data.totalQuantity,
            price: response.data.price,
          })
          setShowCart(true); // Show the cart modal
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
  
  const closeCart=()=>{
    setShowCart(false);
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark"  className='me-auto' sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">SARA STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"> Home</Nav.Link>
          <Nav.Link as={Link} to="/store">Store</Nav.Link>
            
            
            <Nav.Link as={Link} to="/about">About</Nav.Link> 
            <Nav.Link as={Link} to="/auth"> Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container>
      <Nav className="ms-auto">
        <Button onClick={onClickHandler}>Cart</Button>
      </Nav>
      </Container>
    </Navbar>
    <Cart show={showCart} onHide={closeCart} />
    </div>
  )
}

export default Header
