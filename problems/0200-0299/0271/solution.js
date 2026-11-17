/*
 * @lc app=leetcode.cn id=271 lang=javascript
 *
 * [271] 字符串的编码与解码
 */

// @lc code=start
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    // length-prefixed: "<len>#<chars>" — unambiguous for any content
    return strs.map(s => s.length + "#" + s).join("");
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    const res = [];
    let i = 0;
    while (i < s.length) {
        const hash = s.indexOf("#", i);
        const len = +s.slice(i, hash);
        res.push(s.slice(hash + 1, hash + 1 + len));
        i = hash + 1 + len;
    }
    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end

// TEST:
const roundtrip = strs => JSON.stringify(decode(encode(strs))) === JSON.stringify(strs);
console.log(roundtrip(["hello", "world"])); // true
console.log(roundtrip([""])); // true
console.log(roundtrip([])); // true
console.log(roundtrip(["with#hash", "3#tricky", "digits123"])); // true (delimiters inside content)
console.log(roundtrip(["a", "", "b"])); // true (empty strings between)
