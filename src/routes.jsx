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

            res.data.data.activity = activities.data.data;

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
