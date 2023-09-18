import React from "react";
import CartContextState from "./context/CartContextState";
import AuthContextProvider from "./contextt/AuthContextProvider";
import AppRoutes from "./AppRoutes";
function App() {
  


  return (
    <AuthContextProvider>
    <CartContextState>
      <AppRoutes />
    </CartContextState>
  </AuthContextProvider>
  );
}

export default App;
