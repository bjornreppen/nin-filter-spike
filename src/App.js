import React, { useState } from "react";
import Variabel from "./Variabel";
import Expression from "./Expression";
import ResultatContainer from "./ResultatContainer";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

const all = {
  verneform: { verdi: "VV-VF-LVO" },
  vernet_år: {
    verdi: "1990"
  },
  fylke: { verdi: "50" },
  forvaltningsmyndighet: {
    verdi: "VV-FM-FM"
  },
  truet_vurdering: { verdi: "VV-TV-T" },
  iucn: {
    verdi: "VV-PA-II"
  },
  verneplan: {
    verdi: "VV-VP-VM"
  },
  areal: {
    verdi: [100, 10000]
  }
};

function App() {
  const [page, setPage] = useState("expression");
  const [variabel, setVariabel] = useState();
  const [filter, setFilter] = useState(all);

  return (
    <>
      <Card style={{ width: 470, margin: 24 }}>
        {(true || page === "expression") && (
          <>
            <CardMedia
              component="img"
              height="210"
              image="cardmedia.jpg"
              title="--"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Naturvernområder
                <Variabel
                  aktive={filter}
                  onSelectVariable={variabel => {
                    setVariabel(variabel);
                    filter[variabel] = filter[variabel] || {};
                    filter[variabel].verdi = "???";
                    setFilter(Object.assign({}, filter));
                    setPage("verdi");
                  }}
                />
              </Typography>
              <Expression
                domene="Naturvernområder"
                filter={filter}
                onClick={nyVariabel => {
                  setVariabel(nyVariabel === variabel ? "" : nyVariabel);
                  setPage(nyVariabel === variabel ? "expression" : "verdi");
                }}
                onSelectValue={(variabel, verdi) => {
                  filter[variabel].verdi = verdi;
                  setVariabel(null);
                  setFilter(Object.assign({}, filter));
                }}
                onSetValue={(variabel, verdi) => {
                  filter[variabel].verdi = verdi;
                  setFilter(Object.assign({}, filter));
                  console.log(filter);
                }}
                onSelectVariable={variabel => {
                  setVariabel(variabel);
                }}
                valgtVariabel={variabel}
                onDelete={variabel => {
                  delete filter[variabel];
                  setFilter(Object.assign({}, filter));
                  setPage("expression");
                }}
              />
              <ResultatContainer filter={filter} />
            </CardContent>
          </>
        )}
      </Card>
    </>
  );
}

export default App;
