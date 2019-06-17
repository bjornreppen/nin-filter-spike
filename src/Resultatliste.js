import React from "react";
import {
  List,
  ListItem,
  CircularProgress,
  ListItemText,
  ListSubheader
} from "@material-ui/core";

const Resultatliste = ({ items }) => {
  if (!items) return <CircularProgress />;
  return (
    <List>
      <ListSubheader>{items.length} områder</ListSubheader>
      {items.slice(0, 200).map(e => (
        <ListItem
          dense
          button
          onClick={() => {
            window.open(e.lenke.wikipedia || e.lenke.verneforskrift);
          }}
          key={e.kode}
        >
          <ListItemText primary={e.navn.nob} />
        </ListItem>
      ))}
    </List>
  );
};

export default Resultatliste;
