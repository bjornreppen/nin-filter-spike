import React, { useEffect, useState } from "react";
import Resultatliste from "./Resultatliste";

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
  if (filter.vernet_år) {
    const year = new Date(o.revisjon.dato.vernet).getFullYear();
    if (year !== filter.vernet_år) return false;
  }
  if (filter.fylke) {
    let match = false;
    for (var kommune of o.geografi.kommune) {
      const fylke = parseInt(kommune.substring(0, 2));
      if (fylke === fylkesnummer[filter.fylke]) match = true;
    }
    if (!match) return false;
  }
  return true;
}

const fylkesnummer = {
  "Trøndelag fylke": 50,
  "Nordland fylke": 18,
  "Troms fylke": 19,
  "Finnmark fylke": 20
};

export default ResultatContainer;
