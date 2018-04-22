import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { color } from "../../../state/styles/constants";
import {
  requestPosts,
  changeSource
} from "../../../features/news/actions/actions_news";

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
        <Link onClick={() => this.props.changeSource("reddit")}>Reddit</Link>
        <Link onClick={() => this.props.changeSource("hacker_news")}>HN</Link>
        <Link onClick={this.props.requestPosts}>test</Link>
      </Nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSource: link => dispatch(changeSource(link)),
    requestPosts: () => dispatch(requestPosts())
  };
};

export default connect(null, mapDispatchToProps)(Navigation);
