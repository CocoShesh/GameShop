import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCart, setIsCart] = useState([]);
  const [nextNumber, setNextNumber] = useState(1); // Initialize nextNumber in state
  const maxItems = 3; // Maximum allowed items in the cart

  const addToCart = cart => {
    if (isCart.some(existingItem => existingItem._id === cart._id)) {
      return;
    }

    const cartItem = { ...cart, cartNumber: nextNumber }; // Assign a unique number to the item
    setIsCart(prevItems => [...prevItems, cartItem]);
    setNextNumber(prevNumber => prevNumber + 1); // Increment the nextNumber
  };

  const addToLibrary = item => {
    if (items.some(existingItem => existingItem._id === item._id)) {
      return;
    }

    setItems(prevItems => [...prevItems, item]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addToLibrary,
        isCart,
        setIsCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
