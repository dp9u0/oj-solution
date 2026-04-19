/*
 * @lc app=leetcode id=2440 lang=javascript
 *
 * [2440] Create Components With Same Value
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var componentValue = function(nums, edges) {
    const n = nums.length;
    if (n === 1) return 0;

    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    const total = nums.reduce((s, v) => s + v, 0);

    const check = (target) => {
        let ok = true;
        const dfs = (u, parent) => {
            let sum = nums[u];
            for (const v of adj[u]) {
                if (v === parent) continue;
                sum += dfs(v, u);
                if (!ok) return 0;
            }
            if (sum > target) { ok = false; return 0; }
            if (sum === target) return 0;
            return sum;
        };
        dfs(0, -1);
        return ok;
    };

    const divs = [];
    for (let d = 1; d * d <= total; d++) {
        if (total % d !== 0) continue;
        divs.push(d);
        if (d !== total / d) divs.push(total / d);
    }
    divs.sort((a, b) => a - b);

    for (const d of divs) {
        if (check(d)) return total / d - 1;
    }
    return 0;
};
// @lc code=end

// TEST:
console.log(componentValue([6,2,2,2,6], [[0,1],[1,2],[1,3],[3,4]]) === 2);
console.log(componentValue([2], []) === 0);
console.log(componentValue([1,1,1,1], [[0,1],[1,2],[2,3]]) === 3);
console.log(componentValue([6,2,2,2,6], [[0,1],[1,2],[1,3],[3,4]]) === 2);
console.log(componentValue([1,2,3,4], [[0,1],[1,2],[2,3]]) === 0);
