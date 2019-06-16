import React from "react";
import { ListItem, ListSubheader } from "@material-ui/core";
import Slider from "@material-ui/lab/Slider";
import { pretty } from "./format";

function realValue(value) {
  return Math.pow(10, value);
}
function fraReal(value) {
  return Math.log10(value);
}

const marks = [
  /*  {
    value: 2,
    label: "0m²"
  },*/
  {
    value: 3,
    label: "1daa" //"1000m²"
  },
  {
    value: 4,
    label: "10daa" //"1000m²"
  },
  {
    value: 5,
    label: "100daa" //"1000m²"
  },
  {
    value: 6,
    label: "1km²" //"1000m²"
  },
  {
    value: 7,
    label: "10km²" //"1000m²"
  } /*,
  {
    value: 8,
    label: "100km²" //"1000m²"
  }*/
];

const MinMax = ({ onSelect, fra, til, min, max, enhet }) => {
  return (
    <div>
      <ListSubheader>Større enn {pretty(fra, enhet)}</ListSubheader>
      <ListItem>
        <Slider
          defaultValue={min}
          min={Math.log10(min || 1)}
          max={Math.log10(max)}
          valueLabelFormat={realValue}
          aria-labelledby="discrete-slider-always"
          step={0.01}
          marks={marks}
          value={fraReal(fra)}
          _valueLabelDisplay="on"
          onChange={(e, v) => {
            const nyFra = realValue(v);
            onSelect([nyFra, nyFra < til ? til : nyFra]);
          }}
        />
      </ListItem>
      <ListSubheader>Mindre enn {pretty(til, enhet)}</ListSubheader>
      <ListItem>
        <Slider
          defaultValue={max}
          min={Math.log10(min || 1)}
          max={Math.log10(max)}
          aria-labelledby="discrete-slider-always"
          step={0.01}
          marks={marks}
          value={fraReal(til)}
          _valueLabelDisplay="on"
          onChange={(e, v) => {
            const nyTil = realValue(v);
            onSelect([nyTil > fra ? fra : nyTil, nyTil]);
          }}
        />
      </ListItem>
    </div>
  );
};

export default MinMax;
