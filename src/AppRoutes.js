import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import About from "./components/about/About";
import ContactUs from "./components/contactUs/ContactUs";
import Cart from "./components/cart/Cart";
import ProductDetails from "./components/store/ProductDetails";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from './contextt/auth-context';
import { useContext } from 'react';


const AppRoutes = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  console.log(isLoggedIn)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {isLoggedIn && <Route path="/store" element={<Store />} />}
      <Route path="/about" element={<About />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/store/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default AppRoutes
