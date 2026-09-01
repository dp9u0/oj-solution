/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  let sumA = A.reduce((s, a) => s + a, 0);
  let sumB = B.reduce((s, b) => s + b, 0);
  let diff = (sumA - sumB) / 2;
  let set = new Set(B);
  for (const a of A) {
    let target = a - diff;
    if (set.has(target)) {
      return [a, target];
    }
  }
  // never go here
  return [0, 0];
};