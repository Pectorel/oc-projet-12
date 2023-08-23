import Header from "./Header.jsx";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Aside from "./Aside.jsx";
import { ThemeProvider } from "styled-components";
import styles from "../../assets/style/components/layout.module.css";

const theme = {
  colors: {
    primary: "#fff",
    secondary: "#000",
    red: {
      base: "#ff0000",
      dark: "#ff0101",
      darker: "#e60000",
    },
    blue: {
      base: "#4ab8ff",
    },
    yellow: {
      base: "#fdcc0c",
    },
    pink: {
      base: "#fd5181",
    },
  },
};

function Layout() {
  // Redirection to default profile
  const location = useLocation();
  if (location.pathname === "/") {
    return <Navigate to="/profile/12" replace />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div id={styles["layout"]}>
          <Aside />
          <main>
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Layout;
