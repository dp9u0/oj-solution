/*
 * @lc app=leetcode id=1177 lang=javascript
 *
 * [1177] Can Make Palindrome from Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function(s, queries) {
  const n = s.length;
  const prefix = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] ^ (1 << (s.charCodeAt(i) - 97));
  }

  const popcount = (x) => {
    let count = 0;
    while (x) {
      x &= x - 1;
      count++;
    }
    return count;
  };

  return queries.map(([left, right, k]) => {
    const mask = prefix[right + 1] ^ prefix[left];
    return popcount(mask) >> 1 <= k;
  });
};
// @lc code=end

// TEST:
console.log(canMakePaliQueries('abcda', [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]])); // [true,false,false,true,true]
console.log(canMakePaliQueries('lyb', [[0,1,0],[2,2,1]])); // [false,true]
