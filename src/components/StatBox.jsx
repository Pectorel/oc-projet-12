import PropTypes from "prop-types";
import styles from "../assets/style/components/statBox.module.css";

StatBox.propTypes = {
  icon: PropTypes.string,
  iconcolor: PropTypes.string,
  stat: PropTypes.string,
  unit: PropTypes.string,
};

function StatBox({ stat, unit, icon, iconcolor = "#fff" }) {
  return (
    <div className={styles["stat-box"]}>
      <div className={styles["icon"]} style={{ background: iconcolor }}>
        {/* Icon */}
      </div>
      <p>
        <strong>{stat}</strong>
        <br />
        {unit}
      </p>
    </div>
  );
}

export default StatBox;
