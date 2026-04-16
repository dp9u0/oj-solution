/*
 * @lc app=leetcode id=3889 lang=javascript
 *
 * [3889] Mirror Frequency Distance
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var mirrorFrequency = function(s) {
    const freq = {};
    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    const getMirror = (ch) => {
        if (ch >= 'a' && ch <= 'z') {
            return String.fromCharCode('z'.charCodeAt(0) - (ch.charCodeAt(0) - 'a'.charCodeAt(0)));
        }
        return String.fromCharCode('9'.charCodeAt(0) - (ch.charCodeAt(0) - '0'.charCodeAt(0)));
    };

    let result = 0;
    const visited = new Set();

    for (const c of Object.keys(freq)) {
        const m = getMirror(c);
        const pair = c <= m ? c + m : m + c;
        if (visited.has(pair)) continue;
        visited.add(pair);
        result += Math.abs((freq[c] || 0) - (freq[m] || 0));
    }

    return result;
};
// @lc code=end

// TEST:
console.log(mirrorFrequency("ab1z9")); // 3
console.log(mirrorFrequency("4m7n")); // 2
console.log(mirrorFrequency("byby")); // 0
