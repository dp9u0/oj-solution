/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let f = [1];
  for (let i = 1; i < rowIndex + 1; i++) {
    f[i] = 1;
    for (let j = i - 1; j >= 1; j--) {
      f[j] += f[j - 1];
    }
  }
  return f;
};

/**
/**
// TEST:

console.log(getRow(5));
*/
*/