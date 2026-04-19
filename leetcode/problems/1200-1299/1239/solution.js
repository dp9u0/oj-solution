/*
 * @lc app=leetcode id=1239 lang=javascript
 *
 * [1239] Maximum Length of a Concatenated String with Unique Characters
 */

// @lc code=start
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  const masks = [];
  for (const s of arr) {
    let mask = 0, valid = true;
    for (const c of s) {
      const bit = 1 << (c.charCodeAt(0) - 97);
      if (mask & bit) { valid = false; break; }
      mask |= bit;
    }
    if (valid) masks.push(mask);
  }

  let ans = 0;
  const dfs = (idx, mask) => {
    ans = Math.max(ans, popcount(mask));
    for (let i = idx; i < masks.length; i++) {
      if ((mask & masks[i]) === 0) dfs(i + 1, mask | masks[i]);
    }
  };

  dfs(0, 0);
  return ans;
};

const popcount = (n) => {
  let count = 0;
  while (n) { count++; n &= n - 1; }
  return count;
};
// @lc code=end

// TEST:
console.log(maxLength(["un","iq","ue"])); // 4
console.log(maxLength(["cha","r","act","ers"])); // 6
console.log(maxLength(["abcdefghijklmnopqrstuvwxyz"])); // 26
console.log(maxLength(["aa","bb"])); // 0
console.log(maxLength(["a","b","c","d","e","f"])); // 6
