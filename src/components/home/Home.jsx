import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className={styles.heroContainer}>
        <div className={styles.heroImageContainer}>
          <img
            src="src\assets\model1-home.jpg"
            alt="Man in White Suit Wearing Brown Hat Standing on Green Grass Field"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroTextContainer}>
          <h1>Experience Your Own Heaven</h1>
          <p>
            Step into a world where fashion meets serenity. Exclusive
            collections designed to elevate your Style. Bring a touch of
            elegance to every occasion.
          </p>
          <Link to="shop">
            <button>Shop Now</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
