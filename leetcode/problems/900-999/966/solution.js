/*
 * @lc app=leetcode id=966 lang=javascript
 *
 * [966] Vowel Spellchecker
 */

// @lc code=start
/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    const exactSet = new Set(wordlist);
    const caseMap = new Map();
    const vowelMap = new Map();
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    const devowel = (w) => {
        let s = '';
        for (const ch of w.toLowerCase()) {
            s += vowels.has(ch) ? '#' : ch;
        }
        return s;
    };

    for (const w of wordlist) {
        const low = w.toLowerCase();
        if (!caseMap.has(low)) caseMap.set(low, w);
        const dv = devowel(w);
        if (!vowelMap.has(dv)) vowelMap.set(dv, w);
    }

    return queries.map(q => {
        if (exactSet.has(q)) return q;
        const low = q.toLowerCase();
        if (caseMap.has(low)) return caseMap.get(low);
        const dv = devowel(q);
        if (vowelMap.has(dv)) return vowelMap.get(dv);
        return '';
    });
};
// @lc code=end

// TEST:
console.log(spellchecker(["KiTe","kite","hare","Hare"], ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]));
// ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
console.log(spellchecker(["yellow"], ["YellOw"])); // ["yellow"]
