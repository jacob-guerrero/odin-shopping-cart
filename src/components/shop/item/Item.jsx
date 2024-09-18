import StarRatings from "react-star-ratings";
import PropTypes from "prop-types";
import styles from "./Item.module.css";

const Item = ({
  id,
  image,
  title,
  rating,
  price,
  isAdded,
  updateAddedItem,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemImgContainer}>
        <img src={image} alt={title} className={styles.itemImg} />
      </div>
      <div className={styles.itemInfoContainer}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <div className={styles.itemRating}>
          <StarRatings
            rating={rating.rate}
            starRatedColor="#e3b130"
            starDimension="20px"
            starSpacing="2px"
          ></StarRatings>
          <p>{rating.count}</p>
        </div>
        <p className={styles.itemPrice}>${price}</p>
        <div className={styles.itemBtn}>
          {!isAdded ? (
            <button
              onClick={() => {
                updateAddedItem(id); // Update item status
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button disabled>Item Added</button>
          )}
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.object,
  price: PropTypes.number,
  isAdded: PropTypes.bool,
  updateAddedItem: PropTypes.func,
};

export default Item;
