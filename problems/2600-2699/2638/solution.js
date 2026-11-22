/*
 * @lc app=leetcode.cn id=2638 lang=javascript
 *
 * [2638] 统计 K-Free 子集的总数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countTheNumOfKFreeSubsets = function(nums, k) {
    const present = new Set(nums);
    const visited = new Set();
    let ans = 1;
    for (const x of nums) {
        if (visited.has(x) || present.has(x - k)) continue; // not a chain start
        let len = 0, cur = x;
        while (present.has(cur)) {
            visited.add(cur);
            len++;
            cur += k;
        }
        // house-robber: F(0)=1, F(1)=2, F(L) = F(L-1) + F(L-2)
        let a = 1, b = 2;
        for (let t = 2; t <= len; t++) {
            const c = a + b;
            a = b;
            b = c;
        }
        ans *= b;
    }
    return Number(ans);
};
// @lc code=end

// TEST:
console.log(countTheNumOfKFreeSubsets([5,4,6], 1)); // 5
console.log(countTheNumOfKFreeSubsets([2,3,5,8], 5)); // 12
console.log(countTheNumOfKFreeSubsets([10,5,9,11], 20)); // 16
console.log(countTheNumOfKFreeSubsets([1], 1)); // 2
console.log(countTheNumOfKFreeSubsets([4,8,12,16], 4)); // 8 (one chain len 4: F(4)=1+2+3+5-... F: 1,2,3,5,8 -> F(4)=8? F(0)=1,F(1)=2,F(2)=3,F(3)=5,F(4)=8 -> 8)
