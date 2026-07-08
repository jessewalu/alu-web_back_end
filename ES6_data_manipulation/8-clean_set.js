export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const result = [];
  set.forEach((value) => {
    const strValue = String(value);
    if (strValue.startsWith(startString)) {
      result.push(strValue.slice(startString.length));
    }
  });

  return result.join('-');
}
