export function sanitizeString(property: string): string {
  return property === null || property === ''
    ? null
    : property.replace(/[^\x00-\x7F]/g, '');
}
