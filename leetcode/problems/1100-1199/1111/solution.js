/*
 * @lc app=leetcode id=1111 lang=javascript
 *
 * [1111] Maximum Nesting Depth of Two Valid Parentheses Strings
 */

// @lc code=start
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let ans = [], depth = 0;
    for (let c of seq) {
        if (c === '(') {
            depth++;
            ans.push(depth % 2);
        } else {
            ans.push(depth % 2);
            depth--;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maxDepthAfterSplit("(()())"))); // [1,0,0,0,0,1] or similar
console.log(JSON.stringify(maxDepthAfterSplit("()(())()"))); // valid split
