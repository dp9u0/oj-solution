/*
 * @lc app=leetcode.cn id=4053 lang=javascript
 *
 * [4053] 使每个元素变为回文数的最少操作次数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 预计算 ≤ 2000000002 的全部正回文，按奇偶分桶（模块级，只算一次）
const PAL_EVEN = [];
const PAL_ODD = [];
(function initPalindromes() {
    for (let half = 1; half <= 99999; half++) {
        const s = String(half);
        const r = s.split('').reverse().join('');
        const even = Number(s + r);          // 偶长度：half + reverse(half)
        const odd = Number(s + r.slice(1));  // 奇长度：half + reverse(half 去掉末位)
        if (even <= 2000000002) (even % 2 === 0 ? PAL_EVEN : PAL_ODD).push(even);
        if (odd <= 2000000002) (odd % 2 === 0 ? PAL_EVEN : PAL_ODD).push(odd);
    }
    PAL_EVEN.sort((a, b) => a - b);
    PAL_ODD.sort((a, b) => a - b);
})();

// 在有序回文列表中找离 x 最近的回文
const nearestPalindrome = (list, x) => {
    // 二分找最后一个 <= x 的位置
    let lo = 0, hi = list.length - 1, pos = -1;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (list[mid] <= x) { pos = mid; lo = mid + 1; }
        else hi = mid - 1;
    }
    let best = Infinity;
    if (pos >= 0) best = x - list[pos];
    if (pos + 1 < list.length) best = Math.min(best, list[pos + 1] - x);
    return best;
};

var minOperations = function(nums) {
    let ans = 0;
    for (const x of nums) {
        ans += nearestPalindrome(x % 2 === 0 ? PAL_EVEN : PAL_ODD, x) / 2;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minOperations([10, 12, 14, 16])); // Expected: 9
console.log(minOperations([9, 10, 11, 10])); // Expected: 0? 9/11 是回文; 10->8 距离2 => 1 次 x2 = 总 2
console.log(minOperations([1])); // Expected: 0
console.log(minOperations([2])); // Expected: 0 (2 是回文)
console.log(minOperations([1000000000])); // Expected: 距最近偶回文 / 2
