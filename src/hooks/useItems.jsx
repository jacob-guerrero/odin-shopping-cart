import { useState, useEffect } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=11", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }

        return res.json();
      })
      .then((json) => {
        // Add the isAdded key to each item
        const updatedItems = json.map((item) => ({
          ...item,
          isAdded: true, // Initial value
          qty: 1,
        }));

        setItems(updatedItems);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { items, setItems, error, loading };
};

export default useItems;
