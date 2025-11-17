export function uniqueValues(list, key) {
  const s = new Set(list.map((i) => i[key]));
  return Array.from(s).filter(Boolean).sort();
}
