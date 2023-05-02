export function parseToInt(property: any) {
  return (property === null || property === '') ? null : parseInt(property);
}

export function parseToDouble(property: any) {
  return (property === null || property === '') ? null : parseFloat(property);
}