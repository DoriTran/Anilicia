import { darken } from "@mui/material/styles";

const buttonTheme = {
  dark: {
    color: "var(--primary-dark)",
    hover: darken("#394d80", 0.3),
    contrast: "var(--white)",
  },
  primary: {
    color: "var(--primary)",
    hover: darken("#75b5d0", 0.1),
    contrast: "var(--white)",
  },
  secondary: {
    color: "var(--secondary-light)",
    hover: darken("#fbeccd", 0.1),
    contrast: "var(--secondary-dark)",
  },
  white: {
    color: "var(--white)",
    hover: darken("#f8f8f6", 0.05),
    contrast: "var(--brown)",
  },
  pink: {
    color: "var(--pink)",
    hover: darken("#f7adbc", 0.1),
    contrast: "var(--white)",
  },
  plum: {
    color: "var(--plum)",
    hover: darken("#af3e6a", 0.3),
    contrast: "var(--white)",
  },
};

export default buttonTheme;
