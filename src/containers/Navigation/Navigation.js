import React, { Component } from "react";
import styled from "styled-components";
import { color } from "styles/constants";

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

const Link = styled.a`
  color: ${color.secondary};
  cursor: pointer;
  padding: 1rem;
`;

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <Link>Reddit</Link>
        <Link>HN</Link>
      </Nav>
    );
  }
}

export default Navigation;
