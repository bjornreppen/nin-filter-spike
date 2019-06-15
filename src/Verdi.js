import React from "react";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import filter from "./filter";

const Verdi = ({ variabel, onSelect }) => {
  const verdier = filter[variabel].verdier;
  console.log(verdier);
  return (
    <List>
      <ListSubheader>{variabel.replace("_", " ")}</ListSubheader>
      {Object.entries(verdier).map(([k, v]) => {
        console.log(k, v);
        return <Element key={k} primary={v} onClick={() => onSelect(k)} />;
      })}
    </List>
  );
};

const Element = ({ primary, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemText primary={primary} />
  </ListItem>
);

export default Verdi;
