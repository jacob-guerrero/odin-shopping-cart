import { Link } from "react-router-dom";
import assets from "../../assets/assetsManager";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <main className={styles.heroContainer}>
        <div className={styles.heroImageContainer}>
          <img
            src={assets.model}
            alt="Man in White Suit Wearing Brown Hat Standing on Green Grass Field"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTextTitle}>Experience Your Own Heaven</h1>
          <p className={styles.heroTextParagraph}>
            Step into a world where fashion meets serenity. Exclusive
            collections designed to elevate your Style. Bring a touch of
            elegance to every occasion.
          </p>
          <Link to="shop">
            <button className={styles.heroBtn}>Shop Now</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
