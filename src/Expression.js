import { Typography, ListSubheader } from "@material-ui/core";
import React from "react";
import { Chip } from "@material-ui/core";
import Add from "./Add";
import filterdef from "./filter";
import { rangeTilTekst } from "./format";

const template = [
  "verneform",
  "vernet_år",
  "verneplan",
  "forvaltningsmyndighet",
  "truet_vurdering",
  "iucn",
  "fylke",
  "areal"
];

const Tekst = ({ children }) => (
  <Typography
    variant="body2"
    color="textSecondary"
    component="span"
    style={{ _whiteSpace: "nowrap", marginRight: 4, _fontSize: 13 }}
  >
    {children}
  </Typography>
);

const Expression = ({
  onAdd,
  onClick,
  onDelete,
  fallback,
  valgtVariabel,
  filter
}) => {
  let r = template.map(k => {
    const t = filterdef[k];
    if (!filter[k]) {
      if (t.fallback)
        return (
          <div style={{ marginRight: 8 }}>
            <span>{fallback}</span>
          </div>
        );
      return null;
    }
    let verdi = filter[k].verdi;
    let label = "";
    if (t.type === "range") label = rangeTilTekst(verdi[0], verdi[1], t.enhet);
    else label = t.verdier[verdi];
    return (
      <Kriterie
        key={k}
        preText={t.pre}
        label={label}
        valgt={k === valgtVariabel}
        onClick={() => onClick(k)}
        onDelete={() => onDelete(k)}
      />
    );
  });
  return (
    <>
      {false && <Add onClick={onAdd} />}
      <ListSubheader>{fallback}</ListSubheader>
      <div style={{ _display: "inline-flex" }}>{r}</div>
    </>
  );
};

const Kriterie = ({ preText, label, valgt, onClick, onDelete }) => (
  <>
    {preText && <Tekst>{preText}</Tekst>}
    <Chip
      style={{ marginRight: 8, marginBottom: 6, marginTop: 2 }}
      color={valgt ? "primary" : ""}
      label={label}
      onClick={onClick}
      onDelete={onDelete}
    />
  </>
);

export default Expression;
