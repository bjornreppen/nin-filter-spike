import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button
} from "@material-ui/core";
import { Slider } from "@material-ui/lab";
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

const MinMax = ({ onSelect, onSelectVariable, fra, til, min, max, enhet }) => {
  return (
    <Dialog open="true" fullWidth={true} onClose={() => onSelectVariable(null)}>
      <DialogTitle id="form-dialog-title">Areal</DialogTitle>
      <DialogContent>
        <DialogContentText>Større enn {pretty(fra, enhet)}</DialogContentText>
        <Slider
          defaultValue={min}
          min={Math.log10(min || 1)}
          max={Math.log10(max)}
          valueLabelFormat={realValue}
          aria-labelledby="discrete-slider-always"
          step={0.01}
          marks={marks}
          value={fraReal(fra)}
          onChange={(e, v) => {
            const nyFra = realValue(v);
            onSelect([nyFra, nyFra < til ? til : nyFra]);
          }}
        />
        <DialogContentText>Mindre enn {pretty(til, enhet)}</DialogContentText>
        <Slider
          defaultValue={max}
          min={Math.log10(min || 1)}
          max={Math.log10(max)}
          aria-labelledby="discrete-slider-always"
          step={0.01}
          marks={marks}
          value={fraReal(til)}
          onChange={(e, v) => {
            const nyTil = realValue(v);
            onSelect([nyTil > fra ? fra : nyTil, nyTil]);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onSelectVariable(null)} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MinMax;
