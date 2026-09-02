/*
 * @lc app=leetcode.cn id=LCR 033 lang=javascript
 *
 * [LCR 033] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  for (const s of strs) {
    const counts = new Array(26).fill(0);
    for (const ch of s) counts[ch.charCodeAt(0) - 97]++;
    let key = '';
    for (let i = 0; i < 26; i++) key += counts[i] + '#';
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return Array.from(map.values());
};
// @lc code=end

// TEST:
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// expect: [["eat","tea","ate"],["tan","nat"],["bat"]] (order-insensitive)
console.log(groupAnagrams([""]));
// expect: [[""]]
console.log(groupAnagrams(["a"]));
// expect: [["a"]]
console.log(groupAnagrams(["ab", "ba", "abc", "bca", "cab", "cba"]));
// expect: [["ab","ba"],["abc","bca","cab","cba"]]
console.log(groupAnagrams(["ddddddddddg", "dgggggggggg"]));
// expect: [["ddddddddddg"],["dgggggggggg"]] (distinct signatures)
