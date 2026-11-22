/*
 * @lc app=leetcode.cn id=2964 lang=javascript
 *
 * [2964] 可被整除的三元组数量
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} d
 * @return {number}
 */
var divisibleTripletCount = function(nums, d) {
    const n = nums.length;
    let ans = 0;
    for (let l = 0; l < n; l++) {
        const map = new Map();
        for (let r = l + 2; r < n; r++) {
            // nums[r-1] becomes an eligible middle element
            const m = nums[r - 1] % d;
            map.set(m, (map.get(m) || 0) + 1);
            const need = (d - ((nums[l] + nums[r]) % d)) % d;
            const c = map.get(need);
            if (c) ans += c;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(divisibleTripletCount([3,3,4,7,8], 5)); // 3
console.log(divisibleTripletCount([3,3,3,3], 3)); // 4
console.log(divisibleTripletCount([3,3,3,3], 6)); // 0
console.log(divisibleTripletCount([1,2,3], 6)); // 1
console.log(divisibleTripletCount([1], 1)); // 0
