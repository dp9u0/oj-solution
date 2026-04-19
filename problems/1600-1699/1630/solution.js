/*
 * @lc app=leetcode id=1630 lang=javascript
 *
 * [1630] Arithmetic Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const isArithmetic = (start, end) => {
        const sub = nums.slice(start, end + 1);
        sub.sort((a, b) => a - b);
        const diff = sub[1] - sub[0];
        for (let i = 2; i < sub.length; i++) {
            if (sub[i] - sub[i - 1] !== diff) return false;
        }
        return true;
    };

    return l.map((li, i) => isArithmetic(li, r[i]));
};
// @lc code=end

// TEST:
console.log(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5])); // [true,false,true]
console.log(checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10])); // [false,true,false,false,true,true]
