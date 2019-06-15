import React, { useState } from "react";
import VelgVariabel from "./VelgVariabel";
import VelgVerdi from "./VelgVerdi";
import Expression from "./Expression";
import ResultatContainer from "./ResultatContainer";
import { Paper } from "@material-ui/core";

function App() {
  const [page, setPage] = useState("expression");
  const [variabel, setVariabel] = useState();
  const [filter, setFilter] = useState({
    verneform: "VV-VF-LV",
    vernet_år: 1990,
    fylke: "50",
    forvaltningsmyndighet: "VV-FM-FM",
    truet_vurdering: "VV-TV-T",
    iucn: "VV-PA-II",
    verneplan: "VV-VP-VM"
  });

  return (
    <Paper style={{ width: 470, padding: 16, margin: 24 }}>
      {page === "expression" && (
        <>
          <Expression
            domene="Naturvernområder"
            filter={filter}
            onClick={variabel => {
              setVariabel(variabel);
              setPage("verdi");
            }}
            onAdd={() => setPage("variable")}
            onDelete={variabel => {
              delete filter[variabel];
              setFilter(Object.assign({}, filter));
            }}
          />
          <ResultatContainer filter={filter} />
        </>
      )}
      {page === "variable" && (
        <VelgVariabel
          onSelect={variabel => {
            setVariabel(variabel);
            setPage("verdi");
          }}
        />
      )}
      {page === "verdi" && (
        <VelgVerdi
          variabel={variabel}
          onSelect={verdi => {
            filter[variabel] = verdi;
            setFilter(filter);
            setPage("expression");
          }}
        />
      )}
    </Paper>
  );
}

export default App;
