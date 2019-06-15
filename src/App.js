import { red } from "@material-ui/core/colors";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Variabel from "./Variabel";
import Verdi from "./Verdi";
import Expression from "./Expression";
import ResultatContainer from "./ResultatContainer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Card,
  CardMedia,
  Button,
  Collapse,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

function App() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);
  const [page, setPage] = useState("expression");
  const [variabel, setVariabel] = useState();
  const [filter, setFilter] = useState({
    verneform: "VV-VF-LVO",
    vernet_år: "1990",
    fylke: "50",
    forvaltningsmyndighet: "VV-FM-FM",
    truet_vurdering: "VV-TV-T",
    iucn: "VV-PA-II",
    verneplan: "VV-VP-VM"
  });

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <>
      <Card style={{ width: 470, margin: 24 }}>
        {(true || page === "expression") && (
          <>
            <CardActionArea
              _onClick={() =>
                setPage(page === "expression" ? "variable" : "expression")
              }
            >
              <CardMedia
                component="img"
                alt="---"
                height="210"
                image="cardmedia.jpg"
                title="--"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Naturvernområder
                </Typography>
                {page === "variable" && (
                  <Variabel
                    onSelect={variabel => {
                      setVariabel(variabel);
                      setPage("verdi");
                    }}
                  />
                )}
                {page === "verdi" && (
                  <Verdi
                    variabel={variabel}
                    onSelect={verdi => {
                      filter[variabel] = verdi;
                      setFilter(Object.assign({}, filter));
                      setPage("expression");
                    }}
                  />
                )}
                <Expression
                  domene="Naturvernområder"
                  filter={filter}
                  onClick={variabel => {
                    setVariabel(variabel);
                    setPage("verdi");
                  }}
                  onAdd={() =>
                    setPage(page === "expression" ? "variable" : "expression")
                  }
                  onDelete={variabel => {
                    delete filter[variabel];
                    setFilter(Object.assign({}, filter));
                    setPage("expression");
                  }}
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <ResultatContainer filter={filter} />
              </CardContent>
            </Collapse>
          </>
        )}
      </Card>
    </>
  );
}

export default App;
