import PropTypes from "prop-types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../../assets/style/components/charts/dailyChart.module.css";

DailyChart.propTypes = {
  activity: PropTypes.object,
};

function DailyChart({ activity }) {
  return (
    <div className={styles.container}>
      <ResponsiveContainer width={"100%"} height={320}>
        <BarChart
          width={835}
          height={320}
          data={activity["sessions"]}
          margin={{
            top: 64,
          }}
          barGap={10}
        >
          <svg width={300} height={200}>
            <Text
              className={styles.title}
              x={0}
              y={0}
              width={300}
              textAnchor={"start"}
              verticalAnchor={"start"}
            >
              Activité quotidienne
            </Text>
          </svg>

          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} tickSize={16} />
          <YAxis
            orientation={"right"}
            axisLine={false}
            tickLine={false}
            tickSize={20}
          />
          <Tooltip
            cursor={{ fill: "rgba(196 196 196 / 50%)" }}
            content={<CustomTooltip />}
          />
          <Legend
            align={"right"}
            verticalAlign={"top"}
            iconType={"circle"}
            wrapperStyle={{
              top: 0,
              marginBottom: "50px",
            }}
          />
          <Bar
            dataKey="kilogram"
            fill="#282d30"
            barSize={8}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#e60000"
            barSize={8}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className={styles.tooltip}>
        <span>{payload[0].value}kg</span>
        <span>{payload[1].value}kcal</span>
      </div>
    );
  }

  return null;
}

export default DailyChart;
