import { Typography, ListSubheader } from "@material-ui/core";
import React from "react";
import { Chip } from "@material-ui/core";
import Add from "./Add";
import filterdef from "./filter";

const template = [
  "verneform",
  "vernet_år",
  "verneplan",
  "forvaltningsmyndighet",
  "truet_vurdering",
  "iucn",
  "fylke"
];

const Expression = ({ onAdd, onClick, onDelete, fallback, filter }) => {
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
    const kode = filter[k];
    const label = filterdef[k].verdier[kode];
    return (
      <Kriterie
        key={k}
        preText={t.pre}
        label={label}
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

const Kriterie = ({ preText, label, onClick, onDelete }) => (
  <>
    {preText && (
      <Typography
        variant="body2"
        color="textSecondary"
        component="span"
        style={{ _whiteSpace: "nowrap", marginRight: 4, _fontSize: 13 }}
      >
        {preText}
      </Typography>
    )}
    <Chip
      style={{ marginRight: 8, marginBottom: 6, marginTop: 2 }}
      label={label}
      onClick={onClick}
      onDelete={onDelete}
    />
  </>
);

export default Expression;
