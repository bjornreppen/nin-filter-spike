import React, { useEffect, useState } from "react";
import Resultatliste from "./Resultatliste";

const ResultatContainer = ({ filter }) => {
  const [områder, setOmråder] = useState([]);
  const [filtrert, setFiltrert] = useState([]);
  useEffect(() => {
    console.log("load");
    fetch("naturvernområde.json").then(r =>
      r.json().then(json => setOmråder(json.items))
    );
  }, []);
  useEffect(() => {
    console.log("filter");
    const e = områder.filter(o => erTreff(o, filter));
    const sortert = e.sort((a, b) => (a.navn.nob > b.navn.nob ? 1 : -1));
    setFiltrert(sortert);
  }, [områder, filter]);

  return <Resultatliste items={filtrert} />;
};

async function filtrer(områder) {}

function erTreff(o, filter) {
  if (filter.verneform) {
    if (!o.verneform) return false;
    if (o.verneform.kode !== filter.verneform.verdi) return false;
  }
  if (filter.verneplan) {
    if (!o.verneplan) return false;
    if (o.verneplan.kode !== filter.verneplan.verdi) return false;
  }
  if (filter.forvaltningsmyndighet) {
    if (!o.forvaltning) return false;
    if (o.forvaltning.ansvarlig.kode !== filter.forvaltningsmyndighet.verdi)
      return false;
  }
  if (filter.vernet_år) {
    const year = new Date(o.revisjon.dato.vernet).getFullYear().toString();
    if (year !== filter.vernet_år.verdi) return false;
  }
  if (filter.fylke) {
    let match = false;
    for (var kommune of o.geografi.kommune) {
      const fylke = kommune.substring(0, 2);
      if (fylke === filter.fylke.verdi) match = true;
    }
    if (!match) return false;
  }
  if (filter.truet_vurdering) {
    if (o.vurdering.truet.kode !== filter.truet_vurdering.verdi) return false;
  }
  if (filter.iucn) {
    if (!o.vurdering.iucn) return false;
    if (o.vurdering.iucn.kode !== filter.iucn.verdi) return false;
  }
  if (filter.areal) {
    if (!o.geografi.areal) return false;
    if (o.geografi.areal < filter.areal.verdi[0]) return false;
    if (o.geografi.areal > filter.areal.verdi[1]) return false;
  }
  return true;
}

export default ResultatContainer;
