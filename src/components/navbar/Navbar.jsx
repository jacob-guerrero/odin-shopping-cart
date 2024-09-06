import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.navbarLeft}>
        <a href="/" className={styles.logo}>
          Style Heaven
        </a>
      </div>

      <div className={styles.navbarCenter}>
        <ul className={styles.navLinks}>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
        </ul>
      </div>

      <div className={styles.navbarRight}>
        <a href="/cart" className={styles.cartIcon} aria-label="Shopping Cart">
          <i className="fas fa-shopping-cart"></i>
          <span className={styles.cartCount}>0</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
