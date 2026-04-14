/*
 * @lc app=leetcode id=2342 lang=javascript
 *
 * [2342] Max Sum of a Pair With Equal Sum of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const digitSum = (n) => {
        let s = 0;
        while (n > 0) { s += n % 10; n = Math.floor(n / 10); }
        return s;
    };

    const map = new Map();
    let ans = -1;
    for (const num of nums) {
        const ds = digitSum(num);
        if (map.has(ds)) {
            ans = Math.max(ans, num + map.get(ds));
            map.set(ds, Math.max(map.get(ds), num));
        } else {
            map.set(ds, num);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumSum([18,43,36,13,7])); // 54
console.log(maximumSum([10,12,19,14]));   // -1
console.log(maximumSum([1,1]));           // 2
