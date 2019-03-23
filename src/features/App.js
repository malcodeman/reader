import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "../state/store";
import theme from "../styles/theme";
import Navigation from "./navigation/components/Navigation";
import Home from "./news/containers/Home";
import Reddit from "./news/containers/Reddit";
import HackerNews from "./news/containers/HackerNews";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 576px) {
    grid-gap: 2rem;
    grid-template-columns: 20% 1fr;
    height: 100vh;
  }
`;

const Nav = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 576px) {
    flex-direction: column;
    justify-content: center;
    background-color: #eee;
  }
`;

const Main = styled.main`
  background-color: transparent;
  @media (min-width: 576px) {
    overflow-y: auto;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
