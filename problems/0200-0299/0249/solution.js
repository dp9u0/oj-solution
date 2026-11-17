/*
 * @lc app=leetcode.cn id=249 lang=javascript
 *
 * [249] 移位字符串分组
 */

// @lc code=start
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    const groups = new Map();
    for (const s of strings) {
        const base = s.charCodeAt(0);
        const sig = [...s].map(c => ((c.charCodeAt(0) - base) % 26 + 26) % 26).join(",");
        if (!groups.has(sig)) groups.set(sig, []);
        groups.get(sig).push(s);
    }
    return [...groups.values()];
};
// @lc code=end

// TEST:
console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]));
// [["abc","bcd","xyz"],["acef"],["az","ba"],["a"],["z"]]
console.log(groupStrings(["a"])); // [["a"]]
console.log(groupStrings(["z", "a"])); // [["z","a"]] (uniform shift +1)
console.log(groupStrings(["ab", "ba"])); // [["ab"],["ba"]] (NOT shift-equivalent)
console.log(groupStrings(["az", "ba"])); // [["az","ba"]] (uniform shift +1)
