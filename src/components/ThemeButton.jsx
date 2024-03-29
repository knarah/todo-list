import React from "react";
import { IconButton } from "@mui/material";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkModeContext } from "../context/DarkModeContext";

function ThemeButton() {
  const { isDarkMode, toggleMode } = React.useContext(DarkModeContext);
  return (
    <IconButton
      onClick={() => toggleMode()}
      variant="solid"
      sx={{
        width: "40px",
        height: "40px",
        bgcolor: "primary.main",
        color: "primary.buttonText",
        borderRadius: 1,
      }}
    >
      {isDarkMode ? <LightModeIcon /> : <NightlightIcon />}
    </IconButton>
  );
}

export default ThemeButton;
