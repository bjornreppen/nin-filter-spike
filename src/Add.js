import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Add = ({ onClick }) => (
  <Fab
    color="primary"
    style={{ position: "absolute", bottom: 48, right: 48 }}
    onClick={onClick}
  >
    <AddIcon />
  </Fab>
);

export default Add;
