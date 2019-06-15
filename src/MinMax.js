import React, { useState } from "react";
import { Button, List as div, ListSubheader } from "@material-ui/core";
import Slider from "@material-ui/lab/Slider";

function valuetext(value) {
  return `${value}°C`;
}

function realValue(value) {
  return Math.pow(10, value);
}
function fraReal(value) {
  return Math.log10(value);
}

function pretty(v, enhet) {
  const prefixes = [enhet, "daa", "k" + enhet];
  const l10 = Math.log10(v);
  const index = Math.trunc(l10 / 3);
  const num = v * Math.pow(0.1, 3 * index);
  return num.toFixed(1) + " " + prefixes[index];
}

const marks = [
  {
    value: 2,
    label: "0m²"
  },
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
  },
  {
    value: 8,
    label: "100km²" //"1000m²"
  }
];

const MinMax = ({ onUpdate, min, max, enhet }) => {
  const [fra, setFra] = useState(min);
  const [til, setTil] = useState(max);
  return (
    <div>
      {pretty(fra, enhet)} - {pretty(til, enhet)}
      <ListSubheader>Fra</ListSubheader>
      <Slider
        defaultValue={min}
        min={Math.log10(min || 1)}
        max={Math.log10(max)}
        getAriaValueText={valuetext}
        valueLabelFormat={realValue}
        aria-labelledby="discrete-slider-always"
        step={0.01}
        marks={marks}
        value={fraReal(fra)}
        _valueLabelDisplay="on"
        onChange={(e, v) => {
          const nyFra = realValue(v);
          setFra(nyFra);
          if (nyFra > til) setTil(nyFra);
        }}
      />
      <ListSubheader>Til</ListSubheader>
      <Slider
        defaultValue={max}
        min={Math.log10(min || 1)}
        max={Math.log10(max)}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={0.01}
        marks={marks}
        value={fraReal(til)}
        _valueLabelDisplay="on"
        onChange={(e, v) => {
          const nyTil = realValue(v);
          setTil(nyTil);
          if (fra > nyTil) setFra(nyTil);
        }}
      />
      <Button variant="contained" color="primary">
        OK
      </Button>
    </div>
  );
};

export default MinMax;
