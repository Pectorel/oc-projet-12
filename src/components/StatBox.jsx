import PropTypes from "prop-types";
import styles from "../assets/style/components/statBox.module.css";

StatBox.propTypes = {
  icon: PropTypes.object,
  iconcolor: PropTypes.string,
  stat: PropTypes.string,
  unit: PropTypes.string,
};

function StatBox({ stat, unit, icon, iconcolor = "#fff" }) {
  return (
    <div className={styles["stat-box"]}>
      <div className={styles["icon"]} style={{ background: iconcolor }}>
        <img src={icon.src} alt={icon.alt} />
      </div>
      <p className={styles.details}>
        <strong className={styles["stat-text"]}>{stat}</strong>
        <span>{unit}</span>
      </p>
    </div>
  );
}

export default StatBox;
