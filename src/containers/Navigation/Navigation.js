import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  grid-area: n;
  background-color: #eee;
`;

class Navigation extends Component {
  render() {
    return <Nav>Nav</Nav>;
  }
}

export default Navigation;
