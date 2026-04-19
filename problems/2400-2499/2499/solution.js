/*
 * @lc app=leetcode id=2499 lang=javascript
 *
 * [2499] Minimum Total Cost to Make Arrays Unequal
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumTotalCost = function(nums1, nums2) {
    const n = nums1.length;
    const bad = [];
    const freq = new Map();

    for (let i = 0; i < n; i++) {
        if (nums1[i] === nums2[i]) {
            bad.push(i);
            freq.set(nums1[i], (freq.get(nums1[i]) || 0) + 1);
        }
    }

    const k = bad.length;
    if (k === 0) return 0;

    let dom = -1, domFreq = 0;
    for (const [val, cnt] of freq) {
        if (cnt > domFreq) { domFreq = cnt; dom = val; }
    }

    let cost = 0;
    for (const i of bad) cost += i;

    if (domFreq * 2 > k) {
        const extra = 2 * domFreq - k;
        const eligible = [];
        for (let j = 0; j < n; j++) {
            if (nums1[j] !== nums2[j] && nums1[j] !== dom && nums2[j] !== dom) {
                eligible.push(j);
                if (eligible.length >= extra) break;
            }
        }
        if (eligible.length < extra) return -1;
        for (const j of eligible) cost += j;
    } else if (k % 2 === 1) {
        // Odd k: need one extra swap
        // Option A: duplicate smallest bad index
        let extraCost = bad[0];

        // Option B: swap with non-bad position
        const badVals = [...freq.keys()];
        for (let j = 0; j < bad[0]; j++) {
            if (nums1[j] !== nums2[j]) {
                if (badVals.length >= 3) {
                    extraCost = j;
                    break;
                }
                // 2 distinct bad values: check compatibility
                const [a, b] = badVals;
                if (!((nums1[j] === a && nums2[j] === b) || (nums1[j] === b && nums2[j] === a))) {
                    extraCost = j;
                    break;
                }
            }
        }

        cost += extraCost;
    }

    return cost;
};
// @lc code=end

// TEST:
console.log(minimumTotalCost([1,2,3,4,5], [1,2,3,4,5])); // 10
console.log(minimumTotalCost([2,2,2,1,3], [1,2,2,3,3])); // 10
console.log(minimumTotalCost([1,2,2], [1,2,2])); // -1
console.log(minimumTotalCost([1,2,3], [1,2,4])); // 1
console.log(minimumTotalCost([1,1], [2,2])); // 0
