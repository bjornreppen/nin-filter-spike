import React from "react";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import filter from "./filter";

const Variabel = ({ onSelect, aktive }) => (
  <List>
    {false && <ListSubheader>Filtrer på</ListSubheader>}
    {Object.entries(filter).map(([k, v]) => {
      if (aktive[k]) return null;
      return <Element key={k} primary={v.tittel} onClick={() => onSelect(k)} />;
    })}
  </List>
);

const Element = ({ key, primary, onClick }) => (
  <ListItem button onClick={onClick} key={key}>
    <ListItemText primary={primary} />
  </ListItem>
);

export default Variabel;
