import React from "react";
import Fab from "@material-ui/core/Fab";
//import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";

const Add = ({ onClick }) => (
  <Fab
    color="primary"
    size="small"
    style={{ _position: "relative", zIndex: 100, _left: 222, _top: 28 }}
    onClick={onClick}
  >
    <FilterListIcon />
  </Fab>
);

export default Add;
