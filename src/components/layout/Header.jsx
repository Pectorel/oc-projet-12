import { Link } from "react-router-dom";
import styles from "../../assets/style/components/header.module.css";

function Header() {
  return (
    <header id={styles["page-header"]} className={`d-flex`}>
      <h1>
        <Link to={"/"}>
          <img id={styles["logo"]} src={"/logo.png"} alt="SportSee" />
        </Link>
      </h1>
      <nav id={styles["header-nav"]}>
        <Link to={"/"}>Accueil</Link>
        <Link to={"/"}>Profil</Link>
        <Link to={"/"}>Réglage</Link>
        <Link to={"/"}>Communauté</Link>
      </nav>
    </header>
  );
}

export default Header;
