import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import darkTheme from "../styles/darkTheme";
import lightTheme from "../styles/lightTheme";
import Navigation from "./navigation/components/Navigation";
import Home from "./news/containers/Home";
import Reddit from "./news/containers/Reddit";
import HackerNews from "./news/containers/HackerNews";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.background};
  @media (min-width: 576px) {
    grid-gap: 2rem;
    grid-template-columns: 20% 1fr;
    height: 100vh;
  }
`;

const Nav = styled.nav`
  background-color: ${props => props.theme.backgroundPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Main = styled.main`
  @media (min-width: 576px) {
    overflow-y: auto;
  }
`;

const App = () => {
  const darkMode = useSelector(state => state.settings.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid>
          <Nav>
            <Navigation />
          </Nav>
          <Main>
            <Route path="/" exact component={Home} />
            <Route path="/reddit" exact component={Reddit} />
            <Route path="/hn" exact component={HackerNews} />
          </Main>
        </Grid>
      </Router>
    </ThemeProvider>
  );
};

export default App;
