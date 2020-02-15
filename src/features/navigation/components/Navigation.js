import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import ThemeSelect from "./ThemeSelect";
import Footer from "./Footer";

const StyledLink = styled(NavLink)`
  color: ${props => props.theme.secondary};
  cursor: pointer;
  padding: 1rem;
  text-decoration: none;
  &.active {
    color: ${props => props.theme.primary};
  }
  @media (min-width: 576px) {
    margin-top: ${props => props.margintop || "initial"};
  }
`;

const Navigation = () => {
  return (
    <>
      <ThemeSelect />
      <StyledLink to="/" exact margintop="auto">
        All in one
      </StyledLink>
      <StyledLink to="/reddit">Reddit</StyledLink>
      <StyledLink to="/hn">HN</StyledLink>
      <Footer />
    </>
  );
};

export default Navigation;
