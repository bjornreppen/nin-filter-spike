import { IconButton, Menu, MenuItem } from "@material-ui/core/";
import React from "react";
import { Chip, Typography } from "@material-ui/core";
import Verdi from "./Verdi";

const Tekst = ({ children }) => (
  <Typography
    variant="body2"
    color="textSecondary"
    component="span"
    style={{ _whiteSpace: "nowrap", marginRight: 4, _fontSize: 13 }}
  >
    {children}
  </Typography>
);

const Kriterie = ({
  preText,
  variabel,
  label,
  valgt,
  onClick,
  onSelectValue,
  onDelete
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
    onClick(event);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleSelectValue(verdi) {
    handleClose();
    onSelectValue(variabel, verdi);
  }

  return (
    <>
      {preText && <Tekst>{preText}</Tekst>}
      <Chip
        style={{ marginRight: 8, marginBottom: 6, marginTop: 2 }}
        color={valgt ? "primary" : ""}
        label={label}
        onClick={handleClick}
        onDelete={onDelete}
      />
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {anchorEl && (
          <Verdi
            variabel={variabel}
            verdi={valgt}
            onSelect={handleSelectValue}
          />
        )}
      </Menu>
    </>
  );
};

export default Kriterie;
