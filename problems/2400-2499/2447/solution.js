/*
 * @lc app=leetcode id=2447 lang=javascript
 *
 * [2447] Number of Subarrays With GCD Equal to K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function(nums, k) {
    const gcd = (a, b) => {
        while (b) { [a, b] = [b, a % b]; }
        return a;
    };

    let ans = 0;
    let prev = new Map(); // gcd value -> count of subarrays ending at previous position

    for (const num of nums) {
        const curr = new Map();
        curr.set(num, 1);
        for (const [g, cnt] of prev) {
            const newG = gcd(g, num);
            curr.set(newG, (curr.get(newG) || 0) + cnt);
        }
        ans += (curr.get(k) || 0);
        prev = curr;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(subarrayGCD([9,3,1,2,6,3], 3)); // 4
console.log(subarrayGCD([4], 7));             // 0
console.log(subarrayGCD([3,3,3], 3));         // 6
