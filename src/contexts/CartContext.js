import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage([], "s11g1Cart");

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (index) => {
    setCart(cart.filter((item, findex) => findex !== index));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
