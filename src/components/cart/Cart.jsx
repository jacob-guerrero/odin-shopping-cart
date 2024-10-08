import { useOutletContext, Link } from "react-router-dom";
import CartItem from "./cartItem/CartItem";
import assets from "../../assets/assetsManager";
import styles from "./Cart.module.css";

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

  const handleOrder = () => {
    alert("Your order has been placed! :)");
  };

  if (cartItems === 0) {
    return (
      <main className={styles.noItemsContainer}>
        <p className={styles.noItemsText}>Your cart is empty!</p>
        <Link to="/shop">
          <button className={styles.noItemsBtn}>Go To Shop</button>
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.cartContainer}>
      <section className={styles.cartItems}>
        <h2 className={styles.itemsTitle}>Shopping Cart</h2>
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
        <h2 className={styles.checkoutTitle}>Checkout</h2>
        <div className={styles.checkoutContainer}>
          <div className={styles.checkoutSubsection}>
            <h3 className={styles.titleDescription}>
              Subtotal ({cartItems} items):
            </h3>
            <p className={styles.value}>
              {USDollar.format(
                Math.round((subTotal + Number.EPSILON) * 100) / 100
              )}
            </p>
          </div>
          <div className={styles.checkoutSubsection}>
            <h3 className={styles.titleDescription}>Discount (10%):</h3>
            <p className={styles.value}>
              -{" "}
              {USDollar.format(
                Math.round((subTotal / 10 + Number.EPSILON) * 100) / 100
              )}
            </p>
          </div>
          <div className={styles.checkoutSubsection}>
            <h3 className={styles.titleDescription}>Total:</h3>
            <p className={`${styles.value} ${styles.valueTotal}`}>
              {USDollar.format(
                Math.round((subTotal - subTotal / 10 + Number.EPSILON) * 100) /
                  100
              )}
            </p>
          </div>
          <div className={styles.btnCheckoutContainer}>
            <button
              className={styles.btnCheckout}
              onClick={() => handleOrder()}
            >
              Continue to Payment
            </button>
          </div>
          <div className={styles.cardsContainer}>
            <img
              src={assets.mastercard}
              alt="mastercard logo"
              className={styles.cardLogo}
            />
            <img
              src={assets.visa}
              alt="visa logo"
              className={styles.cardLogo}
            />
            <img
              src={assets.paypal}
              alt="paypal logo"
              className={styles.cardLogo}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
