export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

export const toggleDarkMode = payload => {
  return {
    payload,
    type: TOGGLE_DARK_MODE
  };
};
