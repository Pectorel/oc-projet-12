import axios from "axios";

export async function getProfile(id) {
  const res = await axios.get(`http://localhost:3000/user/${id}`);

  const profile = res.data.data;

  if (!Object.prototype.hasOwnProperty.call(profile, "todayScore")) {
    profile.todayScore = profile.score;
    delete profile.score;
  }

  return res.data.data;
}

export async function getActivity(id) {
  const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
  return res.data.data;
}

export async function getSessions(id) {
  const res = await axios.get(
    `http://localhost:3000/user/${id}/average-sessions`,
  );

  const averageSessions = res.data.data;

  const days = ["L", "M", "M", "J", "V", "S", "D"];

  for (const session in averageSessions["sessions"]) {
    averageSessions["sessions"][session]["day"] = days[session];
  }

  return averageSessions;
}

export async function getPerformances(id) {
  const res = await axios.get(`http://localhost:3000/user/${id}/performance`);

  const performances = res.data.data;
  let perfs = [];

  for (const perf in performances.data) {
    const currentPerf = performances.data[perf];

    const perfObject = {
      subject: performances.kind[currentPerf.kind],
      A: currentPerf.value,
    };

    perfs.push(perfObject);
  }

  performances.data = perfs.reverse();

  return performances;
}

function setObjectives(score) {
  return [
    {
      name: "limit",
      percent: 100,
      fill: "transparent",
    },
    {
      name: "objective",
      percent: score * 100,
      fill: "#ff0000",
    },
  ];
}

export async function getAll(id) {
  const res = {
    profile: {},
    activity: {},
    averageSessions: {},
    performances: {},
    objectives: {},
  };

  res.profile = await getProfile(id);
  res.activity = await getActivity(id);
  res.averageSessions = await getSessions(id);
  res.performances = await getPerformances(id);
  res.objectives = setObjectives(res.profile["todayScore"]);

  return res;
}
