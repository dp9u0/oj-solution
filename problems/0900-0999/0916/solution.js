/*
 * @lc app=leetcode id=916 lang=javascript
 *
 * [916] Word Subsets
 */

// @lc code=start
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const getCount = (s) => {
        const cnt = new Array(26).fill(0);
        for (const c of s) cnt[c.charCodeAt(0) - 97]++;
        return cnt;
    };

    // Merge words2: take max count per letter
    const req = new Array(26).fill(0);
    for (const w of words2) {
        const cnt = getCount(w);
        for (let i = 0; i < 26; i++) req[i] = Math.max(req[i], cnt[i]);
    }

    const ans = [];
    for (const w of words1) {
        const cnt = getCount(w);
        let ok = true;
        for (let i = 0; i < 26; i++) {
            if (cnt[i] < req[i]) { ok = false; break; }
        }
        if (ok) ans.push(w);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","o"]))); // ["facebook","google","leetcode"]
console.log(JSON.stringify(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["lc","eo"]))); // ["leetcode"]
console.log(JSON.stringify(wordSubsets(["acaac","cccbb","aacbb","caacc","bcbbb"], ["c","cc","b"]))); // ["cccbb"]
