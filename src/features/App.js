import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "../state/store";
import News from "./news/components/News";
import Navigation from "./navigation/components/Navigation";
import theme from "../styles/theme";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: "n n n n n n n n n n n n" "m m m m m m m m m m m m";
  @media (min-width: 576px) {
    grid-template-areas: "n n m m m m m m m m m m";
    height: 100vh;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Grid>
          <Navigation />
          <News />
        </Grid>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
