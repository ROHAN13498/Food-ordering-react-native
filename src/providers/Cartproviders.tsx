import { CartItem, PizzaSize, Product } from "@/types";
import React, { createContext, ReactNode, useState } from "react";



export const cartContext = createContext<{
  cartItems: CartItem[];
  SetCartItems: (items: CartItem[]) => void;
}>({
  cartItems: [],
  SetCartItems: () => {},
});

export const CartProvider = (props: { children: ReactNode }) => {
  const [cartItems, SetCartItems] = useState<CartItem[]>([]);

  return (
    <cartContext.Provider value={{ cartItems, SetCartItems }}>
      {props.children}
    </cartContext.Provider>
  );
};
