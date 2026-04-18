/*
 * @lc app=leetcode id=3485 lang=javascript
 *
 * [3485] Longest Common Prefix of K Strings After Removal
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {number[]}
 */
var longestCommonPrefix = function(words, k) {
  const n = words.length;
  if (n <= k) return new Array(n).fill(0);

  const ch = [{}], cnt = [0], dep = [0];
  const paths = [];
  let maxD = 0;

  for (let i = 0; i < n; i++) {
    const w = words[i];
    const path = [];
    let cur = 0;
    for (let j = 0; j < w.length; j++) {
      const c = w[j];
      if (!(c in ch[cur])) {
        ch[cur][c] = ch.length;
        ch.push({});
        cnt.push(0);
        dep.push(dep[cur] + 1);
        if (dep[cur] + 1 > maxD) maxD = dep[cur] + 1;
      }
      cur = ch[cur][c];
      cnt[cur]++;
      path.push(cur);
    }
    paths.push(path);
  }

  const t1 = new Array(maxD + 1).fill(null);
  const t2 = new Array(maxD + 1).fill(null);

  for (let id = 1; id < ch.length; id++) {
    const d = dep[id], c = cnt[id];
    if (!t1[d] || c > t1[d][1]) {
      t2[d] = t1[d];
      t1[d] = [id, c];
    } else if (!t2[d] || c > t2[d][1]) {
      t2[d] = [id, c];
    }
  }

  const ach = [];
  for (let d = maxD; d >= 1; d--) {
    if (t1[d] && t1[d][1] >= k) ach.push(d);
  }

  if (!ach.length) return new Array(n).fill(0);

  const ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const path = paths[i], L = path.length;
    for (const d of ach) {
      if (d > L || t1[d][0] !== path[d - 1]) {
        ans[i] = d;
        break;
      }
      const nm = Math.max(t1[d][1] - 1, t2[d] ? t2[d][1] : 0);
      if (nm >= k) {
        ans[i] = d;
        break;
      }
    }
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(longestCommonPrefix(['jump','run','run','jump','run'], 2))); // [3,4,4,3,4]
console.log(JSON.stringify(longestCommonPrefix(['dog','racer','car'], 2))); // [0,0,0]
console.log(JSON.stringify(longestCommonPrefix(['a','a','a'], 2))); // [1,1,1]
console.log(JSON.stringify(longestCommonPrefix(['ab','ab','cd'], 2))); // [0,0,2]
console.log(JSON.stringify(longestCommonPrefix(['abc','abd','abe'], 2))); // [2,2,2]
