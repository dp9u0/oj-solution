/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let f = [1];
  for (let i = 1; i < rowIndex + 1; i++) {
    for (let j = i; j >= 1; j--) {
      f[j] = (f[j] || 0) + (f[j - 1] || 0);
    }
  }
  return f;
};

/**
// TEST:

console.log(getRow(5));
*/