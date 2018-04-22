import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Provider } from "react-redux";

import store from "./state/store";

import News from "./features/news/components/News";
import Navigation from "./features/navigation/components/Navigation";

import "./index.css";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: "n n n n n n n n n n n n" "m m m m m m m m m m m m";
  @media (min-width: 576px) {
    grid-template-areas: "n n m m m m m m m m m m";
    height: 100vh;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Grid>
      <Navigation />
      <News />
    </Grid>
  </Provider>,
  document.getElementById("root")
);
