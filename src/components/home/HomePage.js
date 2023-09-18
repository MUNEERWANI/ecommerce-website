import React from 'react';
import classes from './HomePage.module.css';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <h1 className={classes.heading}>Welcome To The Sara Store</h1>
      <div className={classes.imageContainer}>
        <img
          src='https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='resturant '
          className={classes.image}
        />
        <img
          src='https://img.freepik.com/premium-psd/restaurant-banner-template_23-2148466834.jpg?size=626&ext=jpg'
          alt='wellcome'
          className={classes.image}
        />
      </div>
    </Container>
  );
};

export default HomePage;
