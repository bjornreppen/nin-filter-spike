import React from "react";
import { IconButton, Button, Fab } from "@material-ui/core";
//import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";

const Add = ({ onClick }) => (
  <IconButton
    color="primary"
    size="small"
    style={{ position: "relative", zIndex: 100, left: 214, _top: -42 }}
    onClick={onClick}
  >
    <FilterListIcon />
  </IconButton>
);

export default Add;
