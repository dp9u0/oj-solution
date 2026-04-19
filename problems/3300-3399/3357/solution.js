/*
 * @lc app=leetcode id=3357 lang=javascript
 *
 * [3357] Minimize the Maximum Adjacent Element Difference
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    const n = nums.length;

    let lo = 0;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] !== -1 && nums[i + 1] !== -1) {
            lo = Math.max(lo, Math.abs(nums[i] - nums[i + 1]));
        }
    }

    if (!nums.includes(-1)) return lo;

    const check = (d) => {
        // For each -1 position, compute required range
        const posRange = new Array(n).fill(null);

        for (let i = 0; i < n; i++) {
            if (nums[i] !== -1) continue;
            let lo = 1, hi = 1e9;
            let has = false;
            if (i > 0 && nums[i - 1] !== -1) {
                lo = Math.max(lo, nums[i - 1] - d);
                hi = Math.min(hi, nums[i - 1] + d);
                has = true;
            }
            if (i < n - 1 && nums[i + 1] !== -1) {
                lo = Math.max(lo, nums[i + 1] - d);
                hi = Math.min(hi, nums[i + 1] + d);
                has = true;
            }
            if (has) {
                if (lo > hi) return false;
                posRange[i] = [lo, hi];
            }
        }

        // Find segments of consecutive -1s and compute per-segment intersection
        const segIntersections = []; // [lo, hi] or null if empty
        let hasEmptySeg = false;

        let i = 0;
        while (i < n) {
            if (nums[i] !== -1) { i++; continue; }
            let j = i;
            let sLo = -Infinity, sHi = Infinity;
            let hasRange = false;
            while (j < n && nums[j] === -1) {
                if (posRange[j]) {
                    sLo = Math.max(sLo, posRange[j][0]);
                    sHi = Math.min(sHi, posRange[j][1]);
                    hasRange = true;
                }
                j++;
            }
            if (hasRange) {
                if (sLo > sHi) {
                    hasEmptySeg = true;
                    segIntersections.push(null);
                } else {
                    segIntersections.push([sLo, sHi]);
                }
            }
            i = j;
        }

        if (segIntersections.length === 0) return true;

        if (!hasEmptySeg) {
            // All segments have non-empty intersection
            // Check if one value covers all segment intersections
            let gLo = segIntersections[0][0], gHi = segIntersections[0][1];
            for (const [lo, hi] of segIntersections) {
                gLo = Math.max(gLo, lo);
                gHi = Math.min(gHi, hi);
            }
            if (gLo <= gHi) return true;

            // Check two values cover all segment intersections (no |x-y| constraint)
            const cands = new Set();
            for (const [lo, hi] of segIntersections) { cands.add(lo); cands.add(hi); }
            for (const x of cands) {
                let yLo = -Infinity, yHi = Infinity, needY = false;
                for (const [lo, hi] of segIntersections) {
                    if (x >= lo && x <= hi) continue;
                    needY = true;
                    yLo = Math.max(yLo, lo);
                    yHi = Math.min(yHi, hi);
                }
                if (!needY || yLo <= yHi) return true;
            }
        }

        // Check two values with |x-y| <= d covering all individual ranges
        const allRanges = [];
        for (let k = 0; k < n; k++) {
            if (posRange[k]) allRanges.push(posRange[k]);
        }

        // One value
        let gLo = allRanges[0][0], gHi = allRanges[0][1];
        for (const [lo, hi] of allRanges) {
            gLo = Math.max(gLo, lo);
            gHi = Math.min(gHi, hi);
        }
        if (gLo <= gHi) return true;

        // Two values with |x-y| <= d
        const cands = new Set();
        for (const [lo, hi] of allRanges) { cands.add(lo); cands.add(hi); }
        for (const x of cands) {
            let yLo = -Infinity, yHi = Infinity, needY = false;
            for (const [lo, hi] of allRanges) {
                if (x >= lo && x <= hi) continue;
                needY = true;
                yLo = Math.max(yLo, lo);
                yHi = Math.min(yHi, hi);
            }
            if (!needY) return true;
            if (yLo > yHi) continue;
            const effLo = Math.max(x - d, yLo);
            const effHi = Math.min(x + d, yHi);
            if (effLo <= effHi) return true;
        }
        return false;
    };

    let hi = 1e9;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (check(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minDifference([1,2,-1,10,8]));    // 4
console.log(minDifference([-1,-1,-1]));       // 0
console.log(minDifference([-1,10,-1,8]));     // 1
console.log(minDifference([14,-1,-1,46]));    // 11
console.log(minDifference([2,-1,4,-1,-1,6])); // 1
