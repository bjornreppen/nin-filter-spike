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
  onClick,
  onSelectVariable,
  onSelectValue,
  onSetValue,
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
        onSelectVariable={onSelectVariable}
        onSetValue={onSetValue}
        key={k}
        verdi={verdi}
        preText={t.pre}
        label={label}
        erValgt={k === valgtVariabel}
        onClick={() => onClick(k)}
        onDelete={() => onDelete(k)}
      />
    );
  });
  return <div style={{ _display: "inline-flex" }}>{r}</div>;
};

export default Expression;
