import Header from "./Header.jsx";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Aside from "./Aside.jsx";
import styles from "../../assets/style/components/layout.module.css";

function Layout() {
  // Redirection to default profile
  const location = useLocation();
  if (location.pathname === "/") {
    return <Navigate to="/profile/12" replace />;
  }

  return (
    <>
      <Header />
      <div id={styles["layout"]}>
        <Aside />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
