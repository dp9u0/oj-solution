/*
 * @lc app=leetcode.cn id=面试题 16.02 lang=javascript
 *
 * [面试题 16.02] 单词频率
 */

// @lc code=start
/**
 * @param {string[]} book
 */
var WordsFrequency = function(book) {
    // 构造期一次灌表，get O(1)
    this.freq = new Map();
    for (const w of book) this.freq.set(w, (this.freq.get(w) || 0) + 1);
};

/**
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function(word) {
    return this.freq.get(word) || 0;
};

/** 
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */
// @lc code=end

// TEST:
const wf = new WordsFrequency(['i', 'have', 'an', 'apple', 'he', 'have', 'a', 'pen']);
console.log(wf.get('you') === 0);
console.log(wf.get('have') === 2);
console.log(wf.get('an') === 1);
console.log(wf.get('apple') === 1);
console.log(wf.get('pen') === 1);
const wf2 = new WordsFrequency([]);
console.log(wf2.get('anything') === 0);
