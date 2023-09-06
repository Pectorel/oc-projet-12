import { useLoaderData } from "react-router-dom";
import styles from "../assets/style/dashboard.module.css";
import StatBox from "../components/StatBox.jsx";
import DailyChart from "../components/charts/DailyChart.jsx";
import SessionChart from "../components/charts/SessionChart.jsx";
import PerformanceChart from "../components/charts/PerformanceChart.jsx";
import ScoreChart from "../components/charts/ScoreChart.jsx";

function Dashboard() {
  const user = useLoaderData();
  //console.log(user);

  return (
    <section id={styles["dash"]}>
      <header>
        <h2>
          Bonjour <span>{user.profile["userInfos"]["firstName"]}</span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>

      <section className={`d-flex align-i-stretch gap-2`}>
        <div className={`d-flex flex-col align-i-stretch gap-2 flex-1`}>
          <DailyChart activity={user.activity} />

          <div className={`d-flex justify-c-space-b`}>
            <SessionChart sessions={user.averageSessions} />
            <PerformanceChart perfs={user.performances} />
            <ScoreChart objectives={user.objectives} />
          </div>
        </div>

        <div className={`d-flex flex-col justify-c-space-b`}>
          <StatBox
            iconcolor={"rgba(255 0 0 / 6.61%)"}
            stat={`${user.profile["keyData"]["calorieCount"]}kCal`}
            unit={"Calories"}
            icon={{ src: "/activity-logos/calories.svg", alt: "calories" }}
          />
          <StatBox
            iconcolor={"rgba(74 184 255 / 10%)"}
            stat={`${user.profile["keyData"]["proteinCount"]}g`}
            unit={"Proteines"}
            icon={{ src: "/activity-logos/proteines.svg", alt: "protéines" }}
          />
          <StatBox
            iconcolor={"rgba(249 206 35 / 10%)"}
            stat={`${user.profile["keyData"]["carbohydrateCount"]}g`}
            unit={"Glucides"}
            icon={{ src: "/activity-logos/glucides.svg", alt: "glucides" }}
          />
          <StatBox
            iconcolor={"rgba(253 81 129 / 10%)"}
            stat={`${user.profile["keyData"]["lipidCount"]}g`}
            unit={"Lipides"}
            icon={{ src: "/activity-logos/lipides.svg", alt: "lipides" }}
          />
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
