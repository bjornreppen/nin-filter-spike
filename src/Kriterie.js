import { Menu } from "@material-ui/core/";
import React from "react";
import { MenuItem, Chip, Typography } from "@material-ui/core";
import filter from "./filter";
import MinMax from "./MinMax";

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

function Kriterie({
  preText,
  variabel,
  label,
  verdi,
  erValgt,
  onClick,
  onSelectVariable,
  onSetValue,
  onSelectValue,
  onDelete
}) {
  const anchorEl = React.useRef(null);

  function handleClick(event) {
    onClick(event);
  }

  function handleClose() {
    onSelectVariable(null);
  }

  const felt = filter[variabel];
  const verdier = felt.verdier;
  return (
    <>
      {preText && <Tekst>{preText}</Tekst>}
      <Chip
        style={{ marginRight: 8, marginBottom: 6, marginTop: 2 }}
        color={erValgt ? "primary" : "default"}
        label={label}
        onClick={handleClick}
        onDelete={onDelete}
        ref={anchorEl}
      />
      {felt.type === "range" && erValgt ? (
        <MinMax
          min={felt.min}
          max={felt.max}
          fra={(verdi && verdi[0]) || felt.min}
          til={(verdi && verdi[1]) || felt.max}
          enhet={felt.enhet}
          onSelect={v => onSetValue(variabel, v)}
          onSelectVariable={onSelectVariable}
        />
      ) : (
        anchorEl.current &&
        erValgt && (
          <Menu
            anchorEl={anchorEl.current}
            transformOrigin={{ vertical: -50, horizontal: 0 }}
            keepMounted
            open={erValgt}
            onClose={handleClose}
            elevation={1}
          >
            {Object.entries(verdier).map(([k, v]) => {
              return (
                <MenuItem key={k} onClick={() => onSelectValue(variabel, k)}>
                  {v}
                </MenuItem>
              );
            })}
          </Menu>
        )
      )}
    </>
  );
}

export default Kriterie;
