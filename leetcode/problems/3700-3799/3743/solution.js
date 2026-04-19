/*
 * @lc app=leetcode id=3743 lang=javascript
 *
 * [3743] Maximize Cyclic Partition Score
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    const n = nums.length;
    let minVal = Infinity, minIdx = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] < minVal) { minVal = nums[i]; minIdx = i; }
    }

    const rotate = (startIdx) => {
        const arr = [];
        for (let i = 0; i < n; i++) arr.push(nums[(startIdx + i) % n]);
        return arr;
    };

    const solve = (arr) => {
        const K = Math.min(k, Math.floor(n / 2) + 1);
        const INF = -1e18;
        // dp_0[g] = max score having completed g groups, currently idle
        // dp_1F[g] = holding a min (need max to complete group g+1)
        // dp_1R[g] = holding a max (need min to complete group g+1)
        let dp0 = new Float64Array(K + 1);
        let dp1F = new Float64Array(K + 1);
        let dp1R = new Float64Array(K + 1);
        for (let g = 1; g <= K; g++) { dp0[g] = INF; dp1F[g] = INF; dp1R[g] = INF; }
        dp1F[0] = INF; dp1R[0] = INF;

        for (let i = 0; i < n; i++) {
            const v = arr[i];
            const newDp0 = new Float64Array(dp0);
            const newDp1F = new Float64Array(dp1F);
            const newDp1R = new Float64Array(dp1R);

            // Step 1: Start or update holding (from idle state)
            for (let g = 0; g <= K; g++) {
                if (dp0[g] === INF) continue;
                newDp1F[g] = Math.max(newDp1F[g], dp0[g] - v);
                newDp1R[g] = Math.max(newDp1R[g], dp0[g] + v);
            }

            // Step 2: Complete groups (from holding states)
            for (let g = 0; g < K; g++) {
                if (newDp1F[g] !== INF) newDp0[g + 1] = Math.max(newDp0[g + 1], newDp1F[g] + v);
                if (newDp1R[g] !== INF) newDp0[g + 1] = Math.max(newDp0[g + 1], newDp1R[g] - v);
            }

            dp0 = newDp0;
            dp1F = newDp1F;
            dp1R = newDp1R;
        }

        let best = 0;
        for (let g = 0; g <= K; g++) best = Math.max(best, dp0[g]);
        return best;
    };

    return Math.max(solve(rotate(minIdx)), solve(rotate((minIdx + 1) % n)));
};
// @lc code=end

// TEST:
console.log(maximumScore([1,2,3,3], 2)); // 3
console.log(maximumScore([1,2,3,3], 1)); // 2
console.log(maximumScore([1,2,3,3], 4)); // 3
console.log(maximumScore([1,3,4], 2)); // 3
