/*
 * @lc app=leetcode.cn id=面试题 01.09 lang=javascript
 *
 * [面试题 01.09] 字符串轮转
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
    // 等长且 s2 是 s1+s1 的子串（xy 必在 xyxy 中出现）
    return s1.length === s2.length && (s1 + s1).includes(s2);
};
// @lc code=end

// TEST:
console.log(isFlipedString('waterbottle', 'erbottlewat') === true);
console.log(isFlipedString('aa', 'aba') === false);
console.log(isFlipedString('', '') === true);
console.log(isFlipedString('abc', 'cab') === true);
console.log(isFlipedString('abc', 'acb') === false);
console.log(isFlipedString('a', 'a') === true);
