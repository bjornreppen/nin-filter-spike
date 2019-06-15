import React from "react";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import filter from "./filter";

const Verdi = ({ variabel, onSelect }) => {
  const felt = filter[variabel];
  const verdier = felt.verdier;
  return (
    <List>
      <ListSubheader>{felt.tittel}</ListSubheader>
      {felt.type === "range" ? (
        <div>xxx</div>
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
