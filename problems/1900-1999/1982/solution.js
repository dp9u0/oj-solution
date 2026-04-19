/*
 * @lc app=leetcode id=1982 lang=javascript
 *
 * [1982] Find Array Given Subset Sums
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} sums
 * @return {number[]}
 */
var recoverArray = function(n, sums) {
  const solve = (arr) => {
    if (arr.length === 1) {
      // n=0, only subset sum should be 0
      return arr[0] === 0 ? [] : null;
    }

    arr.sort((a, b) => a - b);

    if (arr[0] === arr[arr.length - 1]) {
      return [...solve(arr.slice(0, arr.length / 2)), 0];
    }

    const d = arr[1] - arr[0];

    for (const element of [d, -d]) {
      const result = trySplit(arr, element);
      if (result !== null) return result;
    }

    return null;
  };

  const trySplit = (arr, element) => {
    const sorted = [...arr].sort((a, b) => a - b);
    const count = new Map();
    for (const x of sorted) count.set(x, (count.get(x) || 0) + 1);

    const s0 = [];
    const keys = element > 0 ? sorted : [...sorted].reverse();

    for (const x of keys) {
      const cnt = count.get(x) || 0;
      if (cnt === 0) continue;
      count.set(x, cnt - 1);
      const paired = x + element;
      const pairedCnt = count.get(paired) || 0;
      if (pairedCnt === 0) return null;
      count.set(paired, pairedCnt - 1);
      s0.push(x);
    }

    if (s0.length !== arr.length / 2) return null;

    const rest = solve(s0);
    if (rest === null) return null;
    return [...rest, element];
  };

  return solve(sums);
};
// @lc code=end

// TEST:
const verify = (ans, sums) => {
  if (ans === null) return false;
  const n = ans.length;
  const allSums = [];
  for (let mask = 0; mask < (1 << n); mask++) {
    let s = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) s += ans[i];
    }
    allSums.push(s);
  }
  allSums.sort((a, b) => a - b);
  const sortedSums = [...sums].sort((a, b) => a - b);
  return JSON.stringify(allSums) === JSON.stringify(sortedSums);
};

console.log(verify(recoverArray(3, [-3,-2,-1,0,0,1,2,3]), [-3,-2,-1,0,0,1,2,3]));
console.log(verify(recoverArray(2, [0,0,0,0]), [0,0,0,0]));
console.log(verify(recoverArray(4, [0,0,5,5,4,-1,4,9,9,-1,4,3,4,8,3,8]), [0,0,5,5,4,-1,4,9,9,-1,4,3,4,8,3,8]));
console.log(verify(recoverArray(1, [0, 3]), [0, 3]));
console.log(verify(recoverArray(1, [-1, 0]), [-1, 0]));
