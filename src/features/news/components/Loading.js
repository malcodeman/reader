import React from "react";
import styled from "styled-components";

const StyledLoading = styled.span`
  padding: 1rem;
  color: ${props => props.theme.secondary};
  display: block;
`;

const Loading = props => {
  return <StyledLoading>{props.children}</StyledLoading>;
};

export default Loading;
