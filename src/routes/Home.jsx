import styles from "../assets/style/home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id={styles["home"]} className={`d-flex flex-col gap-2`}>
      <h1 className={styles.title}>Liste des profils</h1>
      <Link to="/profile/12">Karl</Link>
      <Link to="/profile/18">Cecilia</Link>
    </section>
  );
}

export default Home;
