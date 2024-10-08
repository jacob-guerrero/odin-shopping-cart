import PropTypes from "prop-types";
import styles from "./CartItem.module.css";

const CartItem = ({
  id,
  image,
  title,
  price,
  qty,
  updateItemQuantity,
  deleteItem,
}) => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={styles.item}>
      <div className={styles.itemImgContainer}>
        <img src={image} alt={title} className={styles.itemImg} />
      </div>

      <div className={styles.itemInfoContainer}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <button
              className={`${styles.btnQty} ${styles.btnQtyLeft}`}
              title="Subtract"
              onClick={() => updateItemQuantity(id, qty - 1)}
              disabled={qty <= 1}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <p className={styles.itemQty}>{qty}</p>
            <button
              className={`${styles.btnQty} ${styles.btnQtyRight}`}
              title="Add"
              onClick={() => updateItemQuantity(id, qty + 1)}
              disabled={qty >= 99}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className={styles.rightContent}>
            <p className={styles.itemPrice}>
              {USDollar.format(
                Math.round((price * qty + Number.EPSILON) * 100) / 100
              )}
            </p>
          </div>
        </div>
      </div>

      <button
        className={styles.btnDelete}
        title="Delete"
        onClick={() => deleteItem(id)}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  qty: PropTypes.number,
  isAdded: PropTypes.bool,
  updateItemQuantity: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default CartItem;
