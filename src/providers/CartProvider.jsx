
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Sample Product",
      price: 29.99,
      quantity: 2,
      image: "/images/angel-a.jpg",
    },
    {
      id: 2,
      name: "Another Item",
      price: 15.5,
      quantity: 1,
      image: "/images/behappy.jpg",
    },
    {
      id: 2,
      name: "Another Item",
      price: 15.5,
      quantity: 1,
      image: "/images/body.jpg",
    },
    {
      id: 2,
      name: "Another Item",
      price: 15.5,
      quantity: 1,
      image: "/images/butterfly.jpg",
    },
    {
      id: 2,
      name: "Another Item",
      price: 15.5,
      quantity: 1,
      image: "/images/hearts.jpg",
    },
    {
      id: 2,
      name: "Another Item",
      price: 15.5,
      quantity: 1,
      image: "/images/puppy.jpg",
    },
    {
      id: 2,
      name: "Another Item",
      price: 15.5,
      quantity: 1,
      image: "/images/Woman.jpg",
    },
  ]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}