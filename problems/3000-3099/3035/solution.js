/*
 * @lc app=leetcode id=3035 lang=javascript
 *
 * [3035] Maximum Palindromes After Operations
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxPalindromesAfterOperations = function(words) {
  // Count total pairs available from all characters
  const freq = new Array(26).fill(0);
  for (const w of words) {
    for (const c of w) {
      freq[c.charCodeAt(0) - 97]++;
    }
  }

  let totalPairs = 0;
  for (let i = 0; i < 26; i++) {
    totalPairs += freq[i] >> 1;
  }

  // Greedy: sort by pair need (floor(len/2)) ascending
  const pairNeeds = words.map(w => w.length >> 1);
  pairNeeds.sort((a, b) => a - b);

  let result = 0;
  let remaining = totalPairs;
  for (const need of pairNeeds) {
    if (need <= remaining) {
      remaining -= need;
      result++;
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(maxPalindromesAfterOperations(["abbb","ba","aa"])); // 3
console.log(maxPalindromesAfterOperations(["abc","ab"])); // 2
console.log(maxPalindromesAfterOperations(["cd","ef","a"])); // 1
