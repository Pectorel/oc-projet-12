import styles from "../assets/style/dashboard.module.css";
import { useLoaderData } from "react-router-dom";
import {
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadialBarChart,
  RadialBar,
} from "recharts";
import StatBox from "../components/StatBox.jsx";
import DailyChart from "../components/charts/DailyChart.jsx";

function Dashboard() {
  const user = useLoaderData();
  console.log(user);

  return (
    <section id={styles["dash"]}>
      <header>
        <h2>
          Bonjour <span>{user["userInfos"]["firstName"]}</span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>

      <section className={`d-flex align-i-stretch gap-2`}>
        <div className={`d-flex flex-col align-i-stretch gap-2 flex-1`}>
          <DailyChart activity={user.activity} />

          <div className={`d-flex justify-c-start gap-1-875`}>
            <LineChart
              width={258}
              height={263}
              data={user.averageSessions["sessions"]}
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

            <RadarChart
              outerRadius={90}
              width={258}
              height={263}
              data={user.performances}
              style={{
                background: "#282D30",
                borderRadius: "5px",
                fontSize: ".875rem",
                textTransform: "capitalize",
              }}
            >
              <PolarGrid radialLines={false} />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 250]}
                axisLine={false}
                tick={false}
              />
              <Radar
                name="performances"
                dataKey="A"
                fill="#ff0101"
                fillOpacity={0.7}
              />
            </RadarChart>

            <RadialBarChart
              width={258}
              height={263}
              cx="50%"
              cy="50%"
              innerRadius="80%"
              outerRadius="100%"
              barSize={10}
              data={user.objectives}
              startAngle={90}
              endAngle={450}
            >
              <RadialBar
                label={false}
                background={false}
                clockWise
                dataKey="percent"
              />

              <text
                x={"50%"}
                y={"50%"}
                fill="black"
                textAnchor="middle"
                dominantBaseline="central"
              >
                <tspan fontSize="14" fill={"#000"}>
                  {user.objectives[1].percent}% de votre objectif
                </tspan>
              </text>
            </RadialBarChart>
          </div>
        </div>

        <div className={`d-flex flex-col justify-c-space-b`}>
          <StatBox
            iconcolor={"rgba(255 0 0 / 6.61%)"}
            stat={`${user["keyData"]["calorieCount"]}kCal`}
            unit={"Calories"}
            icon={{ src: "/activity-logos/calories.svg", alt: "calories" }}
          />
          <StatBox
            iconcolor={"rgba(74 184 255 / 10%)"}
            stat={`${user["keyData"]["proteinCount"]}g`}
            unit={"Proteines"}
            icon={{ src: "/activity-logos/proteines.svg", alt: "protéines" }}
          />
          <StatBox
            iconcolor={"rgba(249 206 35 / 10%)"}
            stat={`${user["keyData"]["carbohydrateCount"]}g`}
            unit={"Glucides"}
            icon={{ src: "/activity-logos/glucides.svg", alt: "glucides" }}
          />
          <StatBox
            iconcolor={"rgba(253 81 129 / 10%)"}
            stat={`${user["keyData"]["lipidCount"]}g`}
            unit={"Lipides"}
            icon={{ src: "/activity-logos/lipides.svg", alt: "lipides" }}
          />
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
