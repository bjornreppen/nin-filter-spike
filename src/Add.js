import React from "react";
import { Button, Fab } from "@material-ui/core";
//import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";

const Add = ({ onClick }) => (
  <Button
    color="primary"
    size="small"
    style={{ position: "relative", zIndex: 100, left: 384, top: -42 }}
    onClick={onClick}
  >
    <FilterListIcon />
  </Button>
);

export default Add;
