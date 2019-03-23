import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Title = styled.p`
  margin-bottom: 6px;
  color: ${props => props.theme.primary};
`;

const common = `
  font-size: 0.8rem;
  line-height: 1.4;
  display: block;
  @media (min-width: 576px) {
    display: inline;
  }
`;

const Upvotes = styled.span`
  color: ${props => props.theme.primary};
  @media (min-width: 576px) {
    margin-right: 6px;
  }
  ${common}
`;

const Author = styled.span`
  color: ${props => props.theme.primary};
  @media (min-width: 576px) {
    margin-right: 6px;
  }
  ${common}
`;

const Comments = styled.span`
  color: ${props => props.theme.primary};
  ${common};
`;

const Post = props => {
  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <Link href={props.url}>
      <Title>{props.title}</Title>
      <Upvotes>{formatNumber(props.upvotes)} ups</Upvotes>
      <Author>by {props.author}</Author>
      <Comments>{formatNumber(props.comments)} comments</Comments>
    </Link>
  );
};

export default Post;
