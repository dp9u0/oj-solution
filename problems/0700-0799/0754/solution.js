/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  target = Math.abs(target);
  let n = Math.ceil((Math.sqrt(1 + 8 * target) - 1) / 2);
  let sum = (n + 1) * n / 2;
  while ((sum - target) % 2) {
    sum += ++n;
  }
  return n;
};