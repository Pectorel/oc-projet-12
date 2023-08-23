import { useRouteError } from "react-router-dom";
import styles from "../assets/style/components/errorPage.module.css";

function ErrorPage() {
  const error = useRouteError();

  return (
    <section
      className={`d-flex flex-col justify-c-center align-i-center gap-2`}
      id={styles["error-page"]}
    >
      <h1 id={styles["error-title"]}>{error.status}</h1>
      <p id={styles["error-message"]}>{error.data.errMessage}</p>
      <a id={styles["error-link"]} href="/">
        Retour à l&apos;accueil
      </a>
    </section>
  );
}

export default ErrorPage;
