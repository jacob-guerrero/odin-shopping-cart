import "./App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import useItems from "./hooks/useItems";

function App() {
  const { items, setItems, error, loading } = useItems();
  const [cartItems, setCartItems] = useState(0);

  // Update isAdded state
  const updateAddedItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, isAdded: !item.isAdded, qty: !item.isAdded ? 1 : 0 } // Change isAdded status
          : item
      )
    );
  };

  // Update the item quantity
  const updateItemQuantity = (itemId, quantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, isAdded: quantity > 0, qty: quantity }
          : item
      )
    );
  };

  // Delete the item
  const deleteItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isAdded: !item.isAdded, qty: 0 } : item
      )
    );
  };

  // Calculate and update cart items
  useEffect(() => {
    const count = items.reduce((total, item) => total + item.qty, 0);
    setCartItems(count);
  }, [items]);

  return (
    <>
      <Navbar cartItems={cartItems}></Navbar>
      <Outlet
        context={{
          items,
          error,
          loading,
          cartItems,
          updateAddedItem,
          updateItemQuantity,
          deleteItem,
        }}
      ></Outlet>
    </>
  );
}

export default App;
