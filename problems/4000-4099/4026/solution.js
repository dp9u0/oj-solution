/*
 * @lc app=leetcode id=4026 lang=javascript
 *
 * [4026] Maximum Assignment Gap
 */

// @lc code=start
/**
 * @param {string} skill
 * @param {string} station
 * @return {number}
 */
var maximumGap = function(skill, station) {
  const n = skill.length;
  const m = station.length;
  if (n === 1) return 0;
  // positions per char
  const pos = new Map();
  for (let j = 0; j < m; j++) {
    if (!pos.has(station[j])) pos.set(station[j], []);
    pos.get(station[j]).push(j);
  }
  const lowerBound = (arr, x) => {
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  // earliest: leftmost greedy
  const earliest = Array(n);
  let p = 0;
  for (let i = 0; i < n; i++) {
    const arr = pos.get(skill[i]);
    const idx = lowerBound(arr, p);
    earliest[i] = arr[idx];
    p = arr[idx] + 1;
  }
  // latest: rightmost greedy
  const latest = Array(n);
  let q = m;
  for (let i = n - 1; i >= 0; i--) {
    const arr = pos.get(skill[i]);
    let lo = 0;
    let hi = arr.length - 1;
    let best = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < q) { best = arr[mid]; lo = mid + 1; }
      else hi = mid - 1;
    }
    latest[i] = best;
    q = best;
  }
  let ans = 0;
  for (let i = 1; i < n; i++) {
    ans = Math.max(ans, latest[i] - earliest[i - 1]);
  }
  return ans;
};
// @lc code-end

// TEST:
console.log(maximumGap('aa', 'aaaa') === 3);
console.log(maximumGap('xyz', 'xyzz') === 2);
console.log(maximumGap('cbc', 'cbcdbc') === 4);
console.log(maximumGap('a', 'a') === 0);
console.log(maximumGap('ab', 'ab') === 1);
console.log(maximumGap('ab', 'aab') === 2);
console.log(maximumGap('aba', 'aaba') === 2);
