import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { changeActiveLink } from "../actions";
import { color } from "../styles/constants";

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
        <Link onClick={() => this.props.changeActiveLink("reddit")}>Reddit</Link>
        <Link onClick={() => this.props.changeActiveLink("hacker_news")}>HN</Link>
      </Nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    changeActiveLink: (link) => dispatch(changeActiveLink(link))
  }
};

export default connect(null, mapDispatchToProps)(Navigation);
