/*
 * @lc app=leetcode.cn id=面试题 17.05 lang=javascript
 *
 * [面试题 17.05]  字母与数字
 */

// @lc code=start
/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function(array) {
    // 字母 +1 / 数字 -1；前缀平衡相等 ⇔ 区间内字母数字等量
    const first = new Map();
    first.set(0, -1);
    let balance = 0;
    let bestLen = 0;
    let bestStart = 0;
    for (let i = 0; i < array.length; i++) {
        balance += /\d/.test(array[i]) ? -1 : 1;
        if (first.has(balance)) {
            // 只接受严格更长，并列长度时保留更小左端点
            const len = i - first.get(balance);
            if (len > bestLen) {
                bestLen = len;
                bestStart = first.get(balance) + 1;
            }
        } else {
            first.set(balance, i);
        }
    }
    return array.slice(bestStart, bestStart + bestLen);
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(eq(findLongestSubarray(['A','1','B','C','D','2','3','4','E','5','F','G','6','7','H','I','J','K','L','M']), ['A','1','B','C','D','2','3','4','E','5','F','G','6','7']));
console.log(eq(findLongestSubarray(['A', 'A']), []));
console.log(eq(findLongestSubarray(['A', '1']), ['A', '1']));
console.log(eq(findLongestSubarray(['1', 'A']), ['1', 'A']));
console.log(eq(findLongestSubarray(['A', '1', 'A']), ['A', '1']));
console.log(eq(findLongestSubarray([]), []));
// 并列最长取左端点最小：["1","A","1","A"] 全串等量，但同为长度 4 无并列；
// ["A","1","1","A"] 中长度 4 全串即为答案
console.log(eq(findLongestSubarray(['A','1','1','A']), ['A','1','1','A']));
