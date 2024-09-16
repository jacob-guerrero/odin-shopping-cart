import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <>
      <main className={styles.errorContainer}>
        <h1 className={styles.errorTitle}>Oops!</h1>
        <p className={styles.errorText}>Page Not Found</p>
        <Link to="/home">
          <button className={styles.errorBtn}>Back To Home</button>
        </Link>
      </main>
    </>
  );
};

export default ErrorPage;
