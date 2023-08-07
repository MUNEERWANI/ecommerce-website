import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import Cart from '../cart/Cart';



const Header = () => {
  const [showCart,setShowCart]=useState(false);
  const onClickHandler=()=>setShowCart(true);
  return (
    <div>
      <Navbar bg="dark" variant="dark"  className='me-auto' sticky="top">
      <Container>
        <Navbar.Brand as={Link}>SARA STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"> Home</Nav.Link>
          <Nav.Link as={Link} to="/store">Store</Nav.Link>
            
            
            <Nav.Link as={Link} to="/about">About</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container>
      <Nav className="ms-auto">
      <Nav.Link as={Link} to="/cart" onClick={onClickHandler}>Cart</Nav.Link> 
      </Nav>
      </Container>
    </Navbar>
    <Cart show={showCart} onHide={() => setShowCart(false)}/>
    </div>
  )
}

export default Header
