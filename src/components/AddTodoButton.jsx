import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ComposerModal from "./ComposerModal";
import { useTodosData } from "../hooks/useTodosData";

function AddTodoButton() {
  const { addTodo } = useTodosData();

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

export default AddTodoButton;
