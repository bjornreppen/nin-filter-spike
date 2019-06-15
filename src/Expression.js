import { ListSubheader } from "@material-ui/core";
import React from "react";
import { Chip } from "@material-ui/core";
import Add from "./Add";

const template = [
  { felt: "verneform", pre: "", fallback: true },
  { felt: "verneplan", pre: "vernet under" },
  { felt: "forvaltningsmyndighet", pre: "som forvaltes av" },
  { felt: "vernet_år", pre: "opprettet i år" },
  { felt: "fylke", pre: "som helt eller delvis ligger i" },
  { felt: "truet_vurdering", pre: "vurdert som" },
  { felt: "iucn", pre: "med IUCN kategori" }
];

const Expression = ({ onAdd, onClick, onDelete, domene: fallback, filter }) => {
  let r = template.map(t => {
    if (!filter[t.felt]) {
      if (t.fallback)
        return (
          <div style={{ marginRight: 8 }}>
            <span>{fallback}</span>
          </div>
        );
      return null;
    }
    return (
      <Kriterie
        key={t.felt}
        preText={t.pre}
        label={filter[t.felt]}
        onClick={() => onClick(t.felt)}
        onDelete={() => onDelete(t.felt)}
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
      <span style={{ whiteSpace: "nowrap", marginRight: 8 }}>{preText}</span>
    )}
    <Chip
      style={{ marginRight: 8, marginBottom: 2, marginTop: 2 }}
      label={label}
      onClick={onClick}
      onDelete={onDelete}
    />
  </>
);

export default Expression;
