import React from "react";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const Resultatliste = ({ items }) => {
  return (
    <List>
      <ListSubheader>{items.length} områder</ListSubheader>
      {items.map(e => (
        <ListItem
          button
          onClick={() => {
            window.open(e.lenke.wikipedia || e.lenke.verneforskrift);
          }}
          key={e.kode}
        >
          <ListItemText
            primary={e.navn.nob}
            _secondary={e.verneform.navn.nob}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Resultatliste;
