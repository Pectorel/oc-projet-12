import { RadialBar, RadialBarChart, Text } from "recharts";
import PropTypes from "prop-types";
import styles from "../../assets/style/components/charts/scoreChart.module.css";

ScoreChart.propTypes = {
  objectives: PropTypes.array,
};

function ScoreChart({ objectives }) {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <div className={styles.content}>
          <span className={styles.percent}>{objectives[1].percent}%</span>
          <span className={styles.text}>de votre objectif</span>
        </div>
      </div>
      <RadialBarChart
        width={258}
        height={263}
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        barSize={10}
        data={objectives}
        startAngle={90}
        endAngle={450}
        style={{
          background: "transparent",
          position: "relative",
          zIndex: "12",
        }}
      >
        <svg>
          <Text
            className={styles.title}
            x={30}
            y={24}
            textAnchor={"start"}
            verticalAnchor={"start"}
          >
            Score
          </Text>
        </svg>
        <RadialBar
          label={false}
          background={false}
          clockWise
          dataKey="percent"
          cornerRadius={30}
        />
      </RadialBarChart>
    </div>
  );
}

export default ScoreChart;
