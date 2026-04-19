/*
 * @lc app=leetcode id=1419 lang=javascript
 *
 * [1419] Minimum Number of Frogs Croaking
 */

// @lc code=start
/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
  const prev = { r: 'c', o: 'r', a: 'o', k: 'a' };
  const cnt = { c: 0, r: 0, o: 0, a: 0, k: 0 };
  let active = 0, ans = 0;
  for (const ch of croakOfFrogs) {
    cnt[ch]++;
    if (ch === 'c') {
      active++;
      ans = Math.max(ans, active);
    } else {
      const p = prev[ch];
      if (cnt[p] < cnt[ch]) return -1;
      if (ch === 'k') active--;
    }
  }
  const total = cnt.c;
  if (cnt.r !== total || cnt.o !== total || cnt.a !== total || cnt.k !== total) return -1;
  return ans;
};
// @lc code=end

// TEST:
console.log(minNumberOfFrogs('croakcroak')); // 1
console.log(minNumberOfFrogs('crcoakroak')); // 2
console.log(minNumberOfFrogs('croakcrook')); // -1
console.log(minNumberOfFrogs('croak')); // 1
console.log(minNumberOfFrogs('crocakcroak')); // -1
