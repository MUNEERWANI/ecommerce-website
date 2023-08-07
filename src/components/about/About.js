import React from 'react'
import Header from '../header/Header'
import AboutPage from './AboutPage'
import { Nav } from 'react-bootstrap'
import {Link,Outlet} from 'react-router-dom'

const About = () => {
  return (
    <React.Fragment>
        <Header />
        <Nav.Link as={Link} to="/ContactUs">ContactUs</Nav.Link>  
        <Outlet />    {/* //this is where the contact us component will be rendered       */}
        <AboutPage />
    </React.Fragment>
  )
}

export default About
