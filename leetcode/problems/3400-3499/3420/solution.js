/*
 * @lc app=leetcode id=3420 lang=javascript
 *
 * [3420] Count Non-Decreasing Subarrays After K Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countNonDecreasingSubarrays = function(nums, k) {
    const n = nums.length;
    const rev = [...nums].reverse();
    // Now we count subarrays of rev that can be made non-increasing with <= k ops.
    // For non-increasing: each element should be >= elements to its right.
    // Optimal: for each element, raise it to the next >= element to its right.
    // Use monotonic stack: keep track of segments with the same dominant value.

    const stk = []; // stack of [val, count] - val is decreasing from bottom to top
    let l = 0, cost = 0n, ans = 0;

    for (let r = 0; r < n; r++) {
        let curCnt = 1;
        // Pop entries where val < rev[r] (they need to be raised to rev[r])
        while (stk.length > 0 && stk[stk.length - 1][0] < rev[r]) {
            const [sv, sc] = stk.pop();
            cost += BigInt(rev[r] - sv) * BigInt(sc);
            curCnt += sc;
        }
        stk.push([rev[r], curCnt]);

        // Shrink from left while cost > k
        while (cost > BigInt(k)) {
            cost -= BigInt(stk[0][0] - rev[l]);
            stk[0][1]--;
            if (stk[0][1] === 0) stk.shift();
            l++;
        }

        ans += r - l + 1;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(countNonDecreasingSubarrays([6, 3, 1, 2, 4, 4], 7)); // 17
console.log(countNonDecreasingSubarrays([6, 3, 1, 3, 6], 4)); // 12
console.log(countNonDecreasingSubarrays([1], 0)); // 1
console.log(countNonDecreasingSubarrays([1, 2, 3], 0)); // 6
console.log(countNonDecreasingSubarrays([12, 3, 14, 18], 1)); // 7
