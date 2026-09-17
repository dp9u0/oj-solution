/*
 * @lc app=leetcode.cn id=1520 lang=javascript
 *
 * [1520] 最多的不重叠子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function (s) {
  const n = s.length;
  const first = new Array(26).fill(n);
  const last = new Array(26).fill(-1);
  for (let i = 0; i < n; i++) {
    const c = s.charCodeAt(i) - 97;
    if (first[c] === n) first[c] = i;
    last[c] = i;
  }

  // 求以每个位置为起点的最小合法子串区间 [i, r]
  const intervals = [];
  for (let i = 0; i < n; i++) {
    let r = last[s.charCodeAt(i) - 97];
    let valid = true;
    for (let j = i; j <= r; j++) {
      const c = s.charCodeAt(j) - 97;
      if (first[c] < i) {
        valid = false;
        break;
      }
      if (last[c] > r) r = last[c];
    }
    if (valid) intervals.push([i, r]);
  }

  // 按右端点排序做区间调度贪心：数目最多，且嵌套时天然选中更短的内层区间
  intervals.sort((a, b) => a[1] - b[1]);
  const res = [];
  let end = -1;
  for (let k = 0; k < intervals.length; k++) {
    const l = intervals[k][0];
    const r = intervals[k][1];
    if (l > end) {
      res.push(s.slice(l, r + 1));
      end = r;
    }
  }
  return res;
};
// @lc code=end

// TEST:
const sortRes = (arr) => [...arr].sort();
console.log(sortRes(maxNumOfSubstrings("adefaddaccc"))); // ["ccc","e","f"]
console.log(sortRes(maxNumOfSubstrings("abbaccd"))); // ["bb","cc","d"]
console.log(maxNumOfSubstrings("abab")); // ["abab"]
console.log(maxNumOfSubstrings("abba")); // ["bb"]
console.log(maxNumOfSubstrings("a")); // ["a"]
console.log(maxNumOfSubstrings("abcdefg").length); // 7
console.log(maxNumOfSubstrings("abcba")); // ["c"]
console.log(maxNumOfSubstrings("abacaba").length); // 1
