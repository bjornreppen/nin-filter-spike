import { ListSubheader } from "@material-ui/core";
import React from "react";
import { Chip } from "@material-ui/core";
import Add from "./Add";
import filterdef from "./filter";

const template = [
  "verneform",
  "verneplan",
  "forvaltningsmyndighet",
  "vernet_år",
  "fylke",
  "truet_vurdering",
  "iucn"
];

const Expression = ({ onAdd, onClick, onDelete, domene: fallback, filter }) => {
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
      <ListSubheader>Utvalg</ListSubheader>
      <div style={{ _display: "inline-flex" }}>
        {r} <Add onClick={onAdd} />
      </div>
    </>
  );
};

const Kriterie = ({ preText, label, onClick, onDelete }) => (
  <>
    {preText && (
      <span style={{ whiteSpace: "nowrap", marginRight: 8, fontSize: 14 }}>
        {preText}
      </span>
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
