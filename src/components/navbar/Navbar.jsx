import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.navbarLeft}>
        <Link to="/" className={styles.logo}>
          Style Heaven
        </Link>
      </div>

      <div className={styles.navbarCenter}>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>

      <div className={styles.navbarRight}>
        <Link to="/cart" className={styles.cartIcon} aria-label="Shopping Cart">
          <i className="fas fa-shopping-cart"></i>
          <span className={styles.cartCount}>0</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
