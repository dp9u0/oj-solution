/*
 * @lc app=leetcode id=3878 lang=javascript
 *
 * [3878] Count Good Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countGoodSubarrays = function(nums) {
    const n = nums.length;
    const posMap = new Map();
    for (let i = 0; i < n; i++) {
        if (!posMap.has(nums[i])) posMap.set(nums[i], []);
        posMap.get(nums[i]).push(i);
    }

    let total = 0;
    let groups = [];

    for (let i = n - 1; i >= 0; i--) {
        const newGroups = [{ or: nums[i], start: i }];
        for (const g of groups) {
            const nv = g.or | nums[i];
            if (newGroups[newGroups.length - 1].or === nv) continue;
            newGroups.push({ or: nv, start: g.start });
        }
        groups = newGroups;

        for (let k = 0; k < groups.length; k++) {
            const lo = groups[k].start;
            const hi = k + 1 < groups.length ? groups[k + 1].start - 1 : n - 1;
            const v = groups[k].or;
            const positions = posMap.get(v);
            if (!positions) continue;

            let l = 0, r = positions.length - 1, p = -1;
            while (l <= r) {
                const mid = (l + r) >> 1;
                if (positions[mid] >= i) { p = positions[mid]; r = mid - 1; }
                else l = mid + 1;
            }
            if (p === -1 || p > hi) continue;
            total += hi - Math.max(lo, p) + 1;
        }
    }

    return total;
};
// @lc code=end

// TEST:
console.log(countGoodSubarrays([4, 2, 3])); // 4
console.log(countGoodSubarrays([1, 3, 1])); // 6
console.log(countGoodSubarrays([0])); // 1
console.log(countGoodSubarrays([1, 1, 1])); // 6
console.log(countGoodSubarrays([1, 2, 4])); // 3
console.log(countGoodSubarrays([7, 7, 7])); // 6
