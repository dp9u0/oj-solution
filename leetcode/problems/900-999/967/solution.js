/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function (N, K) {
  let set = new Set();
  if (N === 1) {
    set.add(0);
  }
  const bt = (current, num, n) => {
    if (n === N) {
      let number = Number(current);
      if (number !== 0) {
        set.add(number);
      }
      return;
    }
    if (num >= 0 && num < 10) {
      bt(current + num, num + K, n + 1);
      bt(current + num, num - K, n + 1);
    }
  }
  for (let num = 1; num < 10; num++) {
    bt("" + num, num + K, 1);
    bt("" + num, num - K, 1);
  }
  return Array.from(set);
};

/**
// TEST:
console.log(numsSameConsecDiff(1, 0));
console.log(numsSameConsecDiff(1, 1));
console.log(numsSameConsecDiff(2, 0));
console.log(numsSameConsecDiff(3, 0));
console.log(numsSameConsecDiff(4, 0));
console.log(numsSameConsecDiff(2, 2));
console.log(numsSameConsecDiff(3, 1));
console.log(numsSameConsecDiff(3, 7));
*/