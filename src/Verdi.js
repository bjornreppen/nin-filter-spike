import React from "react";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import filter from "./filter";
import MinMax from "./MinMax";

const Verdi = ({ variabel, verdi, onSelect }) => {
  const felt = filter[variabel];
  const verdier = felt.verdier;
  return (
    <List>
      <ListSubheader>{felt.tittel}</ListSubheader>
      {felt.type === "range" ? (
        <MinMax
          min={felt.min}
          max={felt.max}
          fra={(verdi && verdi[0]) || felt.min}
          til={(verdi && verdi[1]) || felt.max}
          enhet={felt.enhet}
          onSelect={onSelect}
        />
      ) : (
        <Valgliste onSelect={onSelect} verdier={verdier} />
      )}
    </List>
  );
};

const Valgliste = ({ onSelect, verdier }) =>
  Object.entries(verdier).map(([k, v]) => {
    console.log(k, v);
    return <Element key={k} primary={v} onClick={() => onSelect(k)} />;
  });

const Element = ({ primary, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemText primary={primary} />
  </ListItem>
);

export default Verdi;
