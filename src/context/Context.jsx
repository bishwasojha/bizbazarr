import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import fd from "../Fake-dataset";

const Cart = createContext();

const Context = ({ children }) => {
  /* Mapping through the fake dataset and logging each element. */
  const products  = fd.map(
      (curElem) => {
         return curElem;     
  });

/* Creating a state and a dispatch function. */
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    wishlist: localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [],
  });

  const [productState, productDispatch] = useReducer(productReducer,{
    searchQuery : ""
  });

  useEffect( ()=> {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },[state])

  useEffect( ()=> {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
  },[state])

/* Returning the Cart.Provider with the value of state and dispatch. */
  return (
    <Cart.Provider value={{ state, dispatch , productState , productDispatch}}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
