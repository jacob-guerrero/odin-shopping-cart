import { useState, useEffect } from "react";
import Item from "./item/Item";
import styles from "./Shop.module.css";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=1", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }

        return res.json();
      })
      .then((json) => setItems(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

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
          <Item></Item>
        </div>
      </main>
    </>
  );
};

export default Shop;
