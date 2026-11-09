/*
 * @lc app=leetcode.cn id=4106 lang=javascript
 *
 * [4106] 找出两个字符串的不匹配片段
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[][]}
 */
var findMismatchedSegments = function(s1, s2) {
    const ans = [];
    let start = -1; // 当前不等片段的起始下标
    for (let i = 0; i <= s1.length; i++) {
        if (i < s1.length && s1[i] !== s2[i]) {
            if (start < 0) start = i;
        } else if (start >= 0) {
            ans.push([s1.slice(start, i), s2.slice(start, i)]);
            start = -1;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findMismatchedSegments('earth', 'empty')) === JSON.stringify([['ar', 'mp'], ['h', 'y']]));
console.log(JSON.stringify(findMismatchedSegments('action', 'nation')) === JSON.stringify([['ac', 'na']]));
console.log(JSON.stringify(findMismatchedSegments('hot', 'hot')) === JSON.stringify([]));
console.log(JSON.stringify(findMismatchedSegments('a', 'b')) === JSON.stringify([['a', 'b']]));
console.log(JSON.stringify(findMismatchedSegments('abc', 'xya')) === JSON.stringify([['ab', 'xy']]));
