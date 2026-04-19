# [3850] Count Sequences to K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-sequences-to-k/description/)

* algorithms
* Hard (35.89%)
* Likes:    91
* Dislikes: 7
* Testcase Example:  '[2,3,2]\n6'

```md
You are given an integer array nums, and an integer k.
Start with an initial value val = 1 and process nums from left to right. At each index i, you must choose exactly one of the following actions:

Multiply val by nums[i].
Divide val by nums[i].
Leave val unchanged.

After processing all elements, val is considered equal to k only if its final rational value exactly equals k.
Return the count of distinct sequences of choices that result in val == k.
Note: Division is rational (exact), not integer division. For example, 2 / 4 = 1 / 2.

Example 1:

Input: nums = [2,3,2], k = 6
Output: 2
Explanation:
The following 2 distinct sequences of choices result in val == k:



Sequence
Operation on nums[0]
Operation on nums[1]
Operation on nums[2]
Final val




1
Multiply: val = 1 * 2 = 2
Multiply: val = 2 * 3 = 6
Leave val unchanged
6


2
Leave val unchanged
Multiply: val = 1 * 3 = 3
Multiply: val = 3 * 2 = 6
6




Example 2:

Input: nums = [4,6,3], k = 2
Output: 2
Explanation:
The following 2 distinct sequences of choices result in val == k:



Sequence
Operation on nums[0]
Operation on nums[1]
Operation on nums[2]
Final val




1
Multiply: val = 1 * 4 = 4
Divide: val = 4 / 6 = 2 / 3
Multiply: val = (2 / 3) * 3 = 2
2


2
Leave val unchanged
Multiply: val = 1 * 6 = 6
Divide: val = 6 / 3 = 2
2




Example 3:

Input: nums = [1,5], k = 1
Output: 3
Explanation:
The following 3 distinct sequences of choices result in val == k:



Sequence
Operation on nums[0]
Operation on nums[1]
Final val




1
Multiply: val = 1 * 1 = 1
Leave val unchanged
1


2
Divide: val = 1 / 1 = 1
Leave val unchanged
1


3
Leave val unchanged
Leave val unchanged
1





Constraints:

1 <= nums.length <= 19
1 <= nums[i] <= 6
1 <= k <= 1015


```

## 中文翻译

给定数组 nums（值1-6）和整数 k。初始 val=1，对每个 nums[i] 可选：乘以/除以/不变。除法是有理数精确除法。求最终 val 恰好等于 k 的操作序列数。

约束：n <= 19, nums[i] <= 6, k <= 10^15

## 解题思路

**质因子指数 DP**

1. nums[i] ∈ {1..6}，质因子只有 2,3,5。val 始终为 2^a * 3^b * 5^c 形式。
2. 将 k 分解为 2^a * 3^b * 5^c（若含其他质因子则返回 0）。
3. 每步操作等价于对 (a,b,c) 加/减/不变 nums[i] 的质因子指数。
4. DP 维护 Map<指数三元组, 方案数>，19步后查目标三元组。

## Solution

[SourceCode](./solution.js)
