import React, { useEffect, useState } from "react";
import Resultatliste from "./Resultatliste";
import filterdef from "./filter";

const ResultatContainer = ({ filter }) => {
  const [områder, setOmråder] = useState([]);
  useEffect(() => {
    fetch("naturvernområde.json").then(r =>
      r.json().then(json => setOmråder(json.items))
    );
  }, []);

  const e = områder.filter(o => filtrer(o, filter));
  const sortert = e.sort((a, b) => (a.navn.nob > b.navn.nob ? 1 : -1));
  return <Resultatliste items={sortert} />;
};

function filtrer(o, filter) {
  if (filter.verneform) {
    if (!o.verneform) return false;
    if (o.verneform.kode !== filter.verneform) return false;
  }
  if (filter.verneplan) {
    if (!o.verneplan) return false;
    if (o.verneplan.kode !== filter.verneplan) return false;
  }
  if (filter.forvaltningsmyndighet) {
    if (!o.forvaltning) return false;
    if (o.forvaltning.ansvarlig.kode !== filter.forvaltningsmyndighet)
      return false;
  }
  if (filter.vernet_år) {
    const year = new Date(o.revisjon.dato.vernet).getFullYear().toString();
    console.log(filter.vernet_år);
    if (year !== filter.vernet_år) return false;
  }
  if (filter.fylke) {
    let match = false;
    for (var kommune of o.geografi.kommune) {
      const fylke = kommune.substring(0, 2);
      if (fylke === filter.fylke) match = true;
    }
    if (!match) return false;
  }
  if (filter.truet_vurdering) {
    if (o.vurdering.truet.kode !== filter.truet_vurdering) return false;
  }
  return true;
}

export default ResultatContainer;
