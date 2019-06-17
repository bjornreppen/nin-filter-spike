import filterdef from "./filter";
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
  const [variabel, setVariabel] = useState();
  const [filter, setFilter] = useState({});

  return (
    <>
      <Card style={{ width: 470, margin: 24 }}>
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
                  if (!variabel) return;
                  filter[variabel] = filter[variabel] || {};
                  filter[variabel].verdi = filterdef[variabel].default;
                  setFilter(Object.assign({}, filter));
                }}
              />
            </Typography>
            <Expression
              domene="Naturvernområder"
              filter={filter}
              onClick={nyVariabel => {
                setVariabel(nyVariabel === variabel ? "" : nyVariabel);
              }}
              onSelectValue={(variabel, verdi) => {
                filter[variabel].verdi = verdi;
                setVariabel(null);
                setFilter(Object.assign({}, filter));
              }}
              onSetValue={(variabel, verdi) => {
                filter[variabel].verdi = verdi;
                setFilter(Object.assign({}, filter));
              }}
              onSelectVariable={variabel => {
                setVariabel(variabel);
              }}
              valgtVariabel={variabel}
              onDelete={variabel => {
                delete filter[variabel];
                setFilter(Object.assign({}, filter));
              }}
            />
            <ResultatContainer filter={filter} />
          </CardContent>
        </>
      </Card>
    </>
  );
}

export default App;
