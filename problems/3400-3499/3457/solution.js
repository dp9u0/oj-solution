/*
 * @lc app=leetcode id=3457 lang=javascript
 *
 * [3457] Eat Pizzas!
 */

// @lc code=start
/**
 * @param {number[]} pizzas
 * @return {number}
 */
var maxWeight = function(pizzas) {
  pizzas.sort((a, b) => b - a);
  const d = pizzas.length / 4;
  const oddDays = Math.ceil(d / 2);
  const evenDays = d - oddDays;
  let ans = 0, front = 0, back = pizzas.length - 1;
  for (let i = 0; i < oddDays; i++) {
    ans += pizzas[front++];
    back -= 3;
  }
  for (let i = 0; i < evenDays; i++) {
    front++;
    ans += pizzas[front++];
    back -= 2;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxWeight([1, 2, 3, 4, 5, 6, 7, 8])); // 14
console.log(maxWeight([2, 1, 1, 1, 1, 1, 1, 1])); // 3
console.log(maxWeight([5, 2, 2, 4, 3, 3, 1, 3, 2, 5, 4, 2])); // 14
console.log(maxWeight([1, 2, 3, 4])); // 4
console.log(maxWeight([4, 3, 2, 1, 8, 7, 6, 5, 12, 11, 10, 9])); // 28
