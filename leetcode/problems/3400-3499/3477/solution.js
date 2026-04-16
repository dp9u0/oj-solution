/*
 * @lc app=leetcode id=3477 lang=javascript
 *
 * [3477] Fruits Into Baskets II
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    const n = fruits.length;
    const used = new Array(n).fill(false);
    let unplaced = 0;
    for (let i = 0; i < n; i++) {
        let placed = false;
        for (let j = 0; j < n; j++) {
            if (!used[j] && baskets[j] >= fruits[i]) {
                used[j] = true;
                placed = true;
                break;
            }
        }
        if (!placed) unplaced++;
    }
    return unplaced;
};
// @lc code=end

// TEST:
console.log(numOfUnplacedFruits([4,2,5], [3,5,4])); // 1
console.log(numOfUnplacedFruits([3,6,1], [6,4,7])); // 0
console.log(numOfUnplacedFruits([5,5], [3,3])); // 2
