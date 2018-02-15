import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import NewsContainer from "./NewsContainer";

const Main = styled.main`
  padding: 4em;
  background: papayawhip;
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Header title="Reddit" />
        <NewsContainer />
      </Main>
    );
  }
}

export default App;
