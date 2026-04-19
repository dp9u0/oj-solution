/*
 * @lc app=leetcode id=2246 lang=javascript
 *
 * [2246] Longest Path With Different Adjacent Characters
 */

// @lc code=start
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
    const n = parent.length;
    const children = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) {
        children[parent[i]].push(i);
    }

    let result = 1;

    function dfs(node) {
        let max1 = 0, max2 = 0;
        for (const child of children[node]) {
            const childLen = dfs(child);
            if (s[child] !== s[node]) {
                if (childLen > max1) {
                    max2 = max1;
                    max1 = childLen;
                } else if (childLen > max2) {
                    max2 = childLen;
                }
            }
        }
        result = Math.max(result, max1 + max2 + 1);
        return max1 + 1;
    }

    dfs(0);
    return result;
};
// @lc code=end

// TEST:
console.log(longestPath([-1, 0, 0, 1, 1, 2], 'abacbe'));  // 3
console.log(longestPath([-1, 0, 0, 0], 'aabc'));           // 3
