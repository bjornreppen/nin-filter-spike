import Verdi from "./Verdi";
import React from "react";
import filter from "./filter";
import { IconButton, Menu, MenuItem } from "@material-ui/core/";
import FilterListIcon from "@material-ui/icons/FilterList";

const Variabel = ({
  onSelectValue,
  onSelectVariable,
  variabel,
  verdi,
  aktive
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    onSelectVariable(null);
    setAnchorEl(null);
  }

  function handleSelect(v) {
    onSelectVariable(v);
  }

  function handleSelectValue(v) {
    handleClose();
    onSelectValue(v);
  }

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
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {variabel ? (
          <Verdi
            variabel={variabel}
            verdi={verdi}
            onSelect={handleSelectValue}
          />
        ) : (
          Object.entries(filter).map(([k, v]) => {
            if (aktive[k]) return null;
            return (
              <MenuItem key={k} onClick={() => handleSelect(k)}>
                {v.tittel}
              </MenuItem>
            );
          })
        )}
      </Menu>
    </div>
  );
};

export default Variabel;
