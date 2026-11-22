/*
 * @lc app=leetcode.cn id=2764 lang=javascript
 *
 * [2764] 数组是否表示某二叉树的前序遍历
 */

// @lc code=start
/**
 * @param {number[][]} nodes
 * @return {boolean}
 */
var isPreorder = function(nodes) {
    const stack = [];
    for (const [id, parent] of nodes) {
        while (stack.length && stack[stack.length - 1] !== parent) stack.pop();
        if (parent === -1) {
            if (stack.length) return false; // second root mid-array
        } else if (!stack.length) {
            return false; // parent already finished
        }
        stack.push(id);
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isPreorder([[0,-1],[1,0],[2,0],[3,2],[4,2]])); // true
console.log(isPreorder([[0,-1],[1,0],[2,0],[3,1],[4,1]])); // false
console.log(isPreorder([[0,-1]])); // true
console.log(isPreorder([[1,-1],[2,1],[3,2],[4,3]])); // true
console.log(isPreorder([[0,-1],[1,0],[2,0],[3,1]])); // false
