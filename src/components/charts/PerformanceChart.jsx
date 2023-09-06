import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";
import PropTypes from "prop-types";

PerformanceChart.propTypes = {
  perfs: PropTypes.object,
};

function PerformanceChart({ perfs }) {
  return (
    <RadarChart
      outerRadius={80}
      width={258}
      height={263}
      data={perfs.data}
      style={{
        background: "#282D30",
        borderRadius: "5px",
        fontSize: ".75rem",
        textTransform: "capitalize",
      }}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="subject" tick={{ fill: "#FFF" }} tickSize={10} />
      <PolarRadiusAxis
        angle={30}
        domain={[0, 250]}
        axisLine={false}
        tick={false}
      />
      <Tooltip />
      <Radar name="performances" dataKey="A" fill="#ff0101" fillOpacity={0.7} />
    </RadarChart>
  );
}

export default PerformanceChart;
