import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { toggleDarkMode } from "../../settings/actions/actions_settings";

const Wrapper = styled.div`
  color: ${props => props.theme.secondary};
  padding: 1rem;
  font-size: 0.8rem;
`;

const EmojiWrapper = styled.span`
  cursor: pointer;
`;

const ThemeSelect = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.settings.darkMode);

  function toggle() {
    if (darkMode) {
      dispatch(toggleDarkMode(false));
    } else {
      dispatch(toggleDarkMode(true));
    }
  }

  return (
    <Wrapper>
      {darkMode ? (
        <EmojiWrapper>
          <span onClick={toggle} role="img" aria-label="light">
            ☀️
          </span>
        </EmojiWrapper>
      ) : (
        <EmojiWrapper>
          <span onClick={toggle} role="img" aria-label="dark">
            🌑
          </span>
        </EmojiWrapper>
      )}
    </Wrapper>
  );
};

export default ThemeSelect;
