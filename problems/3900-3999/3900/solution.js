/*
 * @lc app=leetcode id=3900 lang=javascript
 *
 * [3900] Maximum Length of Balanced Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
  const n = s.length;
  const P = new Int32Array(n + 1);
  let ones = 0;
  let zeros = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') ones++;
    else zeros++;
    P[i + 1] = ones - zeros;
  }
  // occurrence lists per prefix value
  const occ = new Map();
  for (let i = 0; i <= n; i++) {
    const v = P[i];
    if (!occ.has(v)) occ.set(v, []);
    occ.get(v).push(i);
  }
  const firstZero = s.indexOf('0');
  const firstOne = s.indexOf('1');
  // suffix counts
  const sufZ = new Int32Array(n + 2);
  const sufO = new Int32Array(n + 2);
  for (let i = n - 1; i >= 0; i--) {
    sufZ[i] = sufZ[i + 1] + (s[i] === '0' ? 1 : 0);
    sufO[i] = sufO[i + 1] + (s[i] === '1' ? 1 : 0);
  }
  const lowerBound = (arr, x) => {
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  let ans = 0;
  for (let j = 0; j <= n; j++) {
    // diff 0
    const list0 = occ.get(P[j]);
    if (list0 && list0[0] < j) {
      ans = Math.max(ans, j - list0[0]);
    }
    // diff +2 over (i, j]: P[j] - P[i] = 2 -> substring has two extra 1s, needs a '0' outside
    const list2 = occ.get(P[j] - 2);
    if (list2 && list2[0] < j) {
      if (sufZ[j] > 0) {
        ans = Math.max(ans, j - list2[0]);
      } else if (firstZero !== -1) {
        const idx = lowerBound(list2, firstZero + 1);
        if (idx < list2.length && list2[idx] < j) {
          ans = Math.max(ans, j - list2[idx]);
        }
      }
    }
    // diff -2: two extra 0s, needs a '1' outside
    const listM2 = occ.get(P[j] + 2);
    if (listM2 && listM2[0] < j) {
      if (sufO[j] > 0) {
        ans = Math.max(ans, j - listM2[0]);
      } else if (firstOne !== -1) {
        const idx = lowerBound(listM2, firstOne + 1);
        if (idx < listM2.length && listM2[idx] < j) {
          ans = Math.max(ans, j - listM2[idx]);
        }
      }
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(longestBalanced('100001') === 4);
console.log(longestBalanced('111') === 0);
console.log(longestBalanced('1100') === 4);
console.log(longestBalanced('10') === 2);
console.log(longestBalanced('1') === 0);
console.log(longestBalanced('11100') === 4);
console.log(longestBalanced('0011') === 4);

// brute cross-check
function brute(s) {
  const arr = s.split('');
  const n = arr.length;
  const balanced = (a) => {
    let o = 0;
    let z = 0;
    for (const c of a) c === '1' ? o++ : z++;
    return o === z;
  };
  let best = 0;
  for (let x = 0; x < n; x++) {
    for (let y = x + 1; y < n; y++) {
      [arr[x], arr[y]] = [arr[y], arr[x]];
      for (let i = 0; i < n; i++) {
        for (let j = i; j <= n; j++) {
          if (j - i > best && balanced(arr.slice(i, j))) best = j - i;
        }
      }
      [arr[x], arr[y]] = [arr[y], arr[x]];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = i; j <= n; j++) {
      if (j - i > best && balanced(arr.slice(i, j))) best = j - i;
    }
  }
  return best;
}
let seed = 9;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 2;
let ok = true;
for (let t = 0; t < 300; t++) {
  const str = Array.from({ length: 1 + t % 10 }, () => (rnd() ? '1' : '0')).join('');
  const a = longestBalanced(str);
  const b = brute(str);
  if (a !== b) { ok = false; console.log('MISMATCH', str, a, b); break; }
}
console.log(ok);
