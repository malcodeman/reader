import React from "react";
import styled from "styled-components";
import { color } from "styles/constants";

const Title = styled.h1`
  padding: 1rem;
  margin: 0;
  color: ${color.primary};
`;

const Header = props => (
  <header>
    <Title>{props.title}</Title>
  </header>
);

export default Header;
