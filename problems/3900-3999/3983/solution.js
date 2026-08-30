/*
 * @lc app=leetcode id=3983 lang=javascript
 *
 * [3983] Subsequence After One Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var canMakeSubsequence = function (s, t) {
  const n = s.length;
  const m = t.length;
  if (n > m) return false;

  // pre[i]: earliest index in t right after greedily matching s[0..i-1]; -1 if impossible
  const pre = new Array(n + 1).fill(-1);
  pre[0] = 0;
  for (let i = 1; i <= n; i++) {
    if (pre[i - 1] === -1) break;
    let j = pre[i - 1];
    while (j < m && t[j] !== s[i - 1]) j++;
    pre[i] = j < m ? j + 1 : -1;
  }

  // s is already a subsequence of t (zero replacements allowed)
  if (pre[n] !== -1) return true;

  // suf[i]: latest start index in t from which s[i..n-1] can be matched; -1 if impossible
  const suf = new Array(n + 1).fill(-1);
  suf[n] = m;
  for (let i = n - 1; i >= 0; i--) {
    if (suf[i + 1] === -1) break;
    let j = suf[i + 1] - 1;
    while (j >= 0 && t[j] !== s[i]) j--;
    suf[i] = j >= 0 ? j : -1;
  }

  // Replace s[i]: prefix ends at pre[i], suffix starts at suf[i+1],
  // need one free slot between them for the new character
  for (let i = 0; i < n; i++) {
    if (pre[i] === -1 || suf[i + 1] === -1) continue;
    if (pre[i] < suf[i + 1]) return true;
  }
  return false;
};
// @lc code=end

// TEST:
const check = (name, actual, expected) => {
  console.log(name, actual, actual === expected ? '✓' : `✗ (expected ${expected})`);
};

check('cat/chat:', canMakeSubsequence('cat', 'chat'), true);
check('plane/apple:', canMakeSubsequence('plane', 'apple'), false);
check('s longer than t:', canMakeSubsequence('abc', 'ab'), false);
check('already subsequence:', canMakeSubsequence('abc', 'ahbgdc'), true);
check('need one replacement:', canMakeSubsequence('axc', 'ahbgdc'), true);
check('no gap for replacement:', canMakeSubsequence('abxc', 'abc'), false);
check('single char into single char:', canMakeSubsequence('z', 'a'), true);
check('replace middle needs slot:', canMakeSubsequence('abb', 'axb'), true);
