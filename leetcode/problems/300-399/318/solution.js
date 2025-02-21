/*
 * @lc app=leetcode id=318 lang=javascript
 *
 * [318] Maximum Product of Word Lengths
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    // 用于存储每个单词的位掩码
    const masks = new Array(words.length).fill(0);
    
    // 计算每个单词的位掩码
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            // 将字母对应的位设置为1
            masks[i] |= 1 << (word.charCodeAt(j) - 97);
        }
    }
    
    let maxProd = 0;
    // 比较所有单词对
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            // 如果两个单词没有相同字母（按位与为0）
            if ((masks[i] & masks[j]) === 0) {
                maxProd = Math.max(maxProd, words[i].length * words[j].length);
            }
        }
    }
    
    return maxProd;
};
// @lc code=end
// TEST:
console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));

