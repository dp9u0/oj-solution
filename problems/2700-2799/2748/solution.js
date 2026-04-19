/*
 * @lc app=leetcode id=2748 lang=javascript
 *
 * [2748] Number of Beautiful Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const firstDigit = (x) => {
        while (x >= 10) x = Math.floor(x / 10);
        return x;
    };

    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        const fi = firstDigit(nums[i]);
        for (let j = i + 1; j < nums.length; j++) {
            if (gcd(fi, nums[j] % 10) === 1) cnt++;
        }
    }
    return cnt;
};
// @lc code=end

// TEST:
console.log(countBeautifulPairs([2,5,1,4]));       // 5
console.log(countBeautifulPairs([11,21,12]));      // 2
console.log(countBeautifulPairs([1,2,3,4,5]));     // 10
console.log(countBeautifulPairs([10,10,10]));      // 0 (last digit always 0, gcd with anything > 1... wait nums[i]%10 != 0 per constraint)
console.log(countBeautifulPairs([31,25,72,87,48])); // various
