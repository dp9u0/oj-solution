/*
 * @lc app=leetcode id=2234 lang=javascript
 *
 * [2234] Maximum Total Beauty of the Gardens
 */

// @lc code=start
/**
 * @param {number[]} flowers
 * @param {number} newFlowers
 * @param {number} target
 * @param {number} full
 * @param {number} partial
 * @return {number}
 */
var maximumBeauty = function(flowers, newFlowers, target, full, partial) {
    const n = flowers.length;
    const arr = flowers.map(f => Math.min(f, target));
    arr.sort((a, b) => a - b);

    // Separate incomplete (arr < target) from already-complete (arr = target)
    let m = 0;
    while (m < n && arr[m] < target) m++;
    if (m === 0) return n * full; // all already complete

    const preComplete = n - m;
    const psum = new Array(m + 1).fill(0);
    for (let i = 0; i < m; i++) psum[i + 1] = psum[i] + arr[i];

    const findMaxMin = (k, budget) => {
        if (k === 0) return 0;
        let lo = arr[0], hi = target - 1;
        let best = arr[0];
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            let l = 0, r = k;
            while (l < r) {
                const mid2 = (l + r) >> 1;
                if (arr[mid2] < mid) l = mid2 + 1;
                else r = mid2;
            }
            const cost = mid * l - psum[l];
            if (cost <= budget) {
                best = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return best;
    };

    let result = 0;
    let suffixCost = 0;

    for (let i = m; i >= 0; i--) {
        if (i < m) suffixCost += target - arr[i];
        if (suffixCost > newFlowers) break;
        const remaining = newFlowers - suffixCost;
        const minVal = findMaxMin(i, remaining);
        const fullCount = preComplete + (m - i);
        const beauty = fullCount * full + (i > 0 ? minVal * partial : 0);
        result = Math.max(result, beauty);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maximumBeauty([1,3,1,1], 7, 6, 12, 1)); // 14
console.log(maximumBeauty([2,4,5,3], 10, 5, 2, 6)); // 30
console.log(maximumBeauty([5,5,5], 3, 6, 2, 3)); // 19
