/*
 * @lc app=leetcode.cn id=LCP 46 lang=javascript
 *
 * [LCP 46] 志愿者调配
 */

// @lc code=start
/**
 * @param {number[]} finalCnt
 * @param {number} totalNum
 * @param {number[][]} edges
 * @param {number[][]} plans
 * @return {number[]}
 */
var volunteerDeployment = function(finalCnt, totalNum, edges, plans) {
  const n = finalCnt.length + 1;
  // adjacency
  const adj = Array.from({ length: n }, () => []);
  for (const [x, y] of edges) {
    adj[x].push(y);
    adj[y].push(x);
  }

  // value represented as (p*X + q) / 2^e, stored as [p, q, e]
  const val = new Array(n);
  for (let i = 0; i < n; i++) {
    if (i === 0) val[i] = [1, 0, 0];        // final[0] = X (unknown)
    else val[i] = [0, finalCnt[i - 1], 0];  // known final count
  }

  // reverse arithmetic helpers
  const alignAdd = (A, B, sign) => { // result = A + sign*B
    const [pa, qa, ea] = A;
    const [pb, qb, eb] = B;
    const e = Math.max(ea, eb);
    const p = pa * Math.pow(2, e - ea) + sign * pb * Math.pow(2, e - eb);
    const q = qa * Math.pow(2, e - ea) + sign * qb * Math.pow(2, e - eb);
    return [p, q, e];
  };

  // undo plans in reverse chronological order
  for (let i = plans.length - 1; i >= 0; i--) {
    const [num, idx] = plans[i];
    if (num === 1) {
      // forward halved value[idx]; reverse -> double it: exponent decreases
      val[idx][2] -= 1;
    } else if (num === 2) {
      // forward added value[idx] to neighbors; reverse subtract it
      for (const j of adj[idx]) val[j] = alignAdd(val[j], val[idx], -1);
    } else {
      // forward subtracted value[idx] from neighbors; reverse add it back
      for (const j of adj[idx]) val[j] = alignAdd(val[j], val[idx], 1);
    }
  }

  // Now val[i] = initial count of venue i as (p_i X + q_i)/2^e_i.
  // Sum over i equals totalNum.
  let K = 0;
  for (const [, , e] of val) if (e > K) K = e;
  let A = 0; // sum_i p_i * 2^(K-e_i)
  let B = 0; // sum_i q_i * 2^(K-e_i)
  for (const [p, q, e] of val) {
    const mul = Math.pow(2, K - e);
    A += p * mul;
    B += q * mul;
  }
  // A*X + B = totalNum * 2^K
  const X = (totalNum * Math.pow(2, K) - B) / A;

  const res = new Array(n);
  for (let i = 0; i < n; i++) {
    const [p, q, e] = val[i];
    res[i] = (p * X + q) / Math.pow(2, e);
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(volunteerDeployment([1, 16], 21, [[0, 1], [1, 2]], [[2, 1], [1, 0], [3, 0]]), [5, 7, 9]);
assert.deepStrictEqual(
  volunteerDeployment([4, 13, 4, 3, 8], 54, [[0, 3], [1, 3], [4, 3], [2, 3], [2, 5]], [[1, 1], [3, 3], [2, 5], [1, 0]]),
  [10, 16, 9, 4, 7, 8]
);

console.log('All tests passed!');
console.log('volunteerDeployment([1,16],21,[[0,1],[1,2]],[[2,1],[1,0],[3,0]]) =', JSON.stringify(volunteerDeployment([1, 16], 21, [[0, 1], [1, 2]], [[2, 1], [1, 0], [3, 0]])));
