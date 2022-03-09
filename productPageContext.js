import React, { useState, createContext } from "react";

export const ProductPageContext = createContext();

export const ProductProvider = (props) => {
  const [cart, setCart] = useState(() => {
    let storage;

    if (typeof window !== "undefined") {
      storage = localStorage.getItem("cartStorage");
    }
    return storage ? JSON.parse(storage) : [];
  });

  return (
    <ProductPageContext.Provider value={[cart, setCart]}>
      {props.children}
    </ProductPageContext.Provider>
  );
};
