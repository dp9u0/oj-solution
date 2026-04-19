/*
 * @lc app=leetcode id=3606 lang=javascript
 *
 * [3606] Coupon Code Validator
 */

// @lc code=start
/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    const order = { electronics: 0, grocery: 1, pharmacy: 2, restaurant: 3 };
    const valid = new Set(['electronics', 'grocery', 'pharmacy', 'restaurant']);

    const result = [];
    for (let i = 0; i < code.length; i++) {
        if (!isActive[i]) continue;
        if (!valid.has(businessLine[i])) continue;
        if (code[i].length === 0) continue;
        if (!/^[a-zA-Z0-9_]+$/.test(code[i])) continue;
        result.push([code[i], order[businessLine[i]]]);
    }

    result.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
    return result.map(r => r[0]);
};
// @lc code=end

// TEST:
console.log(validateCoupons(["SAVE20","","PHARMA5","SAVE@20"], ["restaurant","grocery","pharmacy","restaurant"], [true,true,true,true])); // ["PHARMA5","SAVE20"]
console.log(validateCoupons(["GROCERY15","ELECTRONICS_50","DISCOUNT10"], ["grocery","electronics","invalid"], [false,true,true])); // ["ELECTRONICS_50"]
console.log(validateCoupons(["A"], ["electronics"], [true])); // ["A"]
console.log(validateCoupons(["_test"], ["grocery"], [true])); // ["_test"]
console.log(validateCoupons([""], ["grocery"], [true])); // []
