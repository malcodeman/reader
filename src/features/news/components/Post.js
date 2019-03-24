import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Title = styled.p`
  padding-bottom: 6px;
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

const Source = styled.span`
  color: ${props => props.theme.primary};
  text-transform: capitalize;
  @media (min-width: 576px) {
    margin-right: 6px;
  }
  ${common}
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
  @media (min-width: 576px) {
    margin-right: 6px;
  }
  ${common};
`;

const When = styled.span`
  color: ${props => props.theme.primary};
  ${common};
`;

const Post = props => {
  function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <Link href={props.url}>
      {props.title ? <Title>{props.title}</Title> : null}
      {props.source ? <Source>{props.source}</Source> : null}
      {props.upvotes ? (
        <Upvotes>{formatNumber(props.upvotes)} ups</Upvotes>
      ) : null}
      {props.author ? <Author>by {props.author}</Author> : null}
      {props.comments ? (
        <Comments>{formatNumber(props.comments)} comments</Comments>
      ) : null}
      {props.created_at ? (
        <When>{distanceInWordsToNow(props.created_at)} ago</When>
      ) : null}
    </Link>
  );
};

export default Post;
