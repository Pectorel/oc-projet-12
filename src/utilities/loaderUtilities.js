/**
 *
 * Data retreiving with Mock Data
 *
 */
import axios from "axios";

function getById(data, id, idLabel = "userId") {
  let res = null;
  if (Array.isArray(data)) {
    for (const row of data) {
      if (!Object.prototype.hasOwnProperty.call(row, idLabel)) break;

      if (row[idLabel] == id) {
        res = row;
        break;
      }
    }
  }

  return res;
}

export async function getProfile(id) {
  const res = await axios.get(`/mock/profile.json`);

  const profile = getById(res.data, id, "id");

  if (!Object.prototype.hasOwnProperty.call(profile, "todayScore")) {
    profile.todayScore = profile.score;
    delete profile.score;
  }

  return profile;
}

export async function getActivity(id) {
  const res = await axios.get(`/mock/activity.json`);
  return getById(res.data, id);
}

export async function getSessions(id) {
  const res = await axios.get(`/mock/average-session.json`);

  const sessions = getById(res.data, id);

  const days = ["L", "M", "M", "J", "V", "S", "D"];

  for (const session in sessions["sessions"]) {
    sessions["sessions"][session]["day"] = days[session];
  }

  return sessions;
}

export async function getPerformances(id) {
  const res = await axios.get(`/mock/performance.json`);

  const performances = getById(res.data, id);
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
