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
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: "n n n n n n n n n n n n" "m m m m m m m m m m m m";
  @media (min-width: 576px) {
    grid-template-areas: "n n m m m m m m m m m m";
    height: 100vh;
  }
`;

const Nav = styled.nav`
  grid-area: n;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    flex-wrap: no-wrap;
  }
`;

const Main = styled.main`
  grid-area: m;
  background-color: transparent;
  @media (min-width: 576px) {
    padding: 2rem;
    overflow-y: scroll;
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
