/*
 * @lc app=leetcode.cn id=4063 lang=javascript
 *
 * [4063] 至多一次取反能被 K 整除的最长子数组 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestSubarray = function(nums, k) {
    const minaveloru = nums;
    const n = minaveloru.length;
    const mod = (x) => ((x % k) + k) % k;
    let ans = 0;
    for (let l = 0; l < n - ans; l++) {
        const seen = new Set(); // 窗口内 mod(2 * nums[t]) 的集合
        let sum = 0;
        for (let r = l; r < n; r++) {
            seen.add(mod(2 * minaveloru[r]));
            sum += minaveloru[r];
            // 取反 x 使和变为 S - 2x：有效 ⇔ S ≡ 0 或存在 2x ≡ S (mod k)
            if (mod(sum) === 0 || seen.has(mod(sum))) {
                ans = Math.max(ans, r - l + 1);
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(longestSubarray([4, 1, 2], 3)); // 3 (取反 2 后和为 3)
console.log(longestSubarray([5, 3, 4], 7)); // 2 ([3,4] 和为 7)
console.log(longestSubarray([2, 2, 5], 6)); // 2 ([2,2] 取反任一后和为 0)
console.log(longestSubarray([3], 3)); // 1 (单元素整除)
console.log(longestSubarray([1], 3)); // 0 (无有效子数组)
console.log(longestSubarray([0, 0], 5)); // 2 (和为 0)
console.log(longestSubarray([-1, -2], 3)); // 2 (和 -3 整除)
console.log(longestSubarray([1, 2, 3], 6)); // 3 (和为 6)
