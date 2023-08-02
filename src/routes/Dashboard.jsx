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
        <section style={{ flex: 1 }}>
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
              label={"Test"}
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
        </section>

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
