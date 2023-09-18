import React from 'react'
import Header from '../header/Header'
import AboutPage from './AboutPage'
import { Button, Container, Nav } from 'react-bootstrap'
import {Link,Outlet} from 'react-router-dom'

const About = () => {
  return (
    <>
    <Header />
    <Container>
        <Nav.Link as={Link} to="/ContactUs"><Button>ContactUs</Button></Nav.Link>  
        <Outlet />    {/* //this is where the contact us component will be rendered       */}
        <AboutPage />

        
    </Container></>
    
  )
}

export default About
