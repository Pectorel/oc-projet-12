import { RadialBar, RadialBarChart } from "recharts";
import PropTypes from "prop-types";

ScoreChart.propTypes = {
  objectives: PropTypes.object,
};

function ScoreChart({ objectives }) {
  return (
    <RadialBarChart
      width={258}
      height={263}
      cx="50%"
      cy="50%"
      innerRadius="80%"
      outerRadius="100%"
      barSize={10}
      data={objectives}
      startAngle={90}
      endAngle={450}
    >
      <RadialBar label={false} background={false} clockWise dataKey="percent" />

      <text
        x={"50%"}
        y={"50%"}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan fontSize="14" fill={"#000"}>
          {objectives[1].percent}% de votre objectif
        </tspan>
      </text>
    </RadialBarChart>
  );
}

export default ScoreChart;
