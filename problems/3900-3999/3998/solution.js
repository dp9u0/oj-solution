/*
 * @lc app=leetcode id=3998 lang=javascript
 *
 * [3998] Transform Binary String Using Subsequence Sort
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} strs
 * @return {boolean[]}
 */
var transformStr = function (s, strs) {
  const n = s.length;
  // pre[i] = number of '1' in s[0..i-1]
  const pre = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    pre[i + 1] = pre[i] + (s[i] === '1' ? 1 : 0);
  }
  const totalOnes = pre[n];

  return strs.map((t) => {
    const qIdx = [];
    let ones = 0;
    for (let i = 0; i < n; i++) {
      if (t[i] === '1') ones++;
      else if (t[i] === '?') qIdx.push(i);
    }
    // exactly k '?' must become '1'
    const k = totalOnes - ones;
    if (k < 0 || k > qIdx.length) return false;

    // assign '1' to the rightmost k '?' positions to minimize prefix ones
    const asOne = new Uint8Array(n);
    for (let j = qIdx.length - k; j < qIdx.length; j++) asOne[qIdx[j]] = 1;

    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (t[i] === '1' || asOne[i]) cnt++;
      if (cnt > pre[i + 1]) return false;
    }
    return true;
  });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(transformStr('101', ['1?1', '0?1', '0?0'])) === JSON.stringify([true, true, false]));
console.log(JSON.stringify(transformStr('1100', ['0011', '11?1', '1?1?'])) === JSON.stringify([true, false, true]));
console.log(JSON.stringify(transformStr('1010', ['0011'])) === JSON.stringify([true]));
console.log(JSON.stringify(transformStr('0', ['?', '0', '1'])) === JSON.stringify([true, true, false]));
console.log(JSON.stringify(transformStr('1001', ['0110', '0???', '?0??', '1??0'])) === JSON.stringify([false, true, true, false]));
