function analyzeArray(arr) {
  const obj = arr.length ? {
    average: arr.reduce((a, b) => a + b) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  } : null;
  return obj;
}

module.exports = analyzeArray;
