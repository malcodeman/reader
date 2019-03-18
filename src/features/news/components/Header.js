import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  padding: 1rem;
  margin: 0;
  color: ${props => props.theme.primary};
  display: none;
  text-transform: capitalize;
  @media (min-width: 576px) {
    display: block;
  }
`;

const Header = props => (
  <header>
    <Title>{props.title}</Title>
  </header>
);

export default Header;
