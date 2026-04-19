/*
 * @lc app=leetcode id=1773 lang=javascript
 *
 * [1773] Count Items Matching a Rule
 */

// @lc code=start
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let idx = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2;
    let count = 0;
    for (let item of items) {
        if (item[idx] === ruleValue) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver")); // 1
console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone")); // 2
