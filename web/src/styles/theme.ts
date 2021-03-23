import React from "react";

export const lightTheme = {
  fg: "palevioletred",
  bg: "white"
};

// This theme swaps `fg` and `bg`
export const darkTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});