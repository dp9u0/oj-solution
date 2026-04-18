/*
 * @lc app=leetcode id=2003 lang=javascript
 *
 * [2003] Smallest Missing Genetic Value in Each Subtree
 */

// @lc code=start
/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestMissingValueSubtree = function(parents, nums) {
    const n = parents.length;
    const children = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) children[parents[i]].push(i);

    let nodeOne = -1;
    for (let i = 0; i < n; i++) { if (nums[i] === 1) { nodeOne = i; break; } }

    const ans = new Array(n).fill(1);
    if (nodeOne === -1) return ans;

    const path = [];
    for (let cur = nodeOne; cur !== -1; cur = parents[cur]) path.push(cur);
    const onPath = new Set(path);

    const seen = new Set();
    let mex = 1;

    const dfs = (node) => {
        seen.add(nums[node]);
        for (const child of children[node]) {
            if (!onPath.has(child)) dfs(child);
        }
    };

    for (const node of path) {
        dfs(node);
        while (seen.has(mex)) mex++;
        ans[node] = mex;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(smallestMissingValueSubtree([-1,0,0,2], [1,2,3,4]))); // [5,1,1,1]
console.log(JSON.stringify(smallestMissingValueSubtree([-1,0,1,0,3,3], [5,4,6,2,1,3]))); // [7,1,1,4,2,1]
console.log(JSON.stringify(smallestMissingValueSubtree([-1,2,3,0,2,4,1], [2,3,4,5,6,7,8]))); // [1,1,1,1,1,1,1]
console.log(JSON.stringify(smallestMissingValueSubtree([-1,0], [2,1]))); // [3,2]
console.log(JSON.stringify(smallestMissingValueSubtree([-1,0], [1,2]))); // [3,1]
