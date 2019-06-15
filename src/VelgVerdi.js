import React from "react";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import filter from "./filter";

const Verdi = ({ variabel, onSelect }) => (
  <List>
    <ListSubheader>{variabel.replace("_", " ")}</ListSubheader>
    {Object.values(filter[variabel].verdier).map(v => (
      <Element key={v} primary={v} onClick={() => onSelect(v)} />
    ))}
  </List>
);

const Element = ({ primary, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemText primary={primary} />
  </ListItem>
);

export default Verdi;
