/*
 * @lc app=leetcode id=1170 lang=javascript
 *
 * [1170] Compare Strings by Frequency of the Smallest Character
 */

// @lc code=start
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    let f = s => {
        let cnt = new Array(26).fill(0);
        for (let c of s) cnt[c.charCodeAt(0) - 97]++;
        for (let i = 0; i < 26; i++) if (cnt[i] > 0) return cnt[i];
        return 0;
    };
    let wVals = words.map(f).sort((a, b) => a - b);
    return queries.map(q => {
        let v = f(q);
        let lo = 0, hi = wVals.length;
        while (lo < hi) {
            let mid = (lo + hi) >> 1;
            if (wVals[mid] > v) hi = mid;
            else lo = mid + 1;
        }
        return wVals.length - lo;
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(numSmallerByFrequency(['cbd'], ['zaaaz']))); // [1]
console.log(JSON.stringify(numSmallerByFrequency(['bbb','cc'], ['a','aa','aaa','aaaa']))); // [1,2]
