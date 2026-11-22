/*
 * @lc app=leetcode.cn id=2505 lang=javascript
 *
 * [2505] 所有子序列和的按位或
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequenceSumOr = function(nums) {
    const n = nums.length;
    const P = new Float64Array(n + 1);
    let orNums = 0, T = 0;
    for (let i = 0; i < n; i++) {
        P[i + 1] = P[i] + nums[i];
        orNums |= nums[i];
        T += nums[i];
    }
    let ans = BigInt(orNums) | BigInt(T);
    const maxB = T > 0 ? Math.floor(Math.log2(T)) : -1;
    for (let b = 0; b < maxB; b++) {
        if ((ans >> BigInt(b)) & 1n) continue;
        const M = 2 ** (b + 1);
        const half = M / 2;
        // cheap check: max subarray sum <= M-1 that reaches M/2
        let cur = 0, mx = 0;
        for (const v of nums) {
            cur = cur + v <= M - 1 ? cur + v : (v <= M - 1 ? v : 0);
            if (cur > mx) mx = cur;
        }
        let found = mx >= half;
        if (!found && M <= 2 * T) {
            // expensive: exists i<j with (P[j]-P[i]) mod M in [M/2, M)
            const res = new Float64Array(n + 1);
            for (let i = 0; i <= n; i++) res[i] = P[i] % M;
            const sortedRes = Array.from(res).sort((a, b) => a - b);
            const bit = new Int32Array(n + 3);
            const bisectLeft = (r) => {
                let lo = 0, hi = n + 1;
                while (lo < hi) { const mid = (lo + hi) >> 1; if (sortedRes[mid] < r) lo = mid + 1; else hi = mid; }
                return lo;
            };
            const bisectRight = (r) => {
                let lo = 0, hi = n + 1;
                while (lo < hi) { const mid = (lo + hi) >> 1; if (sortedRes[mid] <= r) lo = mid + 1; else hi = mid; }
                return lo;
            };
            const add = (pos) => { for (pos = pos + 1; pos <= n + 2; pos += pos & (-pos)) bit[pos]++; };
            const q = (pos) => { let s = 0; for (pos = Math.min(pos, n + 2); pos > 0; pos -= pos & (-pos)) s += bit[pos]; return s; };
            add(bisectLeft(res[0]));
            for (let j = 1; j <= n && !found; j++) {
                const pj = res[j];
                const loM = ((pj - M + 1) % M + M) % M;
                const hiM = (loM + half - 1) % M;
                let c;
                if (loM <= hiM) {
                    c = q(bisectRight(hiM)) - q(bisectLeft(loM));
                } else {
                    c = (q(n + 2) - q(bisectLeft(loM))) + q(bisectRight(hiM));
                }
                if (c > 0) found = true;
                else add(bisectLeft(res[j]));
            }
        }
        if (found) ans |= 1n << BigInt(b);
    }
    return Number(ans);
};
// @lc code=end

// TEST:
console.log(subsequenceSumOr([2,1,0,3])); // 7
console.log(subsequenceSumOr([0,0,0])); // 0
console.log(subsequenceSumOr([1])); // 1
console.log(subsequenceSumOr([4,4,4])); // 12 (sums: 4,8,12 -> 4|8|12=12)
console.log(subsequenceSumOr([1000000000,1000000000])); // 2143280640 (1e9 OR 2e9)
