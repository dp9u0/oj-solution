/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let [k, l, after] = [1, 0, n];
  while (l < n) {
    after = n - l;
    l += 9 * Math.pow(10, k - 1) * k;
    k++;
  }
  let begin = Math.pow(10, k - 2);
  let num = begin + Math.ceil(after / (k - 1)) - 1;
  let nth = after % (k - 1);
  if (nth === 0) nth = k - 1;
  let re = [...(num + '')][nth - 1];
  return re - 0;
};