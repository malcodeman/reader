import React from "react";
import styled from "styled-components";

import { color } from "../../../state/styles/constants";

const Link = styled.a`
  text-decoration: none;
  display: block;
  cursor: pointer;
`;

const Title = styled.p`
  margin: 0;
  color: ${color.primary};
`;

const common = `
  font-size: 0.8rem;
  line-height: 1.4;
  color: ${color.secondary};
  display: block;
  @media (min-width: 576px) {
    display: inline;
  }
`;

const Upvotes = styled.span`
  ${common} margin-right: 0.4rem;
`;

const Author = styled.span`
  ${common} margin-right: 0.4rem;
`;

const Comments = styled.span`
  ${common};
`;

const Post = props => {
  return (
    <Link href={props.url}>
      <Title>{props.title}</Title>
      <Upvotes>{props.upvotes} ups</Upvotes>
      <Author>by {props.author}</Author>
      <Comments>{props.comments} comments</Comments>
    </Link>
  );
};

export default Post;
