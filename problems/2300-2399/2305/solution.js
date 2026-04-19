/*
 * @lc app=leetcode id=2305 lang=javascript
 *
 * [2305] Fair Distribution of Cookies
 */

// @lc code=start
/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
  const n = cookies.length;
  const children = new Array(k).fill(0);
  let result = Infinity;

  const backtrack = (i) => {
    if (i === n) {
      result = Math.min(result, Math.max(...children));
      return;
    }

    for (let j = 0; j < k; j++) {
      if (children[j] + cookies[i] >= result) continue;
      children[j] += cookies[i];
      backtrack(i + 1);
      children[j] -= cookies[i];
      if (children[j] === 0) break;
    }
  };

  backtrack(0);
  return result;
};
// @lc code=end

// TEST:
console.log(distributeCookies([8, 15, 10, 20, 8], 2)); // 31
console.log(distributeCookies([6, 1, 3, 2, 2, 4, 1, 2], 3)); // 7
