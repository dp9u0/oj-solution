/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  let length = A.length;
  for (let row of A) {
    for (let i = 0; i * 2 < length; i++) {
      // 只需要考虑 1 1 或者 0 0 
      // 1 0 or 0 1 reverse 后 flip 其实就相当于没交换...
      if (row[i] === row[length - i - 1]) {
        row[i] = row[length - i - 1] ^= 1;
      }
    }
  }
  return A;
};