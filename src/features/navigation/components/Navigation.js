import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { color } from "../../../state/styles/constants";
import { requestPosts, changeSource } from "../../news/actions/actions_news";
import { requestBestStories } from "../../news/actions/actions_hacker_news";

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
        <Link
          onClick={() =>
            this.props.changeSource("reddit") && this.props.requestPosts()
          }
        >
          Reddit
        </Link>
        <Link
          onClick={() =>
            this.props.changeSource("hacker news") &&
            this.props.requestBestStories()
          }
        >
          HN
        </Link>
      </Nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSource: link => dispatch(changeSource(link)),
    requestPosts: () => dispatch(requestPosts()),
    requestBestStories: () => dispatch(requestBestStories())
  };
};

export default connect(null, mapDispatchToProps)(Navigation);
