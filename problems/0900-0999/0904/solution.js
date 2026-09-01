/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const count = new Map();
    let left = 0, maxLen = 0;

    for (let right = 0; right < fruits.length; right++) {
        count.set(fruits[right], (count.get(fruits[right]) || 0) + 1);

        while (count.size > 2) {
            const f = fruits[left];
            count.set(f, count.get(f) - 1);
            if (count.get(f) === 0) count.delete(f);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
// @lc code=end

// TEST:
console.log(totalFruit([1, 2, 1]));
// Expected: 3

console.log(totalFruit([0, 1, 2, 2]));
// Expected: 3

console.log(totalFruit([1, 2, 3, 2, 2]));
// Expected: 4
