import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ cartItems }) => {
  let location = useLocation();

  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.navbarLeft}>
        <Link to="/" className={styles.logo}>
          Style Heaven
        </Link>
      </div>

      <div className={styles.navbarCenter}>
        <ul className={styles.navLinks}>
          <li className={location.pathname === "/" ? styles.active : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/shop" ? styles.active : ""}>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>

      <div className={styles.navbarRight}>
        <Link
          to="/cart"
          className={`${styles.cartIcon} ${
            location.pathname === "/cart" ? styles.active : ""
          }`}
          aria-label="Shopping Cart"
        >
          <i className="fas fa-shopping-cart"></i>
          <span className={styles.cartCount}>{cartItems}</span>
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartItems: PropTypes.number,
};

export default Navbar;
