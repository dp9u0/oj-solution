/*
 * @lc app=leetcode id=522 lang=javascript
 *
 * [522] Longest Uncommon Subsequence II
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    // Check if s is subsequence of t
    const isSubseq = (s, t) => {
        let i = 0;
        for (const ch of t) {
            if (i < s.length && s[i] === ch) i++;
        }
        return i === s.length;
    };

    // Sort by length descending
    strs.sort((a, b) => b.length - a.length);

    for (let i = 0; i < strs.length; i++) {
        let isUncommon = true;
        for (let j = 0; j < strs.length; j++) {
            if (i === j) continue;
            if (isSubseq(strs[i], strs[j])) {
                isUncommon = false;
                break;
            }
        }
        if (isUncommon) return strs[i].length;
    }

    return -1;
};
// @lc code=end

// TEST:
console.log(findLUSlength(["aba","cdc","eae"]));       // 3
console.log(findLUSlength(["aaa","aaa","aa"]));         // -1
console.log(findLUSlength(["aabbcc", "aabbcc", "cb"])); // 2
