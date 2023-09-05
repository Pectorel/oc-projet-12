import { Line, LineChart, Tooltip, XAxis, YAxis, Text } from "recharts";
import PropTypes from "prop-types";
import styles from "../../assets/style/components/charts/sessionChart.module.css";

SessionChart.propTypes = {
  sessions: PropTypes.object,
};

function SessionChart({ sessions }) {
  return (
    <LineChart
      width={258}
      height={263}
      data={sessions["sessions"]}
      margin={{ top: 5, bottom: 5 }}
      style={{ background: "#ff0000", borderRadius: "5px" }}
    >
      <svg width={300} height={200}>
        <Text
          className={styles.title}
          x={30}
          y={34}
          width={150}
          textAnchor={"start"}
          verticalAnchor={"start"}
        >
          Durée moyenne des
        </Text>
        <Text
          className={styles.title}
          x={30}
          y={60}
          width={150}
          textAnchor={"start"}
          verticalAnchor={"start"}
        >
          sessions
        </Text>
      </svg>

      <XAxis
        dataKey="day"
        axisLine={false}
        tick={{ fill: "rgba(255 255 255 / 50%)" }}
        tickLine={false}
        type={"category"}
        interval={"preserveStartEnd"}
        style={{ fontWeight: 500 }}
      />
      <YAxis padding={{ top: 100 }} hide={true} />
      <Tooltip labelStyle={{ display: "none" }} content={<CustomTooltip />} />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="rgba(255 255 255 / 50%)"
        strokeWidth={3}
        dot={false}
      />
    </LineChart>
  );
}

// eslint-disable-next-line react/prop-types
function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className={styles.tooltip}>
        <span>{payload[0].value}min</span>
      </div>
    );
  }

  return null;
}

export default SessionChart;
