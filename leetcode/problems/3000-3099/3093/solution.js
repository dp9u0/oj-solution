/*
 * @lc app=leetcode id=3093 lang=javascript
 *
 * [3093] Longest Common Suffix Queries
 */

// @lc code=start
/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {
    const trie = { bestIdx: -1, bestLen: Infinity };

    for (let i = 0; i < wordsContainer.length; i++) {
        const word = wordsContainer[i];
        const len = word.length;
        let node = trie;
        if (len < node.bestLen) {
            node.bestIdx = i;
            node.bestLen = len;
        }
        for (let j = word.length - 1; j >= 0; j--) {
            const ch = word[j];
            if (!node[ch]) {
                node[ch] = { bestIdx: -1, bestLen: Infinity };
            }
            node = node[ch];
            if (len < node.bestLen) {
                node.bestIdx = i;
                node.bestLen = len;
            }
        }
    }

    const ans = [];
    for (const query of wordsQuery) {
        let node = trie;
        let result = node.bestIdx;
        for (let j = query.length - 1; j >= 0; j--) {
            const ch = query[j];
            if (!node[ch]) break;
            node = node[ch];
            result = node.bestIdx;
        }
        ans.push(result);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(stringIndices(["abcd","bcd","xbcd"], ["cd","bcd","xyz"])));  // [1,1,1]
console.log(JSON.stringify(stringIndices(["abcdefgh","poiuygh","ghghgh"], ["gh","acbfgh","acbfegh"])));  // [2,0,2]
console.log(JSON.stringify(stringIndices(["abc"], ["abc"])));  // [0]
console.log(JSON.stringify(stringIndices(["a","ab","abc"], ["bc"])));  // [2] (only "abc" has suffix "bc")
console.log(JSON.stringify(stringIndices(["abcd","bcd","xbcd"], ["abcd"])));  // [0] (longest suffix "abcd" matches idx 0 exactly)
console.log(JSON.stringify(stringIndices(["xx"], ["x"])));  // [0]
