/*
 * @lc app=leetcode id=2835 lang=javascript
 *
 * [2835] Minimum Operations to Form Subsequence With Target Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minOperations = function(nums, target) {
    const cnt = new Array(32).fill(0);
    let sum = 0;
    for (const x of nums) {
        cnt[31 - Math.clz32(x)]++;
        sum += x;
    }
    if (sum < target) return -1;

    let ops = 0;
    let carry = 0;
    for (let i = 0; i < 31; i++) {
        carry += cnt[i];
        const need = (target >> i) & 1;
        if (carry < need) {
            let j = i + 1;
            while (cnt[j] === 0) j++;
            cnt[j]--;
            for (let k = j - 1; k > i; k--) cnt[k]++;
            carry += 2;
            ops += j - i;
        }
        carry = (carry - need) >> 1;
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(minOperations([1,2,8], 7)); // 1
console.log(minOperations([1,32,1,2], 12)); // 2
console.log(minOperations([1,32,1], 35)); // -1
console.log(minOperations([1,1,1,1], 3)); // 0
console.log(minOperations([16,16], 2)); // 3
console.log(minOperations([4], 3)); // 3
console.log(minOperations([2,2], 2)); // 0
