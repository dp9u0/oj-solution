/*
 * @lc app=leetcode id=1900 lang=javascript
 *
 * [1900] The Earliest and Latest Rounds Where Players Compete
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
var earliestAndLatest = function(n, firstPlayer, secondPlayer) {
  const memo = new Map();

  const solve = (n, a, b) => {
    if (a > b) [a, b] = [b, a];
    const key = (n << 8) | (a << 4) | b;
    if (memo.has(key)) return memo.get(key);

    if (a + b === n + 1) {
      const r = [1, 1];
      memo.set(key, r);
      return r;
    }

    const halfN = Math.floor(n / 2);
    const mid = n % 2 === 1 ? halfN + 1 : -1;
    const midFree = mid !== -1 && mid !== a && mid !== b;

    const freePairs = [];
    for (let i = 1; i <= halfN; i++) {
      const j = n + 1 - i;
      if (i === a || j === a || i === b || j === b) continue;
      freePairs.push([i, j]);
    }

    const numFree = freePairs.length;
    const newN = 2 + numFree + (midFree ? 1 : 0);
    let minR = 99, maxR = 0;

    for (let mask = 0; mask < (1 << numFree); mask++) {
      let bA = 0, bB = 0;
      if (midFree) {
        if (mid < a) bA++;
        if (mid < b) bB++;
      }
      for (let k = 0; k < numFree; k++) {
        const w = (mask >> k) & 1 ? freePairs[k][1] : freePairs[k][0];
        if (w < a) bA++;
        if (w < b) bB++;
      }
      const nA = bA + 1;
      const nB = bB + 2;
      const sub = solve(newN, nA, nB);
      minR = Math.min(minR, 1 + sub[0]);
      maxR = Math.max(maxR, 1 + sub[1]);
    }

    const r = [minR, maxR];
    memo.set(key, r);
    return r;
  };

  return solve(n, firstPlayer, secondPlayer);
};
// @lc code=end

// TEST:
const deepEq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(deepEq(earliestAndLatest(11, 2, 4), [3, 4]));
console.log(deepEq(earliestAndLatest(5, 1, 5), [1, 1]));
console.log(deepEq(earliestAndLatest(3, 1, 2), [2, 2]));
console.log(deepEq(earliestAndLatest(4, 1, 2), [2, 2]));
console.log(deepEq(earliestAndLatest(28, 1, 28), [1, 1]));
