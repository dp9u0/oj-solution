/*
 * @lc app=leetcode id=1488 lang=javascript
 *
 * [1488] Avoid Flood in The City
 */

// @lc code=start
/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
    const n = rains.length;
    const ans = new Array(n).fill(-1);
    const full = new Map(); // lake -> last rain day
    const dryDays = []; // indices of dry days available

    const bisect = (arr, target) => {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    for (let i = 0; i < n; i++) {
        const lake = rains[i];
        if (lake === 0) {
            dryDays.push(i);
            ans[i] = 1; // default, will be overwritten if needed
        } else {
            if (full.has(lake)) {
                const prevDay = full.get(lake);
                const idx = bisect(dryDays, prevDay + 1);
                if (idx === dryDays.length) return [];
                const dryIdx = dryDays[idx];
                ans[dryIdx] = lake;
                dryDays.splice(idx, 1);
            }
            full.set(lake, i);
            ans[i] = -1;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(avoidFlood([1,2,3,4])); // [-1,-1,-1,-1]
console.log(avoidFlood([1,2,0,0,2,1])); // [-1,-1,2,1,-1,-1] or [-1,-1,1,2,-1,-1]
console.log(avoidFlood([1,2,0,1,2])); // []
