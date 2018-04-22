import React from "react";
import styled from "styled-components";
import News from "./features/news/components/News";
import Navigation from "./features/navigation/components/Navigation";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: "n n n n n n n n n n n n" "m m m m m m m m m m m m";
  @media (min-width: 576px) {
    grid-template-areas: "n n m m m m m m m m m m";
    height: 100vh;
  }
`;

const App = props => {
  return (
    <Grid>
      <Navigation />
      <News />
    </Grid>
  );
};

export default App;
