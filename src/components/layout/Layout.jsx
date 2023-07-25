import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Aside from "./Aside.jsx";
import styled, { ThemeProvider } from "styled-components";

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
