import React from "react";
import { MenuItem } from "@material-ui/core";
import filter from "./filter";
import MinMax from "./MinMax";

const Verdi = ({ variabel, verdi, onSelect }) => {
  const felt = filter[variabel];
  const verdier = felt.verdier;
  if (felt.type === "range")
    return (
      <MinMax
        min={felt.min}
        max={felt.max}
        fra={(verdi && verdi[0]) || felt.min}
        til={(verdi && verdi[1]) || felt.max}
        enhet={felt.enhet}
        onSelect={onSelect}
      />
    );

  return (
    <>
      <Valgliste onSelect={onSelect} valgt={verdi} verdier={verdier} />
    </>
  );
};

const Valgliste = ({ onSelect, verdier, valgt }) =>
  Object.entries(verdier).map(([k, v]) => {
    return (
      <MenuItem key={k} selected={valgt === k} onClick={() => onSelect(k)}>
        {v}
      </MenuItem>
    );
  });

export default Verdi;
