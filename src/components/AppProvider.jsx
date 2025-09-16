import React, { useState } from 'react'
import { CartContext } from './AppContext';

const AppProvider = ({children}) => {
    const [cart, setCart] = useState([]); 
    const addToCart = (product) => {
       setCart((previousValue) => [...previousValue, product]);
    };
     const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
        {children}
    </CartContext.Provider>
  )
}

export default AppProvider
