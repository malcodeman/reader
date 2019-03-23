import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  color: ${props => props.theme.secondary};
  margin-top: auto;
  padding: 1rem;
  font-size: 0.8rem;
`;

const Link = styled.a`
  color: #337ab7;
`;

const RepoLink = styled.span`
  display: none;
  @media (min-width: 576px) {
    display: inline;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      Made by{" "}
      <Link href="https://github.com/malcodeman" target="_blank" rel="noopener">
        malcodeman{" "}
        <span aria-label="Woman Astronaut" role="img">
          👩‍🚀
        </span>
      </Link>
      <RepoLink>
        {" "}
        -{" "}
        <Link
          href="https://github.com/malcodeman/reader"
          target="_blank"
          rel="noopener"
        >
          repo
        </Link>
      </RepoLink>
    </StyledFooter>
  );
};

export default Footer;
