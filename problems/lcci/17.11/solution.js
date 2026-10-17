/*
 * @lc app=leetcode.cn id=面试题 17.11 lang=javascript
 *
 * [面试题 17.11] 单词距离
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
    // 按 words 引用缓存倒排索引，重复查询免重建
    if (!findClosest.cache || findClosest.cache.words !== words) {
        const index = new Map();
        words.forEach((w, i) => {
            if (!index.has(w)) index.set(w, []);
            index.get(w).push(i);
        });
        findClosest.cache = { words, index };
    }
    const a = findClosest.cache.index.get(word1);
    const b = findClosest.cache.index.get(word2);
    // 双指针归并两条升序位置列表
    let i = 0;
    let j = 0;
    let best = Infinity;
    while (i < a.length && j < b.length) {
        const d = Math.abs(a[i] - b[j]);
        if (d < best) best = d;
        if (a[i] < b[j]) i++;
        else j++;
    }
    return best;
};
// @lc code=end

// TEST:
const doc = ['I', 'am', 'a', 'student', 'from', 'a', 'university', 'in', 'a', 'city'];
console.log(findClosest(doc, 'a', 'student') === 1);
console.log(findClosest(doc, 'a', 'city') === 1);
console.log(findClosest(doc, 'I', 'city') === 9); // 重复查询走缓存
console.log(findClosest(['x', 'y', 'x', 'y'], 'x', 'y') === 1);
console.log(findClosest(['a', 'b', 'a', 'b', 'a'], 'a', 'b') === 1);
