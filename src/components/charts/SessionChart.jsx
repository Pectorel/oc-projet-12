import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import PropTypes from "prop-types";

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
      <text
        x={"15%"}
        y={"15%"}
        fill="black"
        textAnchor="start"
        dominantBaseline="central"
      >
        <tspan fontSize="14" fill={"rgba(255 255 255 / 50%)"}>
          Durée moyenne des sessions
        </tspan>
      </text>

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
      <Tooltip
        labelStyle={{ display: "none" }}
        contentStyle={{ color: "red !important" }}
        wrapperStyle={{ color: "red" }}
      />
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

export default SessionChart;
