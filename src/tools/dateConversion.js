export function dateTimeConversion(minutes) {
  let hr, min;
  if (minutes < 60) return `${minutes}m`;
  else {
    hr = Math.trunc(minutes / 60);
    min = minutes % 60;

    if (min === 0) return `${hr}h`;

    return `${hr}h ${min}m`;
  }
}
