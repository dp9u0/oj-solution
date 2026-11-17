/*
 * @lc app=leetcode.cn id=291 lang=javascript
 *
 * [291] 单词规律 II
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, s) {
    const charToWord = new Map(), usedWords = new Set();

    const dfs = (pi, si) => {
        if (pi === pattern.length && si === s.length) return true;
        if (pi === pattern.length || si === s.length) return false;

        const c = pattern[pi];
        if (charToWord.has(c)) {
            const w = charToWord.get(c);
            return s.startsWith(w, si) && dfs(pi + 1, si + w.length);
        }
        // try every candidate substring for this new pattern char
        for (let end = si + 1; end <= s.length; end++) {
            const w = s.slice(si, end);
            if (usedWords.has(w)) continue; // another char already owns it
            charToWord.set(c, w);
            usedWords.add(w);
            if (dfs(pi + 1, end)) return true;
            charToWord.delete(c);
            usedWords.delete(w);
        }
        return false;
    };

    return dfs(0, 0);
};
// @lc code=end

// TEST:
console.log(wordPatternMatch("abab", "redblueredblue")); // true (a="red", b="blue")
console.log(wordPatternMatch("aaaa", "asdasdasdasd")); // true (a="asd")
console.log(wordPatternMatch("aabb", "xyzxyzxxyzx")); // true
console.log(wordPatternMatch("aabb", "xyzxyz")); // false
console.log(wordPatternMatch("a", "anything")); // true
