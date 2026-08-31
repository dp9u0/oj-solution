/*
 * @lc app=leetcode id=4037 lang=javascript
 *
 * [4037] Maximum Valid Split Positions II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValidSplits = function (nums) {
  const n = nums.length;
  const P = new Array(n); // P[i] = gcd(nums[0..i])
  const S = new Array(n); // S[i] = gcd(nums[i..n-1])
  P[0] = nums[0];
  for (let i = 1; i < n; i++) P[i] = gcd(P[i - 1], nums[i]);
  S[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) S[i] = gcd(S[i + 1], nums[i]);

  // run end of each maximal equal block (P is non-increasing, S is non-decreasing)
  const pRunEnd = new Array(n);
  pRunEnd[n - 1] = n - 1;
  for (let i = n - 2; i >= 0; i--) pRunEnd[i] = P[i + 1] === P[i] ? pRunEnd[i + 1] : i;
  const sRunEnd = new Array(n);
  sRunEnd[n - 1] = n - 1;
  for (let i = n - 2; i >= 0; i--) sRunEnd[i] = S[i + 1] === S[i] ? sRunEnd[i + 1] : i;

  const ans = new Array(n).fill(0);

  // Pass A (removal j): cuts strictly right of the removal, t in [j+2, n-1]
  // condition: gcd(P[j-1], gcd(nums[j+1..t-1])) == S[t]
  // curStart = runs of gcd(nums[s..e]) over e, stored as [value, startE] with s = j+1
  let curStart = [[nums[n - 1], n - 1]];
  for (let j = n - 2; j >= 0; j--) {
    const c = j === 0 ? 0 : P[j - 1];
    // left values over e = t-1 in [j+1, n-2]
    const L = [];
    for (let k = 0; k < curStart.length; k++) {
      const st = curStart[k][1];
      const en = k + 1 < curStart.length ? curStart[k + 1][1] - 1 : n - 1;
      const lo = st > j + 1 ? st : j + 1;
      const hi = en < n - 2 ? en : n - 2;
      if (lo <= hi) L.push([lo, hi, gcd(c, curStart[k][0])]);
    }
    // right values S[e+1] over e in [j+1, n-2]
    const R = [];
    for (let x = j + 2; x <= n - 1; x = sRunEnd[x] + 1) {
      R.push([x - 1, sRunEnd[x] - 1, S[x]]);
    }
    ans[j] += sweep(L, R);
    // middle cut (falls between nums[j-1] and nums[j+1] after removal)
    if (j >= 1 && P[j - 1] === S[j + 1]) ans[j] += 1;
    // extend to startList_j for the next (smaller) j
    const nxt = [[nums[j], j]];
    for (let k = 0; k < curStart.length; k++) {
      const v = gcd(nums[j], curStart[k][0]);
      if (v !== nxt[nxt.length - 1][0]) nxt.push([v, curStart[k][1]]);
    }
    curStart = nxt;
  }

  // Pass B (removal j): cuts strictly left of the removal, t in [1, j-1]
  // condition: P[t-1] == gcd(gcd(nums[t..j-1]), S[j+1])
  // curEnd = runs of gcd(nums[b..e]) over b, stored as [value, endB] with e = j-1
  let curEnd = [[nums[0], 0]];
  for (let j = 1; j <= n - 1; j++) {
    const c = j + 1 <= n - 1 ? S[j + 1] : 0;
    // right values over b = t in [1, j-1]
    // curEnd entry k covers b in [next entry's hi + 1, own hi]; last reaches 0
    const R = [];
    for (let k = 0; k < curEnd.length; k++) {
      const hi = curEnd[k][1];
      const lo = k + 1 < curEnd.length ? curEnd[k + 1][1] + 1 : 0;
      const clo = lo > 1 ? lo : 1;
      const chi = hi < j - 1 ? hi : j - 1;
      if (clo <= chi) R.push([clo, chi, gcd(c, curEnd[k][0])]);
    }
    // left values P[b-1] over b in [1, j-1]
    const L = [];
    for (let i = 0; i <= j - 2; i = pRunEnd[i] + 1) {
      const en = Math.min(pRunEnd[i], j - 2);
      L.push([i + 1, en + 1, P[i]]);
    }
    ans[j] += sweep(L, R);
    // extend to endList_j for the next (larger) j
    const nxt = [[nums[j], j]];
    for (let k = 0; k < curEnd.length; k++) {
      const v = gcd(nums[j], curEnd[k][0]);
      if (v !== nxt[nxt.length - 1][0]) nxt.push([v, curEnd[k][1]]);
    }
    curEnd = nxt;
  }

  // no removal
  let best = 0;
  for (let t = 1; t <= n - 1; t++) if (P[t - 1] === S[t]) best++;
  for (let j = 0; j < n; j++) if (ans[j] > best) best = ans[j];
  return best;
};

// count total overlap length where values of two run-partitions match
function sweep(A, B) {
  let cnt = 0;
  let pa = 0;
  let pb = 0;
  while (pa < A.length && pb < B.length) {
    const a = A[pa];
    const b = B[pb];
    const lo = a[0] > b[0] ? a[0] : b[0];
    const hi = a[1] < b[1] ? a[1] : b[1];
    if (lo <= hi && a[2] === b[2]) cnt += hi - lo + 1;
    if (a[1] < b[1]) pa++;
    else pb++;
  }
  return cnt;
}

function gcd(a, b) {
  while (b !== 0) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}
// @lc code=end

// TEST:
function bruteForce(nums) {
  const gcdAll = (a, l, r) => {
    let g = 0;
    for (let i = l; i <= r; i++) g = gcd(g, a[i]);
    return g;
  };
  const score = (a) => {
    let c = 0;
    for (let i = 0; i < a.length - 1; i++) {
      if (gcdAll(a, 0, i) === gcdAll(a, i + 1, a.length - 1)) c++;
    }
    return c;
  };
  let best = score(nums);
  for (let j = 0; j < nums.length; j++) {
    best = Math.max(best, score(nums.filter((_, idx) => idx !== j)));
  }
  return best;
}

console.log(maxValidSplits([10, 30, 15, 10]) === 2); // -> true (remove 15)
console.log(maxValidSplits([2, 10, 14]) === 1); // -> true (no removal)
console.log(maxValidSplits([2, 4]) === 0); // -> true
console.log(maxValidSplits([6, 6, 6]) === 2); // -> true (no removal, all splits valid)
console.log(maxValidSplits([12, 4, 6, 2]) === 1); // -> true (no removal or remove 0)
console.log(maxValidSplits([1, 1]) === 1); // -> true
console.log(maxValidSplits([4, 6]) === 0); // -> true

// randomized check against brute force
let allOk = true;
for (let round = 0; round < 300; round++) {
  const len = 2 + Math.floor(Math.random() * 9);
  const nums = Array.from({ length: len }, () => 1 + Math.floor(Math.random() * 60));
  const got = maxValidSplits(nums);
  const want = bruteForce(nums);
  if (got !== want) {
    allOk = false;
    console.log(`MISMATCH nums=[${nums}] got=${got} want=${want}`);
  }
}
console.log(allOk ? 'random checks passed' : 'random checks FAILED');

module.exports = maxValidSplits;
