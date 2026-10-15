/*
 * @lc app=leetcode.cn id=2916 lang=javascript
 *
 * [2916] 子数组不同元素数目的平方和 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    // segment tree over left endpoints l: d(l) = distinct count of nums[l..i]
    const sum = new Array(4 * n).fill(0);   // Σ d(l) (mod MOD)
    const sumsq = new Array(4 * n).fill(0); // Σ d(l)^2 (mod MOD)
    const lazy = new Array(4 * n).fill(0);  // pending add tags

    // apply an add of `a` to the node covering `len` left endpoints
    const apply = (node, len, a) => {
        sumsq[node] = (sumsq[node] + 2 * a * sum[node] + a * a * len) % MOD;
        sum[node] = (sum[node] + a * len) % MOD;
        lazy[node] += a;
    };

    const pushDown = (node, nl, nr) => {
        if (lazy[node]) {
            const mid = (nl + nr) >> 1;
            apply(2 * node, mid - nl + 1, lazy[node]);
            apply(2 * node + 1, nr - mid, lazy[node]);
            lazy[node] = 0;
        }
    };

    function update(node, nl, nr, l, r) {
        if (r < nl || nr < l) return;
        if (l <= nl && nr <= r) {
            apply(node, nr - nl + 1, 1);
            return;
        }
        pushDown(node, nl, nr);
        const mid = (nl + nr) >> 1;
        update(2 * node, nl, mid, l, r);
        update(2 * node + 1, mid + 1, nr, l, r);
        sum[node] = (sum[2 * node] + sum[2 * node + 1]) % MOD;
        sumsq[node] = (sumsq[2 * node] + sumsq[2 * node + 1]) % MOD;
    }

    function querySumsq(node, nl, nr, l, r) {
        if (r < nl || nr < l) return 0;
        if (l <= nl && nr <= r) return sumsq[node];
        pushDown(node, nl, nr);
        const mid = (nl + nr) >> 1;
        return (querySumsq(2 * node, nl, mid, l, r) +
                querySumsq(2 * node + 1, mid + 1, nr, l, r)) % MOD;
    }

    const last = new Array(1e5 + 1).fill(-1); // last[v] = previous index of value v
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const v = nums[i];
        // d(l) += 1 exactly for l in (last[v], i]
        update(1, 0, n - 1, last[v] + 1, i);
        last[v] = i;
        // add Σ_l d(l, i)^2 over all subarrays ending at i
        ans = (ans + querySumsq(1, 0, n - 1, 0, i)) % MOD;
    }
    return ans;
};
// @lc code=end

// TEST:
if (require.main === module) {
  console.log(sumCounts([1, 2, 1]) === 15);   // example 1
  console.log(sumCounts([2, 2]) === 3);       // example 2
  console.log(sumCounts([1]) === 1);          // single element
  console.log(sumCounts([1, 3, 1, 2]) === 38);
  console.log(sumCounts([1, 1, 2, 2]) === 22);
  console.log(sumCounts([1, 1, 1]) === 6);    // all same: 6 subarrays, each distinct count 1 => 6
  console.log(sumCounts([1, 2, 3]) === 20);   // all distinct: 1+1+1+4+4+9 = 20

  // cross-check against brute force on a deterministic pseudo-random array
  const brute = (nums) => {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
      const seen = new Set();
      for (let j = i; j < nums.length; j++) {
        seen.add(nums[j]);
        ans += seen.size * seen.size;
      }
    }
    return ans;
  };
  const rnd = Array.from({ length: 60 }, (_, k) => 1 + ((k * 37 + 11) % 5));
  console.log(sumCounts(rnd) === brute(rnd));
}
