/*
 * @lc app=leetcode id=3816 lang=javascript
 *
 * [3816] Lexicographically Smallest String After Deleting Duplicate Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var lexSmallestAfterDeletion = function (s) {
  const n = s.length;
  // 每个字母的出现位置（升序），ptr[c] 为首个"未使用且 > last"的出现下标
  const positions = Array.from({ length: 26 }, () => []);
  for (let i = 0; i < n; i++) positions[s.charCodeAt(i) - 97].push(i);
  const ptr = new Array(26).fill(0);
  const lastPos = new Array(26).fill(-1);
  for (let c = 0; c < 26; c++) {
    const p = positions[c];
    if (p.length) lastPos[c] = p[p.length - 1];
  }

  // inAns[c]：字母 c 已进入答案 → 不再必需
  const inAns = new Array(26).fill(false);
  let requiredCount = 0;
  for (let c = 0; c < 26; c++) if (positions[c].length) requiredCount++;

  let ans = '';
  let last = -1;
  while (requiredCount > 0) {
    // 跳过已死位置；求必需字母 lastPos 的最小值 m1(字母 l1) 与次小值 m2
    let m1 = Infinity;
    let m2 = Infinity;
    let l1 = -1;
    for (let c = 0; c < 26; c++) {
      const p = positions[c];
      while (ptr[c] < p.length && p[ptr[c]] <= last) ptr[c]++;
      if (!inAns[c] && p.length) {
        const lp = lastPos[c];
        if (lp < m1) {
          m2 = m1;
          m1 = lp;
          l1 = c;
        } else if (lp < m2) {
          m2 = lp;
        }
      }
    }
    // 从 'a' 到 'z' 尝试：最早的可用出现 j，需 j < 其余必需字母的最小 lastPos
    for (let c = 0; c < 26; c++) {
      const p = positions[c];
      if (ptr[c] >= p.length) continue;
      const j = p[ptr[c]];
      const bound = l1 === c ? m2 : m1;
      if (j < bound) {
        ans += s[j];
        last = j;
        ptr[c]++;
        if (!inAns[c]) {
          inAns[c] = true;
          requiredCount--;
        }
        break;
      }
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(lexSmallestAfterDeletion('aaccb') === 'aacb');
console.log(lexSmallestAfterDeletion('z') === 'z');
console.log(lexSmallestAfterDeletion('aab') === 'aab');
console.log(lexSmallestAfterDeletion('cbc') === 'bc');
console.log(lexSmallestAfterDeletion('abab') === 'aab');
console.log(lexSmallestAfterDeletion('aaaa') === 'a');
console.log(lexSmallestAfterDeletion('cba') === 'cba');
console.log(lexSmallestAfterDeletion('cdadcdda') === 'acd');
