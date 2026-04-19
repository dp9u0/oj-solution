/*
 * @lc app=leetcode id=2945 lang=javascript
 *
 * [2945] Find Maximum Non-decreasing Array Length
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumLength = function(nums) {
    const n = nums.length;
    const prefix = new Float64Array(n + 1);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

    // levels[k] = deque of [need, pref] for dp level k
    // need strictly increasing, pref strictly increasing
    const levels = [[[0, 0]]];
    let curLevel = 0;

    const bs = (dq, threshold) => {
        let lo = 0, hi = dq.length - 1, found = -1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (dq[mid][0] <= threshold) { found = mid; lo = mid + 1; }
            else hi = mid - 1;
        }
        return found >= 0 ? dq[found][1] : -1;
    };

    for (let i = 1; i <= n; i++) {
        const pi = prefix[i];
        let bestPref = bs(levels[curLevel], pi);

        if (bestPref >= 0) {
            curLevel++;
        } else {
            bestPref = bs(levels[curLevel - 1], pi);
        }

        const need = 2 * pi - bestPref;
        if (curLevel >= levels.length) {
            levels.push([[need, pi]]);
        } else {
            const dq = levels[curLevel];
            while (dq.length > 0 && dq[dq.length - 1][0] >= need) dq.pop();
            dq.push([need, pi]);
        }
    }

    return curLevel;
};
// @lc code=end

// TEST:
console.log(findMaximumLength([5, 2, 2])); // 1
console.log(findMaximumLength([1, 2, 3, 4])); // 4
console.log(findMaximumLength([4, 3, 2, 6])); // 3
console.log(findMaximumLength([1])); // 1
console.log(findMaximumLength([272, 482, 115, 925, 983])); // 4
