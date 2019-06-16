function pretty(v, enhet) {
  if (v >= 100000000) return "∞";
  if (v <= 100) return "0";
  const prefixes = [enhet, "daa", "k" + enhet];
  const l10 = Math.log10(v);
  const index = Math.trunc(l10 / 3);
  const num = v * Math.pow(0.1, 3 * index);
  return num.toFixed(1) + " " + prefixes[index];
}

function rangeTilTekst(fra, til, enhet) {
  if (fra <= 100) return "< " + pretty(til, enhet);
  if (til >= 100000000) return "> " + pretty(fra, enhet);
  return pretty(fra, enhet) + " - " + pretty(til, enhet);
}

export { pretty, rangeTilTekst };
