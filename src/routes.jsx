import { createBrowserRouter, json } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Home from "./routes/Home.jsx";
import { getAll } from "./utilities/loaderUtilities.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        loader: async ({ params }) => {
          try {
            return await getAll(params.profileId);
          } catch (err) {
            //console.dir(err);
            throw json(
              {
                errMessage: "Le profil est introuvable",
              },
              { status: 404 },
            );
          }
        },
        path: "/profile/:profileId",
        element: <Dashboard />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
