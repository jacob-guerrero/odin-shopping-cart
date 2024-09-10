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
          ? { ...item, isAdded: !item.isAdded } // Change isAdded status
          : item
      )
    );
  };

  // Calculate and update cart items
  useEffect(() => {
    const count = items.filter((item) => item.isAdded).length;
    setCartItems(count);
  }, [items]);

  return (
    <>
      <Navbar cartItems={cartItems}></Navbar>
      <Outlet context={[items, error, loading, updateAddedItem]}></Outlet>
    </>
  );
}

export default App;
