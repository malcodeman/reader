import React, { Component } from "react";
import styled from "styled-components";
import NewsContainer from "./NewsContainer";

const Main = styled.main`
  @media (min-width: 576px) {
    padding: 2rem;
  }
`;

class App extends Component {
  render() {
    return (
      <Main>
        <NewsContainer />
      </Main>
    );
  }
}

export default App;
