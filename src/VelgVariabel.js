import React from "react";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const variabler = {
  verneform: "Verneform",
  verneplan: "Verneplan",
  forvaltningsmyndighet: "Forvaltningsmyndighet",
  fylke: "Fylke",
  vernet_år: "Vernet tidspunkt",
  truet_vurdering: "Truet vurdering",
  iucn: "Verneområdets status (IUCN)"
};

const VelgVariabel = ({ onSelect }) => (
  <List>
    <ListSubheader>Filtrer på</ListSubheader>
    {Object.entries(variabler).map(([k, v]) => (
      <Element key={k} primary={v} onClick={() => onSelect(k)} />
    ))}
  </List>
);

const Element = ({ key, primary, onClick }) => (
  <ListItem button onClick={onClick} key={key}>
    <ListItemText primary={primary} />
  </ListItem>
);

export default VelgVariabel;
