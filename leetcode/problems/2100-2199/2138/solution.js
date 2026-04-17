/*
 * @lc app=leetcode id=2138 lang=javascript
 *
 * [2138] Divide a String Into Groups of Size k
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const result = [];
    for (let i = 0; i < s.length; i += k) {
        let group = s.slice(i, i + k);
        if (group.length < k) group = group.padEnd(k, fill);
        result.push(group);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(divideString("abcdefghi", 3, "x"))); // ["abc","def","ghi"]
console.log(JSON.stringify(divideString("abcdefghij", 3, "x"))); // ["abc","def","ghi","jxx"]
console.log(JSON.stringify(divideString("a", 2, "z"))); // ["az"]
console.log(JSON.stringify(divideString("abcd", 2, "x"))); // ["ab","cd"]
console.log(JSON.stringify(divideString("abcde", 4, "y"))); // ["abcd","eyyy"]
