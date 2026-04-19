# [2818] Apply Operations to Maximize Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/apply-operations-to-maximize-score/description/)

* algorithms
* Hard (53.63%)
* Likes:    775
* Dislikes: 127
* Testcase Example:  '[8,3,9,3,8]\n2'

```md
You are given an array nums of n positive integers and an integer k.
Initially, you start with a score of 1. You have to maximize your score by applying the following operation at most k times:

Choose any non-empty subarray nums[l, ..., r] that you haven&#39;t chosen previously.
Choose an element x of nums[l, ..., r] with the highest prime score. If multiple such elements exist, choose the one with the smallest index.
Multiply your score by x.

Here, nums[l, ..., r] denotes the subarray of nums starting at index l and ending at the index r, both ends being inclusive.
The prime score of an integer x is equal to the number of distinct prime factors of x. For example, the prime score of 300 is 3 since 300 = 2 * 2 * 3 * 5 * 5.
Return the maximum possible score after applying at most k operations.
Since the answer may be large, return it modulo 109 + 7.

Example 1:

Input: nums = [8,3,9,3,8], k = 2
Output: 81
Explanation: To get a score of 81, we can apply the following operations:
- Choose subarray nums[2, ..., 2]. nums[2] is the only element in this subarray. Hence, we multiply the score by nums[2]. The score becomes 1 * 9 = 9.
- Choose subarray nums[2, ..., 3]. Both nums[2] and nums[3] have a prime score of 1, but nums[2] has the smaller index. Hence, we multiply the score by nums[2]. The score becomes 9 * 9 = 81.
It can be proven that 81 is the highest score one can obtain.
Example 2:

Input: nums = [19,12,14,6,10,18], k = 3
Output: 4788
Explanation: To get a score of 4788, we can apply the following operations:
- Choose subarray nums[0, ..., 0]. nums[0] is the only element in this subarray. Hence, we multiply the score by nums[0]. The score becomes 1 * 19 = 19.
- Choose subarray nums[5, ..., 5]. nums[5] is the only element in this subarray. Hence, we multiply the score by nums[5]. The score becomes 19 * 18 = 342.
- Choose subarray nums[2, ..., 3]. Both nums[2] and nums[3] have a prime score of 2, but nums[2] has the smaller index. Hence, we multipy the score by nums[2]. The score becomes 342 * 14 = 4788.
It can be proven that 4788 is the highest score one can obtain.


Constraints:

1 <= nums.length == n <= 105
1 <= nums[i] <= 105
1 <= k <= min(n * (n + 1) / 2, 109)


```

## 题目翻译

给定正整数数组 nums 和整数 k。初始分数为 1，最多执行 k 次操作：选一个未选过的子数组，取其中质数得分最高（相同时取最小下标）的元素乘入分数。质数得分 = 不同质因数的个数。返回最大分数 mod 10^9+7。

## 解题思路

**单调栈 + 贪心 + 快速幂**

1. **筛法**预处理每个数的质数得分（不同质因子数）
2. **单调栈**计算每个元素作为子数组"最优元素"能覆盖多少个子数组：
   - 左边界：最近且 score >= 当前（单调递减栈）
   - 右边界：最近且 score > 当前（严格大于，因为同分取小下标）
   - count[i] = (i - left) * (right - i)
3. **贪心**：按元素值降序排列，依次使用 min(count, remaining_k) 次
4. 用**快速幂**计算大指数乘法，全程 mod 10^9+7

## Solution

[SourceCode](./solution.js)
