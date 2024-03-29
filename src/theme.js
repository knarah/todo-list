import { createTheme } from "@mui/material/styles";

const darkPalette = {
  mode: "dark",
  primary: {
    main: "#6C63FF", // light purple
    secondary: "#534CC2", // dark purple
    text: "#F7F7F7", // light gray
    buttonText: "#F7F7F7", // light gray
  },
};
const lightPalette = {
  mode: "light",
  primary: {
    main: "#6C63FF", // light purple
    secondary: "#534CC2", // dark purple
    text: "#252525", // black
    buttonText: "#F7F7F7", // light gray
  },
};

export const darkTheme = createTheme({
  palette: {
    ...darkPalette,
  },
});
export const lightTheme = createTheme({
  palette: {
    ...lightPalette,
  },
});
