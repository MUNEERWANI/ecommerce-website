import React from 'react'
import ContactForm from './ContactForm'
import Header from '../header/Header'

const ContactUs = () => {
  return(
    <div>
    <Header />
    <div className="container">
      <div className="row justify-content-center"> {/* Use Bootstrap classes to center */}
        <div className="col-md-8"> {/* Adjust the column width as needed */}
          
          <ContactForm className="ms-auto" />
        </div>
      </div>
    </div></div>
  )
  

}

export default ContactUs;
