import StarRatings from "react-star-ratings";
import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemImgContainer}>
        <img src={props.image} alt={props.title} className={styles.itemImg} />
      </div>
      <div className={styles.itemInfoContainer}>
        <h3 className={styles.itemTitle}>{props.title}</h3>
        <div className={styles.itemRating}>
          <StarRatings
            rating={props.rating.rate}
            starRatedColor="#e3b130"
            starDimension="20px"
            starSpacing="2px"
          ></StarRatings>
          <p>{props.rating.count}</p>
        </div>
        <p className={styles.itemPrice}>${props.price}</p>
        <div className={styles.itemBtn}>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
