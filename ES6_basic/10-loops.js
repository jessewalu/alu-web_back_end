export default function appendToEachArrayValue(array, appendString) {
  const result = array;

  for (const [idx, value] of result.entries()) {
    result[idx] = appendString + value;
  }

  return result;
}
