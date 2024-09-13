import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";
import CartItem from "./cartItem/CartItem";

const Cart = () => {
  const { items, cartItems, updateItemQuantity, deleteItem } =
    useOutletContext();
  const subTotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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

      <section className={styles.cartCheckout}>
        <h2 className="checkoutTitle">Checkout</h2>
        <div className="checkcoutContainer">
          <h3>Subtotal ({cartItems} items):</h3>
          <p>
            {USDollar.format(
              Math.round((subTotal + Number.EPSILON) * 100) / 100
            )}
          </p>
          <h3>Discount (10%):</h3>
          <p>
            -{" "}
            {USDollar.format(
              Math.round((subTotal / 10 + Number.EPSILON) * 100) / 100
            )}
          </p>
          <h3>Total:</h3>
          <p>
            {USDollar.format(
              Math.round((subTotal - subTotal / 10 + Number.EPSILON) * 100) /
                100
            )}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Cart;
