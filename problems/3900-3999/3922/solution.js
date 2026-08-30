/*
 * @lc app=leetcode id=3922 lang=javascript
 *
 * [3922] Minimum Operations to Make String Coherent
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
  const P1 = '011';
  const P2 = '110';
  // state: (i, j) = matched subsequence-prefix lengths of P1 and P2 (3 = dead)
  let dp = Array.from({ length: 4 }, () => Array(4).fill(Infinity));
  dp[0][0] = 0;
  for (const ch of s) {
    const ndp = Array.from({ length: 4 }, () => Array(4).fill(Infinity));
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const cur = dp[i][j];
        if (cur === Infinity) continue;
        for (const c of ['0', '1']) {
          if (i === 3 || j === 3) continue;
          const ni = P1[i] === c ? i + 1 : i;
          const nj = P2[j] === c ? j + 1 : j;
          if (ni === 3 || nj === 3) continue;
          const cost = cur + (c === ch ? 0 : 1);
          if (cost < ndp[ni][nj]) ndp[ni][nj] = cost;
        }
      }
    }
    dp = ndp;
  }
  let ans = Infinity;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (dp[i][j] < ans) ans = dp[i][j];
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(minFlips('1010') === 1);
console.log(minFlips('0110') === 1);
console.log(minFlips('1000') === 0);
console.log(minFlips('0111') === 1);
console.log(minFlips('1100') === 1);
console.log(minFlips('0') === 0);
console.log(minFlips('111000') === 2);

// brute: all flip subsets for small strings
function brute(s) {
  const n = s.length;
  const has = (t) => {
    // check subsequence 011 / 110
    const seq = (p) => {
      let k = 0;
      for (const c of t) if (c === p[k]) { k++; if (k === p.length) return true; }
      return false;
    };
    return seq('011') || seq('110');
  };
  let best = Infinity;
  for (let mask = 0; mask < (1 << n); mask++) {
    let t = '';
    let flips = 0;
    for (let i = 0; i < n; i++) {
      const bit = (mask >> i) & 1;
      if (bit !== (s[i] === '1' ? 1 : 0)) flips++;
      t += bit ? '1' : '0';
    }
    if (!has(t) && flips < best) best = flips;
  }
  return best;
}
let seed = 11;
let ok = true;
for (let t = 0; t < 500; t++) {
  const str = Array.from({ length: 1 + t % 10 }, () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 2) ? '1' : '0').join('');
  const a = minFlips(str);
  const b = brute(str);
  if (a !== b) { ok = false; console.log('MISMATCH', str, a, b); break; }
}
console.log(ok);
