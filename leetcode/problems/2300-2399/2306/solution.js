/*
 * @lc app=leetcode id=2306 lang=javascript
 *
 * [2306] Naming a Company
 */

// @lc code=start
/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
  const groups = Array.from({ length: 26 }, () => new Set());
  for (const s of ideas) {
    groups[s.charCodeAt(0) - 97].add(s.slice(1));
  }

  let ans = 0;
  for (let i = 0; i < 26; i++) {
    if (!groups[i].size) continue;
    for (let j = i + 1; j < 26; j++) {
      if (!groups[j].size) continue;
      let ci = 0, cj = 0;
      for (const suf of groups[i]) {
        if (!groups[j].has(suf)) ci++;
      }
      for (const suf of groups[j]) {
        if (!groups[i].has(suf)) cj++;
      }
      ans += 2 * ci * cj;
    }
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(distinctNames(["coffee","donuts","time","toffee"])); // 6
console.log(distinctNames(["lack","back"])); // 0
console.log(distinctNames(["aaa","baa","caa","bbb","cbb","dbb"])); // pairs between groups
console.log(distinctNames(["a","b"])); // 2 (a->b gives "b a", b->a gives "a b")
console.log(distinctNames(["abc","def","ghi"])); // 6 (all 3*2 pairs valid)
