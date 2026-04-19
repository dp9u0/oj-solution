/*
 * @lc app=leetcode id=472 lang=javascript
 *
 * [472] Concatenated Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    words.sort((a, b) => a.length - b.length);
    const wordSet = new Set();
    const result = [];

    for (const word of words) {
        if (canForm(word, wordSet)) {
            result.push(word);
        }
        wordSet.add(word);
    }

    return result;
};

function canForm(s, wordSet) {
    if (wordSet.size === 0) return false;
    const n = s.length;
    const dp = new Uint8Array(n + 1);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = 1;
                break;
            }
        }
    }

    return dp[n] === 1;
}
// @lc code=end

// TEST:
console.log(JSON.stringify(findAllConcatenatedWordsInADict(['cat','cats','catsdogcats','dog','dogcatsdog','hippopotamuses','rat','ratcatdogcat'])));
// ['catsdogcats','dogcatsdog','ratcatdogcat']
console.log(JSON.stringify(findAllConcatenatedWordsInADict(['cat','dog','catdog'])));
// ['catdog']
console.log(JSON.stringify(findAllConcatenatedWordsInADict(['a','b','ab','abc'])));
// ['ab']
console.log(JSON.stringify(findAllConcatenatedWordsInADict(['a'])));
// []
console.log(JSON.stringify(findAllConcatenatedWordsInADict(['a','aa','aaa'])));
// ['aa','aaa']