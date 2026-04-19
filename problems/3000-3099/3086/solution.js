/*
 * @lc app=leetcode id=3086 lang=javascript
 *
 * [3086] Minimum Moves to Pick K Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} maxChanges
 * @return {number}
 */
var minimumMoves = function(nums, k, maxChanges) {
    const n = nums.length;
    const pos = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) pos.push(i);
    }
    const m = pos.length;

    if (m === 0) return 2 * k;
    if (maxChanges >= k) {
        let bestNearby = 0;
        for (let i = 0; i < m; i++) {
            let nearby = 0;
            if (i > 0 && pos[i] - pos[i-1] === 1) nearby++;
            if (i < m-1 && pos[i+1] - pos[i] === 1) nearby++;
            bestNearby = Math.max(bestNearby, nearby);
        }
        const freeAndNearby = 1 + bestNearby;
        const needMore = k - freeAndNearby;
        if (needMore <= 0) return k - 1;
        return bestNearby + 2 * needMore;
    }

    // Sliding window on pos array with prefix sums
    const prefix = new Array(m + 1).fill(0);
    for (let i = 0; i < m; i++) prefix[i + 1] = prefix[i] + pos[i];

    // For a window [l..r] of size w, cost to bring all to median:
    // mid = (l+r)>>1
    // cost = pos[mid] * (mid-l) - sum(l..mid-1) + sum(mid+1..r) - pos[mid] * (r-mid)
    // Total cost = distance_cost + 2 * (k - w)
    // w ranges from max(1, k-maxChanges) to min(k, m)

    let ans = Infinity;

    for (let w = Math.max(1, k - maxChanges); w <= Math.min(k, m); w++) {
        // Slide window of size w
        for (let l = 0; l + w - 1 < m; l++) {
            const r = l + w - 1;
            const mid = (l + r) >> 1;
            const median = pos[mid];
            const leftSum = median * (mid - l) - (prefix[mid] - prefix[l]);
            const rightSum = (prefix[r + 1] - prefix[mid + 1]) - median * (r - mid);
            const distCost = leftSum + rightSum;
            const totalCost = distCost + 2 * (k - w);
            ans = Math.min(ans, totalCost);
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(minimumMoves([1,1,0,0,0,1,1,0,0,1], 3, 1) === 3);
console.log(minimumMoves([0,0,0,0], 2, 3) === 4);
console.log(minimumMoves([1,1,1], 3, 0) === 2);
console.log(minimumMoves([1,1,0], 2, 0) === 1);
console.log(minimumMoves([1], 1, 0) === 0);
console.log(minimumMoves([0,1,0,1,0], 2, 1) === 2);
