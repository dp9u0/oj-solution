/*
 * @lc app=leetcode id=1376 lang=javascript
 *
 * [1376] Time Needed to Inform All Employees
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const children = Array.from({length: n}, () => []);
    for (let i = 0; i < n; i++) {
        if (manager[i] !== -1) children[manager[i]].push(i);
    }
    let res = 0;
    const dfs = (node, time) => {
        res = Math.max(res, time);
        for (const c of children[node]) dfs(c, time + informTime[node]);
    };
    dfs(headID, 0);
    return res;
};
// @lc code=end

// TEST:
console.log(numOfMinutes(1, 0, [-1], [0])); // 0
console.log(numOfMinutes(6, 2, [2,2,-1,2,2,2], [0,0,1,0,0,0])); // 1
