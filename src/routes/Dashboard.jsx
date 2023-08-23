import styled from "styled-components";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  Text,
  ResponsiveContainer,
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

const Header = styled.header`
  margin-bottom: 4.875rem;
`;

const Dash = styled.section`
  width: 84%;
  margin: 4rem auto;

  & > header {
    & h2 {
      font-size: 3rem;
      font-weight: 500;
      margin-bottom: 2rem;

      & span {
        color: ${(props) => props.theme.colors.red.base};
      }
    }

    & p {
      font-size: 1.125rem;
    }
  }
`;

const FlexBox = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : "wrap")};
  gap: ${(props) => (props.gap ? props.gap : "0")};
`;

function Dashboard() {
  const user = useLoaderData();
  console.log(user);

  return (
    <Dash>
      <Header>
        <h2>
          Bonjour <span>{user["userInfos"]["firstName"]}</span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </Header>

      <FlexBox align={"stretch"}>
        <FlexBox
          direction={"column"}
          align={"stretch"}
          gap={"1rem"}
          style={{ flex: 1 }}
        >
          <ResponsiveContainer width={"80%"} height={320}>
            <BarChart
              width={835}
              height={320}
              data={user.activity["sessions"]}
              margin={{
                top: 5,
                bottom: 5,
              }}
              barGap={10}
            >
              <Text x={0} y={0} scaleToFit={true} width={50}>
                Activité quotidienne
              </Text>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis orientation={"right"} />
              <Tooltip cursor={{ fill: "rgba(196 196 196 / 50%)" }} />
              <Legend />
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
          <FlexBox justifyContent={"start"} gap={"1.875rem"}>
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
          </FlexBox>
        </FlexBox>

        <FlexBox direction={"column"}>
          <StatBox
            iconcolor={"rgba(255 0 0 / 6.61%)"}
            stat={`${user["keyData"]["calorieCount"]}kCal`}
            unit={"Calories"}
          />
          <StatBox
            iconcolor={"rgba(74 184 255 / 10%)"}
            stat={`${user["keyData"]["proteinCount"]}g`}
            unit={"Proteines"}
          />
          <StatBox
            iconcolor={"rgba(249 206 35 / 10%)"}
            stat={`${user["keyData"]["carbohydrateCount"]}g`}
            unit={"Glucides"}
          />
          <StatBox
            iconcolor={"rgba(253 81 129 / 10%)"}
            stat={`${user["keyData"]["lipidCount"]}g`}
            unit={"Lipides"}
          />
        </FlexBox>
      </FlexBox>
    </Dash>
  );
}

export default Dashboard;
