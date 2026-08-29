/*
 * @lc app=leetcode id=3913 lang=javascript
 *
 * [3913] Sort Vowels by Frequency
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
  const VOWELS = 'aeiou';
  const first = new Map();
  const freq = new Map();
  for (const ch of s) {
    if (VOWELS.includes(ch)) {
      freq.set(ch, (freq.get(ch) || 0) + 1);
      if (!first.has(ch)) first.set(ch, first.size);
    }
  }
  const order = [...freq.keys()].sort((a, b) => {
    const d = freq.get(b) - freq.get(a);
    return d !== 0 ? d : first.get(a) - first.get(b);
  });
  let pool = [];
  for (const ch of order) pool = pool.concat(ch.repeat(freq.get(ch)).split(''));
  let p = 0;
  let out = '';
  for (const ch of s) {
    if (VOWELS.includes(ch)) out += pool[p++];
    else out += ch;
  }
  return out;
};
// @lc code=end

// TEST:
console.log(sortVowels('leetcode') === 'leetcedo');
console.log(sortVowels('aeiaaioooa') === 'aaaaoooiie');
console.log(sortVowels('baeiou') === 'baeiou');
console.log(sortVowels('bcd') === 'bcd');
console.log(sortVowels('uoiea') === 'uoiea');
