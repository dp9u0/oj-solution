/*
 * @lc app=leetcode id=3801 lang=javascript
 *
 * [3801] Minimum Cost to Merge Sorted Lists
 */

// @lc code=start
/**
 * @param {number[][]} lists
 * @return {number}
 */
var minMergeCost = function(lists) {
    const n = lists.length;
    const full = (1 << n) - 1;

    // Collect all unique sorted values for binary search
    const allVals = [];
    for (const lst of lists) allVals.push(...lst);
    allVals.sort((a, b) => a - b);
    const uniqueVals = [allVals[0]];
    for (let i = 1; i < allVals.length; i++) {
        if (allVals[i] !== allVals[i - 1]) uniqueVals.push(allVals[i]);
    }

    // Precompute bisect count for each list at each unique value
    const bisectCount = new Array(n);
    for (let i = 0; i < n; i++) {
        bisectCount[i] = new Array(uniqueVals.length);
        let cnt = 0, j = 0;
        for (let vi = 0; vi < uniqueVals.length; vi++) {
            while (j < lists[i].length && lists[i][j] <= uniqueVals[vi]) {
                cnt++;
                j++;
            }
            bisectCount[i][vi] = cnt;
        }
    }

    // Precompute total length for each subset
    const totalLen = new Array(1 << n).fill(0);
    for (let mask = 1; mask <= full; mask++) {
        const lb = mask & (-mask);
        totalLen[mask] = totalLen[mask ^ lb] + lists[Math.log2(lb)].length;
    }

    // Precompute median for each subset via binary search
    const medians = new Array(1 << n);
    for (let mask = 1; mask <= full; mask++) {
        const k = Math.floor((totalLen[mask] - 1) / 2);
        let lo = 0, hi = uniqueVals.length - 1;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            let cnt = 0;
            for (let i = 0; i < n; i++) {
                if (mask & (1 << i)) cnt += bisectCount[i][mid];
            }
            if (cnt >= k + 1) hi = mid;
            else lo = mid + 1;
        }
        medians[mask] = uniqueVals[lo];
    }

    // DP over subsets
    const dp = new Array(1 << n).fill(Infinity);
    for (let i = 0; i < n; i++) dp[1 << i] = 0;

    for (let mask = 1; mask <= full; mask++) {
        if ((mask & (mask - 1)) === 0) continue;
        const lowestBit = mask & (-mask);
        for (let sub = (mask - 1) & mask; sub > 0; sub = (sub - 1) & mask) {
            if (!(sub & lowestBit)) continue;
            const other = mask ^ sub;
            const cost = totalLen[sub] + totalLen[other]
                + Math.abs(medians[sub] - medians[other]);
            dp[mask] = Math.min(dp[mask], dp[sub] + dp[other] + cost);
        }
    }

    return dp[full];
};
// @lc code=end

// TEST:
console.log(minMergeCost([[1,3,5],[2,4],[6,7,8]]));      // 18
console.log(minMergeCost([[1,1,5],[1,4,7,8]]));           // 10
console.log(minMergeCost([[1],[3]]));                      // 4
console.log(minMergeCost([[1],[1]]));                      // 2
console.log(minMergeCost([[1],[2],[3]]));                  // 7
console.log(minMergeCost([[1,2],[3,4],[5,6]]));            // 15
