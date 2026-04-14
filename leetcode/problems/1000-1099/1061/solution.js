/*
 * @lc app=leetcode id=1061 lang=javascript
 *
 * [1061] Lexicographically Smallest Equivalent String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
  const parent = new Array(26);
  for (let i = 0; i < 26; i++) parent[i] = i;
  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };
  const union = (a, b) => {
    const ra = find(a), rb = find(b);
    if (ra !== rb) {
      if (ra < rb) parent[rb] = ra;
      else parent[ra] = rb;
    }
  };
  for (let i = 0; i < s1.length; i++) {
    union(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
  }
  return baseStr.split('').map(c => String.fromCharCode(find(c.charCodeAt(0) - 97) + 97)).join('');
};
// @lc code=end

// TEST:
console.log(smallestEquivalentString("parker", "morris", "parser")); // "makkek"
console.log(smallestEquivalentString("hello", "world", "hold")); // "hdld"
console.log(smallestEquivalentString("leetcode", "programs", "sourcecode")); // "aauaaaaada"
