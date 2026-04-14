/*
 * @lc app=leetcode id=3700 lang=javascript
 *
 * [3700] Number of ZigZag Arrays II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function(n, l, r) {
  const MOD = BigInt(1e9 + 7);
  const m = r - l + 1;
  // State: (val_index, dir), dir: 0=up (prev < current), 1=down (prev > current)
  // Total states: m * 2

  // Build transition matrix
  // From state (v, dir) to state (nv, ndir):
  //   if nv > v: ndir=0 (up), allowed if dir != 0
  //   if nv < v: ndir=1 (down), allowed if dir != 1
  const S = m * 2;
  let mat = Array.from({ length: S }, () => new BigInt64Array(S));

  // transitions: for each (v, dir) -> (nv, ndir)
  for (let v = 0; v < m; v++) {
    for (let dir = 0; dir <= 1; dir++) {
      const from = v * 2 + dir;
      for (let nv = 0; nv < m; nv++) {
        if (nv === v) continue; // adjacent elements must differ
        if (nv > v) {
          // new direction is up (0), allowed if dir != 0
          if (dir !== 0) {
            mat[nv * 2 + 0][from] = 1n;
          }
        } else {
          // new direction is down (1), allowed if dir != 1
          if (dir !== 1) {
            mat[nv * 2 + 1][from] = 1n;
          }
        }
      }
    }
  }

  // Initial vector: first element can be any value, dir is arbitrary (both valid)
  // For position 1, we have m choices. dir doesn't matter yet - we set both dirs to 1
  let vec = new BigInt64Array(S);
  for (let v = 0; v < m; v++) {
    vec[v * 2 + 0] = 1n;
    vec[v * 2 + 1] = 1n;
  }

  // We need n-1 transitions (from position 2 to n)
  const steps = n - 1;

  // Matrix-vector multiplication with matrix exponentiation
  // Instead of full matrix exponentiation, we do vector * matrix^(n-1)
  // But actually we need mat^(n-1) * vec, which is equivalent to applying mat (n-1) times

  // Let's do mat^steps via binary exponentiation, then multiply vec
  let result = matIdentity(S);
  let base = mat;

  let p = steps;
  while (p > 0) {
    if (p & 1) result = matMul(result, base, S);
    base = matMul(base, base, S);
    p >>= 1;
  }

  // Multiply result * vec
  let ans = 0n;
  for (let i = 0; i < S; i++) {
    let sum = 0n;
    for (let j = 0; j < S; j++) {
      sum = (sum + result[i][j] * vec[j]) % MOD;
    }
    ans = (ans + sum) % MOD;
  }

  return Number(ans);
};

function matIdentity(n) {
  const m = Array.from({ length: n }, () => new BigInt64Array(n));
  for (let i = 0; i < n; i++) m[i][i] = 1n;
  return m;
}

function matMul(a, b, n) {
  const MOD = BigInt(1e9 + 7);
  const c = Array.from({ length: n }, () => new BigInt64Array(n));
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      if (a[i][k] === 0n) continue;
      for (let j = 0; j < n; j++) {
        c[i][j] = (c[i][j] + a[i][k] * b[k][j]) % MOD;
      }
    }
  }
  return c;
}
// @lc code=end

// TEST:
console.log(zigZagArrays(3, 4, 5)); // 2
console.log(zigZagArrays(3, 1, 3)); // 10
