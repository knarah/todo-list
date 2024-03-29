import React from "react";
import { Box, FormControlLabel, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useTodosData } from "../hooks/useTodosData";
import ComposerModal from "./ComposerModal";
import PropTypes from "prop-types";

function List({ todos, searchValue, option }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [value, setValue] = React.useState();
  const { editTodo, deleteTodo } = useTodosData();

  const filteredTodos = React.useMemo(() => {
    const filteredBySearch = searchValue
      ? todos.filter((todo) => todo?.value?.toLowerCase().includes(searchValue.toLowerCase()))
      : todos;

    let filteredByOptions;
    if (option === "active") {
      filteredByOptions = filteredBySearch.filter((todo) => !todo?.isChecked);
    } else if (option === "completed") {
      filteredByOptions = filteredBySearch.filter((todo) => todo?.isChecked);
    } else {
      filteredByOptions = filteredBySearch;
    }
    return filteredByOptions;
  }, [searchValue, todos, option]);

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckboxChange = (e) => {
    const targetId = e.target.value;
    editTodo(targetId);
  };

  const handleTodoEdit = (todoObj) => {
    openModal(todoObj);
    setValue(todoObj);
  };

  const handleTodoDelete = (todoId) => {
    deleteTodo(todoId);
  };

  const handleApply = (newValue) => {
    editTodo(newValue);
  };

  const hasFilteredTodos = Array.isArray(filteredTodos) && filteredTodos.length > 0;

  return (
    <>
      {hasFilteredTodos ? (
        filteredTodos.map((todo) => (
          <Box
            sx={{
              width: "100%",
              borderBottom: 1,
              display: "flex",
              justifyContent: "space-between",
              borderColor: "#C3C1E5",
              mt: 1,
            }}
            key={todo.id}
          >
            <FormControlLabel
              sx={{
                color: "primary.text",
              }}
              label={todo.value}
              value={todo.id}
              control={<Checkbox onChange={handleCheckboxChange} checked={todo.isChecked} />}
            />
            <Box>
              <IconButton aria-label="edit" onClick={() => handleTodoEdit(todo)}>
                <ModeEditIcon sx={{ fontSize: "medium" }} />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => handleTodoDelete(todo.id)}>
                <DeleteIcon sx={{ fontSize: "medium" }} />
              </IconButton>
            </Box>
          </Box>
        ))
      ) : (
        <Box>
          <img src="/searching.png" alt="No result" style={{ width: "50%", height: "auto" }} />
          <Typography variant="h6" color="primary.text">
            Empty...
          </Typography>
        </Box>
      )}
      <ComposerModal
        isOpen={isModalOpen}
        title="EDIT NOTE"
        onClose={closeModal}
        value={value}
        onApply={handleApply}
      />
    </>
  );
}

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      isChecked: PropTypes.bool,
    })
  ),
  searchValue: PropTypes.string,
  option: PropTypes.string,
};
export default List;
