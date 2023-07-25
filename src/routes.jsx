import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Dashboard from "./routes/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
