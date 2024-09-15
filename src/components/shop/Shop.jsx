import { useOutletContext } from "react-router-dom";
import Item from "./item/Item";
import styles from "./Shop.module.css";

const Shop = () => {
  const { items, error, loading, updateAddedItem } = useOutletContext();

  if (loading)
    return (
      <main className={styles.loadContainer}>
        <div className={styles.loader}></div>
      </main>
    );

  if (error)
    return (
      <main className={styles.errorContainer}>
        <p className={styles.errorText}>A network error was encountered</p>
      </main>
    );

  return (
    <>
      <main className={styles.shopContainer}>
        <h1 className={styles.shopTitle}>Shop</h1>
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
