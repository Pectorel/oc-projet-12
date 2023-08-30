import styles from "../../assets/style/components/layout/aside.module.css";

function Aside() {
  return (
    <aside id={styles["aside-menu"]}>
      <section id={styles["activity-container"]}>
        <div
          className={styles["activity-block"]}
          style={{ backgroundImage: `url("/aside-logos/meditation.svg")` }}
        ></div>
        <div
          className={styles["activity-block"]}
          style={{ backgroundImage: `url("/aside-logos/swim.svg")` }}
        ></div>
        <div
          className={styles["activity-block"]}
          style={{ backgroundImage: `url("/aside-logos/bike.svg")` }}
        ></div>
        <div
          className={styles["activity-block"]}
          style={{ backgroundImage: `url("/aside-logos/gym.svg")` }}
        ></div>
      </section>
      <p id={styles["aside-text"]}>
        Copyright, SportSee {new Date().getFullYear()}
      </p>
    </aside>
  );
}

export default Aside;
