/*
 * @lc app=leetcode id=3692 lang=javascript
 *
 * [3692] Majority Frequency Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var majorityFrequencyGroup = function(s) {
  const cnt = new Map();
  for (const ch of s) cnt.set(ch, (cnt.get(ch) || 0) + 1);

  // group by frequency: freq -> [chars]
  const groups = new Map();
  for (const [ch, f] of cnt) {
    if (!groups.has(f)) groups.set(f, []);
    groups.get(f).push(ch);
  }

  let bestFreq = 0, bestSize = 0;
  for (const [f, chars] of groups) {
    if (chars.length > bestSize || (chars.length === bestSize && f > bestFreq)) {
      bestSize = chars.length;
      bestFreq = f;
    }
  }

  return groups.get(bestFreq).join('');
};
// @lc code=end

// TEST:
console.log(majorityFrequencyGroup('aaabbbccdddde')); // ab or ba
console.log(majorityFrequencyGroup('abcd')); // abcd
console.log(majorityFrequencyGroup('pfpfgi')); // fp or pf
console.log(majorityFrequencyGroup('a')); // a
console.log(majorityFrequencyGroup('aabbcc')); // abc (all freq 2, group size 3)
