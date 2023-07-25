import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Aside from "./Aside.jsx";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#fff",
    secondary: "#000",
    red: {
      100: "#ff0000",
      200: "#ff0101",
      300: "#e60000",
    },
    blue: {
      100: "#4ab8ff",
    },
    yellow: {
      100: "#fdcc0c",
    },
    pink: {
      100: "#fd5181",
    },
  },
};

const HBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  & aside {
    flex-shrink: 1;
    height: calc(100vh - 92px);
  }

  & main {
    flex: 1;
  }
`;

function Layout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <HBox>
          <Aside />
          <main>
            <Outlet />
          </main>
        </HBox>
      </ThemeProvider>
    </>
  );
}

export default Layout;
