/*
 * @lc app=leetcode id=710 lang=javascript
 *
 * [710] Random Pick with Blacklist
 */

// @lc code=start
var Solution = function(n, blacklist) {
  this.m = n - blacklist.length;
  const bset = new Set(blacklist);
  this.map = new Map();
  let w = this.m;
  for (const b of blacklist) {
    if (b < this.m) {
      while (bset.has(w)) w++;
      this.map.set(b, w);
      w++;
    }
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  const x = Math.floor(Math.random() * this.m);
  const mapped = this.map.get(x);
  return mapped !== undefined ? mapped : x;
};
// @lc code=end

// TEST:
const s = new Solution(7, [2, 3, 5]);
const counts = new Map();
for (let i = 0; i < 40000; i++) {
  const v = s.pick();
  counts.set(v, (counts.get(v) || 0) + 1);
}
console.log([...counts.keys()].sort().join(',') === '0,1,4,6');
const okSpread = [0, 1, 4, 6].every((v) => Math.abs((counts.get(v) || 0) - 10000) < 1500);
console.log(okSpread);
