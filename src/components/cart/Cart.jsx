import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import CartItem from "./cartItem/CartItem";

const Cart = () => {
  const { items, updateItemQuantity, deleteItem } = useOutletContext();

  return (
    <main className={styles.cartContainer}>
      <section className={styles.cartItems}>
        <h2 className="itemsTitle">Shopping Cart</h2>
        <div className={styles.itemsContainer}>
          {items
            .filter((item) => item.isAdded) // Only include items that are added to the cart
            .map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                qty={item.qty}
                updateItemQuantity={updateItemQuantity}
                deleteItem={deleteItem}
              />
            ))}
        </div>
      </section>

      <section className={styles.cartCheckOut}>
        <h2 className="checkOutTitle">Check Out</h2>
      </section>
    </main>
  );
};

export default Cart;
