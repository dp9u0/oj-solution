/*
 * @lc app=leetcode id=2085 lang=javascript
 *
 * [2085] Count Common Words With One Occurrence
 */

// @lc code=start
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const count = (arr) => {
        const m = new Map();
        for (const w of arr) m.set(w, (m.get(w) || 0) + 1);
        return m;
    };

    const c1 = count(words1), c2 = count(words2);
    let ans = 0;
    for (const [w, f] of c1) {
        if (f === 1 && c2.get(w) === 1) ans++;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"])); // 2
console.log(countWords(["b","bb","bbb"], ["a","aa","aaa"])); // 0
console.log(countWords(["a","ab"], ["a","a","a","ab"])); // 1
console.log(countWords(["a"], ["a"])); // 1
console.log(countWords(["a","a"], ["a"])); // 0
