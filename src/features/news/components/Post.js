import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  display: block;
  cursor: pointer;
`;

const Title = styled.p`
  margin: 0;
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
  ${common} margin-right: 0.4rem;
`;

const Author = styled.span`
  color: ${props => props.theme.primary};
  ${common} margin-right: 0.4rem;
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
