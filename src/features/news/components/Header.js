import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: none;
  @media (min-width: 576px) {
    display: block;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.primary};
  text-transform: capitalize;
`;

const Header = props => (
  <StyledHeader>
    <Title>{props.title}</Title>
  </StyledHeader>
);

export default Header;
