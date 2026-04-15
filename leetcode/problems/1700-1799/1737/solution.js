/*
 * @lc app=leetcode id=1737 lang=javascript
 *
 * [1737] Change Minimum Characters to Satisfy One of Three Conditions
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function(a, b) {
  const cntA = new Array(26).fill(0);
  const cntB = new Array(26).fill(0);
  for (const c of a) cntA[c.charCodeAt(0) - 97]++;
  for (const c of b) cntB[c.charCodeAt(0) - 97]++;

  // prefix sums
  const preA = new Array(27).fill(0);
  const preB = new Array(27).fill(0);
  for (let i = 0; i < 26; i++) {
    preA[i + 1] = preA[i] + cntA[i];
    preB[i + 1] = preB[i] + cntB[i];
  }

  let res = Infinity;

  // Condition 3: both a and b consist of one distinct letter
  for (let i = 0; i < 26; i++) {
    res = Math.min(res, a.length - cntA[i] + b.length - cntB[i]);
  }

  // Condition 1: every letter in a < every letter in b
  // split at boundary i: a uses [0..i], b uses [i+1..25]
  for (let i = 0; i < 25; i++) {
    const ops = (preA[26] - preA[i + 1]) + preB[i + 1]; // a中>i的改掉 + b中<=i的改掉
    res = Math.min(res, ops);
  }

  // Condition 2: every letter in b < every letter in a
  for (let i = 0; i < 25; i++) {
    const ops = (preB[26] - preB[i + 1]) + preA[i + 1]; // b中>i的改掉 + a中<=i的改掉
    res = Math.min(res, ops);
  }

  return res;
};
// @lc code=end

// TEST:
console.log(minCharacters('aba', 'caa')); // 2
console.log(minCharacters('dabadd', 'cda')); // 3
console.log(minCharacters('a', 'a')); // 0
