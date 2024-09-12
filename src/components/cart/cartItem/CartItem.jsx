import styles from "./CartItem.module.css";

const CartItem = ({ id, image, title, price, qty, updateAddedItem }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemImgContainer}>
        <img src={image} alt={title} className={styles.itemImg} />
      </div>
      <div className={styles.itemInfoContainer}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <button className={`${styles.btnQty} ${styles.btnQtyLeft}`}><i className="fa-solid fa-minus"></i></button>
            <p className={styles.itemQty}>{qty}</p>
            <button className={`${styles.btnQty} ${styles.btnQtyRight}`}><i className="fa-solid fa-plus"></i></button>
          </div>
          <div className={styles.rightContent}>
            <p className={styles.itemPrice}>${price * qty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
