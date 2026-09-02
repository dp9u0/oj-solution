/*
 * @lc app=leetcode.cn id=LCP 40 lang=javascript
 *
 * [LCP 40] 心算挑战
 */

// @lc code=start
/**
 * 心算挑战:从 cards 中选 cnt 张,使总和为偶数且最大。
 * 贪心:先取最大的 cnt 张,若和为奇数,则通过替换最小奇/偶来调整。
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maximumScore = function(cards, cnt) {
  // 降序排序,使已选中的是最大的 cnt 张
  cards.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < cnt; i++) sum += cards[i];

  if (sum % 2 === 0) return sum;

  // 已选中部分的最小奇数和最小偶数
  let minOddSelected = -1;
  let minEvenSelected = -1;
  for (let i = cnt - 1; i >= 0; i--) {
    if (minOddSelected === -1 && cards[i] % 2 === 1) minOddSelected = cards[i];
    if (minEvenSelected === -1 && cards[i] % 2 === 0) minEvenSelected = cards[i];
  }

  // 剩余部分的最大偶数和最大奇数
  let maxEvenRemain = -1;
  let maxOddRemain = -1;
  for (let i = cnt; i < cards.length; i++) {
    if (cards[i] % 2 === 0) {
      if (maxEvenRemain === -1) maxEvenRemain = cards[i];
    } else {
      if (maxOddRemain === -1) maxOddRemain = cards[i];
    }
  }

  let ans = -1;
  // 方案1:去掉最小奇数,补入剩余最大偶数(奇->偶,总和变偶数)
  if (minOddSelected !== -1 && maxEvenRemain !== -1) {
    ans = Math.max(ans, sum - minOddSelected + maxEvenRemain);
  }
  // 方案2:去掉最小偶数,补入剩余最大奇数(偶->奇,总和变偶数)
  if (minEvenSelected !== -1 && maxOddRemain !== -1) {
    ans = Math.max(ans, sum - minEvenSelected + maxOddRemain);
  }

  return ans === -1 ? 0 : ans;
};
// @lc code=end

// TEST:
function assert(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.error(`FAIL: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    process.exit(1);
  }
  console.log(`PASS: ${JSON.stringify(actual)}`);
}

assert(maximumScore([1, 2, 8, 9], 3), 18);
assert(maximumScore([3, 3, 1], 1), 0);
assert(maximumScore([1, 1, 1], 2), 2);        // 选两个1,和2为偶数
assert(maximumScore([1, 2, 3, 4, 5], 5), 0);  // 全部选上,和15为奇数,无剩余可替换
assert(maximumScore([2, 4, 6], 2), 10);       // 全偶数,和10
assert(maximumScore([1, 3, 5], 2), 8);        // 选最大2张 5+3=8,偶数
assert(maximumScore([1, 3, 5], 3), 0);        // 1+3+5=9奇数,无偶可换
