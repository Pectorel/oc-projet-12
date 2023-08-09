import { createBrowserRouter, json } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        loader: async ({ params }) => {
          try {
            const res = await axios.get(
              `http://localhost:3000/user/${params.profileId}`,
            );

            const activities = await axios.get(
              `http://localhost:3000/user/${params.profileId}/activity`,
            );

            const averageSessions = await axios.get(
              `http://localhost:3000/user/${params.profileId}/average-sessions`,
            );

            const sportSessions = averageSessions.data.data["sessions"];

            const days = ["L", "M", "M", "J", "V", "S", "D"];

            for (const session in sportSessions) {
              sportSessions[session]["day"] = days[session];
            }

            res.data.data.activity = activities.data.data;
            res.data.data.averageSessions = averageSessions.data.data;

            return res.data.data;
          } catch (err) {
            throw json(
              {
                errMessage: "Le profile est introuvable",
              },
              { status: 404 },
            );
          }
        },
        path: "/profile/:profileId",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
