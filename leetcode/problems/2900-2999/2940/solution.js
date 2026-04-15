/*
 * @lc app=leetcode id=2940 lang=javascript
 *
 * [2940] Find Building Where Alice and Bob Can Meet
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function(heights, queries) {
    const n = heights.length;
    const q = queries.length;
    const ans = new Array(q).fill(-1);

    // Group queries by max index
    const groups = Array.from({ length: n }, () => []);
    for (let i = 0; i < q; i++) {
        let [a, b] = queries[i];
        if (a > b) [a, b] = [b, a];
        if (a === b || heights[a] < heights[b]) {
            ans[i] = b;
        } else {
            // Need to find first j > b where heights[j] > heights[a]
            groups[b].push({ idx: i, minH: heights[a] });
        }
    }

    // Process from right to left, maintain monotonic decreasing stack
    const stack = []; // [height, index], decreasing by height
    for (let i = n - 1; i >= 0; i--) {
        // Process queries for this position
        for (const { idx, minH } of groups[i]) {
            // Binary search in stack for first height > minH
            let lo = 0, hi = stack.length - 1;
            let res = -1;
            while (lo <= hi) {
                const mid = (lo + hi) >> 1;
                if (stack[mid][0] > minH) {
                    res = stack[mid][1];
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }
            ans[idx] = res;
        }

        // Maintain monotonic decreasing stack
        while (stack.length > 0 && stack[stack.length - 1][0] <= heights[i]) {
            stack.pop();
        }
        stack.push([heights[i], i]);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(leftmostBuildingQueries([6,4,8,5,2,7], [[0,1],[0,3],[2,4],[3,4],[2,2]]))); // [2,5,-1,5,2]
console.log(JSON.stringify(leftmostBuildingQueries([5,3,8,2,6,1,4,6], [[0,7],[3,5],[5,2],[3,0],[1,6]]))); // [7,6,-1,4,6]
