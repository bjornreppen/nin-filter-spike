import React from "react";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const verdier = {
  verneform: [
    "Biotopvern",
    "Landskapsverneområder",
    "Naturreservat",
    "Naturminne",
    "Nasjonalpark"
  ],
  vernet_år: [1960, 1970, 1980, 1990, 2000, 2010],
  forvaltningsmyndighet: [
    "Fylkesmann",
    "Kommune",
    "Nasjonalparkstyre",
    "Verneområdestyre"
  ],
  fylke: ["Trøndelag fylke", "Nordland fylke", "Troms fylke", "Finnmark fylke"],
  truet_vurdering: ["Ikke truet", "Truet", "Ikke vurdert"],
  iucn: [
    "Vern av naturlige attraksjoner",
    "Vern av økosystemer og friluftsliv",
    "Vern gjennom aktiv forvaltning"
  ],
  verneplan: [
    "Verneplan for myr",
    "Verneplan for sjøfugl",
    "Skogvern",
    "Marin verneplan",
    "Kvartærgeologi",
    "Verneplan for nasjonalparker"
  ]
};

const Verdi = ({ variabel, onSelect }) => (
  <List>
    <ListSubheader>{variabel}</ListSubheader>
    {Object.values(verdier[variabel]).map(v => (
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
