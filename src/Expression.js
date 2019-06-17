import { ListSubheader } from "@material-ui/core";
import React from "react";
import filterdef from "./filter";
import { rangeTilTekst } from "./format";
import Kriterie from "./Kriterie";

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

const Expression = ({
  onAdd,
  onClick,
  onSelectValue,
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
        variabel={k}
        onSelectValue={onSelectValue}
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
      <ListSubheader>{fallback}</ListSubheader>
      <div style={{ _display: "inline-flex" }}>{r}</div>
    </>
  );
};

export default Expression;
