import React from "react";
import Home from "./components/home/Home";
import {Routes,Route} from "react-router-dom";
import Store from "./components/store/Store";
import About from "./components/about/About";
import CartContextState from "./context/CartContextState";
import ContactUs from "./components/contactUs/ContactUs";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <CartContextState>
<Routes >
        <Route path='/' element={<Home />}/>
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<ContactUs />} />
        
      </Routes>
    </CartContextState>
      
  
           
  );
}

export default App;
