export function filterNonNull(obj: any): any {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
}
