/*
 * @lc app=leetcode id=3343 lang=javascript
 *
 * [3343] Count Number of Balanced Permutations
 */

// @lc code=start
/**
 * @param {string} num
 * @return {number}
 */
var countBalancedPermutations = function(num) {
  const MOD = 1e9 + 7;
  const n = num.length;
  const cnt = new Array(10).fill(0);
  let total = 0;
  for (const ch of num) {
    const d = parseInt(ch);
    cnt[d]++;
    total += d;
  }

  if (total % 2 !== 0) return 0;

  const evenCnt = Math.ceil(n / 2);
  const oddCnt = Math.floor(n / 2);
  const halfSum = total / 2;

  // Precompute factorials
  const maxN = n + 1;
  const fact = new Array(maxN).fill(1n);
  const invFact = new Array(maxN).fill(1n);
  const MODB = BigInt(MOD);
  for (let i = 1; i < maxN; i++) fact[i] = fact[i - 1] * BigInt(i) % MODB;
  invFact[maxN - 1] = modPow(fact[maxN - 1], BigInt(MOD) - 2n, MODB);
  for (let i = maxN - 2; i >= 0; i--) invFact[i] = invFact[i + 1] * BigInt(i + 1) % MODB;

  const comb = (n, r) => {
    if (r < 0 || r > n) return 0n;
    return fact[n] * invFact[r] % MODB * invFact[n - r] % MODB;
  };

  // dp[evenCount][evenSum] = number of ways (as BigInt)
  // Initialize
  let dp = Array.from({ length: evenCnt + 1 }, () => new Array(halfSum + 1).fill(0n));
  dp[0][0] = 1n;

  let usedEven = 0;
  let usedOdd = 0;

  for (let d = 0; d <= 9; d++) {
    if (cnt[d] === 0) continue;
    const next = Array.from({ length: evenCnt + 1 }, () => new Array(halfSum + 1).fill(0n));

    for (let ec = 0; ec <= usedEven; ec++) {
      for (let es = 0; es <= halfSum; es++) {
        if (dp[ec][es] === 0n) continue;
        const oc = (usedEven + usedOdd) - ec; // wait, need to track usedOdd too
        // Actually, after processing digits 0..d-1, total placed = usedEven + usedOdd + ...
        // Let me track differently
      }
    }

    // Restart with cleaner approach
    // After processing digits 0..d, dp[ec][es] = ways
    // usedEven and usedOdd are cumulative
    const nextDp = Array.from({ length: evenCnt + 1 }, () => new Array(halfSum + 1).fill(0n));

    for (let ec = 0; ec <= evenCnt; ec++) {
      for (let es = 0; es <= halfSum; es++) {
        if (dp[ec][es] === 0n) continue;
        const oc = (cnt.slice(0, d).reduce((a, b) => a + b, 0)) - ec;
        // placed in even: ec, placed in odd: total_placed - ec
        const totalPlaced = cnt.slice(0, d).reduce((a, b) => a + b, 0);
        const ocActual = totalPlaced - ec;

        // Place cnt[d] copies of digit d
        for (let j = 0; j <= cnt[d]; j++) {
          const newEc = ec + j;
          const newEs = es + j * d;
          const newOc = ocActual + (cnt[d] - j);
          if (newEc > evenCnt || newEs > halfSum) continue;
          if (newOc > oddCnt) continue;

          const c = comb(evenCnt - ec, j) * comb(oddCnt - ocActual, cnt[d] - j) % MODB;
          nextDp[newEc][newEs] = (nextDp[newEc][newEs] + dp[ec][es] * c % MODB) % MODB;
        }
      }
    }

    dp = nextDp;
  }

  return Number(dp[evenCnt][halfSum]);
};

function modPow(base, exp, mod) {
  let result = 1n;
  while (exp > 0n) {
    if (exp & 1n) result = result * base % mod;
    base = base * base % mod;
    exp >>= 1n;
  }
  return result;
}
// @lc code=end

// TEST:
console.log(countBalancedPermutations('123') === 2);
console.log(countBalancedPermutations('112') === 1);
console.log(countBalancedPermutations('12345') === 0);
console.log(countBalancedPermutations('00') === 1);
console.log(countBalancedPermutations('11') === 1);
