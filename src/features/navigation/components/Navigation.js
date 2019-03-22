import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: ${props => props.theme.secondary};
  cursor: pointer;
  padding: 1rem;
  text-decoration: none;
  &.active {
    color: ${props => props.theme.primary};
  }
`;

export const Navigation = () => {
  return (
    <>
      <StyledLink to="/" exact>
        All in one
      </StyledLink>
      <StyledLink to="/reddit">Reddit</StyledLink>
      <StyledLink to="/hn">HN</StyledLink>
    </>
  );
};

export default Navigation;
