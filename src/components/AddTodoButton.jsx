import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ComposerModal from "./ComposerModal";
import PropTypes from "prop-types";

function AddTodoButton({ addTodo }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleApply = (newValue) => {
    addTodo(newValue);
  };

  return (
    <>
      <IconButton
        sx={{
          bgcolor: "primary.main",
          color: "primary.buttonText",
        }}
        onClick={openModal}
      >
        <AddIcon />
      </IconButton>
      <ComposerModal
        isOpen={isModalOpen}
        title="NEW NOTE"
        onClose={closeModal}
        onApply={handleApply}
      />
    </>
  );
}
AddTodoButton.propTypes = {
  addTodo: PropTypes.func,
};
export default AddTodoButton;
