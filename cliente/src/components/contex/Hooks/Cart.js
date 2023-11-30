
import { useState, useContext, createContext, useEffect } from "react";
import React from 'react'



export  const Cart  = createContext();

const Carthrovider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  useEffect(() => {
    let existingCartItem = localStorage.getItem("cart");
    if (existingCartItem) setCart(JSON.parse(existingCartItem));
    
  }, []);

 
  return (
    <Cart.Provider value={[cart, setCart]}>
      {children}
    </Cart.Provider>
  );
};

// custom hook
const Usecart = () => useContext(Cart);

export { Usecart, Carthrovider };