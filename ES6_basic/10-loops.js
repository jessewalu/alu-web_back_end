export default function appendToEachArrayValue(array, appendString) {
  const result = array;
  let i = 0;
  for (const value of array) {
    result[i] = appendString + value;
    i += 1;
  }
  return result;
}
