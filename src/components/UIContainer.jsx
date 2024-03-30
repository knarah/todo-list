import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import AddTodoButton from "./AddTodoButton";
import { DarkModeContext } from "../context/DarkModeContext";
import { useTodosData } from "../hooks/useTodosData";
import List from "./List";
import Input from "./Input";

function UIContainer() {
  const { isDarkMode } = React.useContext(DarkModeContext);

  const [searchValue, setSearchValue] = React.useState();
  const [option, setOption] = React.useState("all");

  const { todos, addTodo, editTodo, deleteTodo } = useTodosData();
  const theme = useTheme();

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Container
        maxWidth="md"
        sx={{
          pt: 8,
          height: "100vh",
          [theme.breakpoints.up("md")]: {
            width: "800px",
          },
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={3} color="primary.text">
          TODO LIST
        </Typography>
        <Input setSearchValue={setSearchValue} option={option} setOption={setOption} />
        <Box
          sx={{
            margin: "auto",
            marginTop: "20px",
            width: "70%",
          }}
        >
          <List
            option={option}
            searchValue={searchValue}
            todos={todos}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
            marginRight: "10px",
          }}
        >
          <AddTodoButton addTodo={addTodo} />
        </Box>
      </Container>
    </div>
  );
}

export default UIContainer;
