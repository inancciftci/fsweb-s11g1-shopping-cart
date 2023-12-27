import { createContext, useContext, useState } from "react";
import { data } from "../data";
import useLocalStorage from "../hooks/useLocalStorage";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useLocalStorage(data, "s11g1Products");

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
