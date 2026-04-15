/*
 * @lc app=leetcode id=1864 lang=javascript
 *
 * [1864] Minimum Number of Swaps to Make the Binary String Alternating
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  const n = s.length;
  let cnt0 = 0, cnt1 = 0;
  for (const ch of s) {
    if (ch === '0') cnt0++;
    else cnt1++;
  }

  const check = (firstChar) => {
    let diff = 0;
    for (let i = 0; i < n; i++) {
      const expected = i % 2 === 0 ? firstChar : (firstChar === '0' ? '1' : '0');
      if (s[i] !== expected) diff++;
    }
    // diff positions need swapping: half are 0s where 1 expected, half are 1s where 0 expected
    // Each swap fixes 2 positions, so swaps = diff / 2
    return diff % 2 === 0 ? diff / 2 : Infinity;
  };

  let ans = Infinity;
  // Try starting with '0': need ceil(n/2) zeros and floor(n/2) ones
  if (cnt0 === Math.ceil(n / 2) && cnt1 === Math.floor(n / 2)) {
    ans = Math.min(ans, check('0'));
  }
  // Try starting with '1': need floor(n/2) zeros and ceil(n/2) ones
  if (cnt1 === Math.ceil(n / 2) && cnt0 === Math.floor(n / 2)) {
    ans = Math.min(ans, check('1'));
  }
  // n even: both have n/2 zeros and n/2 ones
  // n odd: first char appears (n+1)/2 times

  return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minSwaps("111000")); // 1
console.log(minSwaps("010")); // 0
console.log(minSwaps("1110")); // -1
console.log(minSwaps("100")); // 1
