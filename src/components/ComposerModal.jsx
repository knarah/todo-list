import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

function ComposerModal({ isOpen, title, onClose, value, onApply }) {
  const [newValue, setNewValue] = React.useState({ value });

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          onChange={(e) => {
            setNewValue({ ...value, value: e.target.value });
          }}
          placeholder="Input your note..."
          defaultValue={value?.value}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            onApply(newValue);
            onClose();
          }}
          color="primary"
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ComposerModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  value: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string,
    isChecked: PropTypes.bool,
  }),
  onApply: PropTypes.func,
};
export default ComposerModal;
