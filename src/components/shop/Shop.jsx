import { useState, useEffect } from "react";
import Item from "./item/Item";
import styles from "./Shop.module.css";

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
          isAdded: false, // Initial value
        }));
        setItems(updatedItems);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { items, setItems, error, loading };
};

const Shop = () => {
  const { items, setItems, error, loading } = useItems();
  const updateAddedItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, isAdded: !item.isAdded } // Change isAdded status
          : item
      )
    );
  };

  if (!loading) {
    console.log(items);
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <main className={styles.shopContainer}>
        <h1>Shop</h1>
        <div className={styles.shopItems}>
          {items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
              isAdded={item.isAdded}
              updateAddedItem={updateAddedItem}
            ></Item>
          ))}
        </div>
      </main>
    </>
  );
};

export default Shop;
