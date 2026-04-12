/*
 * @lc app=leetcode id=820 lang=javascript
 *
 * [820] Short Encoding of Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    const set = new Set(words);

    for (const word of words) {
        for (let i = 1; i < word.length; i++) {
            const suffix = word.slice(i);
            if (set.has(suffix)) {
                set.delete(suffix);
            }
        }
    }

    let result = 0;
    for (const word of set) {
        result += word.length + 1;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(minimumLengthEncoding(["time","me","bell"])); // 10
console.log(minimumLengthEncoding(["t"])); // 2
console.log(minimumLengthEncoding(["me","time"])); // 5
