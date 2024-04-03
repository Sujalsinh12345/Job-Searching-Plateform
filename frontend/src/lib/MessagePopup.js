import React from "react";
import { Snackbar, Slide } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const MessagePopup = (props) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.setOpen(false);
  };

  return (
    <Snackbar
      open={props.open}
      onClose={handleClose}
      autoHideDuration={2000}
      TransitionComponent={Slide} // Using Slide transition here
      TransitionProps={{ direction: "up" }} // Example: slide from bottom to top
    >
      <Alert onClose={handleClose} severity={props.severity}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default MessagePopup;
