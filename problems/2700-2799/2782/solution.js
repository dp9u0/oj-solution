/*
 * @lc app=leetcode.cn id=2782 lang=javascript
 *
 * [2782] 唯一类别的数量
 */

// @lc code=start
/**
 * Definition for a category handler.
 * class CategoryHandler {
 *     @param {number[]} categories
 *     constructor(categories);
 *
 *     @param {number} a
 *     @param {number} b
 *     @return {boolean}
 *     haveSameCategory(a, b);
 * }
 */
/**
 * @param {number} n
 * @param {CategoryHandler} categoryHandler
 * @return {number}
 */
var numberOfCategories = function(n, categoryHandler) {
    const reps = [0];
    for (let i = 1; i < n; i++) {
        let same = false;
        for (const r of reps) {
            if (categoryHandler.haveSameCategory(i, r)) { same = true; break; }
        }
        if (!same) reps.push(i);
    }
    return reps.length;
};
// @lc code=end

// TEST:
class CategoryHandler {
    constructor(categories) { this.categories = categories; }
    haveSameCategory(a, b) { return this.categories[a] === this.categories[b]; }
};
console.log(numberOfCategories(6, new CategoryHandler([1,1,2,2,3,3]))); // 3
console.log(numberOfCategories(5, new CategoryHandler([1,2,3,4,5]))); // 5
console.log(numberOfCategories(3, new CategoryHandler([1,1,1]))); // 1
console.log(numberOfCategories(1, new CategoryHandler([7]))); // 1
console.log(numberOfCategories(4, new CategoryHandler([2,1,2,1]))); // 2
