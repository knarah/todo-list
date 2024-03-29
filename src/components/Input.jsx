// import React from "react";
import { Box, TextField, Select, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ThemeButton from "./themeButton";
// import { useFilter } from "../hooks/useFilter";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Input({ setSearchValue, isDarkMode, setOption, option }) {
  const handleChange = (e) => {
    const newOption = e.target.value;
    setOption(newOption);
  };

  return (
    <Box sx={{ width: "100%", height: "40px" }} display="flex">
      <TextField
        mx={0}
        sx={{
          padding: "0px",
          minWidth: 250,
          tabSize: "large",
          flexGrow: 2,
          "& .MuiOutlinedInput-input": {
            py: 1,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.main",
            },
          },
          "&:hover .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
        InputProps={{
          endAdornment: <SearchIcon color="primary" sx={{ fontSize: 32 }} />,
        }}
        placeholder="Serch note..."
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={option}
        sx={{
          mx: 2,
          minWidth: 120,
          bgcolor: "primary.main",
          color: "primary.buttonText",
          fontWeight: "bold",
          "& .MuiSvgIcon-root": {
            fontSize: "medium",
            color: "primary.buttonText",
          },
        }}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
      </Select>
      <ThemeButton isDarkMode={isDarkMode} />
    </Box>
  );
}

Input.propTypes = {
  setSearchValue: PropTypes.func,
  isDarkMode: PropTypes.bool,
  setOption: PropTypes.func,
  option: PropTypes.string,
};

export default Input;
