import React from "react";
import filter from "./filter";
import { IconButton, Menu, MenuItem } from "@material-ui/core/";
import FilterListIcon from "@material-ui/icons/FilterList";

const Variabel = ({ onSelectVariable, aktive }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    onSelectVariable(null);
    setAnchorEl(null);
  }

  function handleSelect(v) {
    handleClose();
    console.warn("--", v);
    onSelectVariable(v);
  }
  console.log(aktive);
  console.log(filter);
  if (Object.keys(aktive).length >= Object.keys(filter).length) return null;
  return (
    <div style={{ position: "relative", display: "inline" }}>
      <IconButton
        color="primary"
        size="small"
        style={{ position: "relative", zIndex: 100, left: 214, _top: -42 }}
        onClick={handleClick}
      >
        <FilterListIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.entries(filter).map(([k, v]) => {
          if (aktive[k]) return null;
          return (
            <MenuItem key={k} onClick={() => handleSelect(k)}>
              {v.tittel}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default Variabel;
