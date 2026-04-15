# [3434] Maximum Frequency After Subarray Operation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-frequency-after-subarray-operation/description/)

* algorithms
* Medium (31.05%)
* Likes:    270
* Dislikes: 36
* Testcase Example:  '[1,2,3,4,5,6]\n1'

```md
You are given an array nums of length n. You are also given an integer k.
You perform the following operation on nums once:

Select a subarray nums[i..j] where 0 <= i <= j <= n - 1.
Select an integer x and add x to all the elements in nums[i..j].

Find the maximum frequency of the value k after the operation.

Example 1:

Input: nums = [1,2,3,4,5,6], k = 1
Output: 2
Explanation:
After adding -5 to nums[2..5], 1 has a frequency of 2 in [1, 2, -2, -1, 0, 1].

Example 2:

Input: nums = [10,2,3,4,5,5,4,3,2,2], k = 10
Output: 4
Explanation:
After adding 8 to nums[1..9], 10 has a frequency of 4 in [10, 10, 11, 12, 13, 13, 12, 11, 10, 10].


Constraints:

1 <= n == nums.length <= 105
1 <= nums[i] <= 50
1 <= k <= 50


```

## 中文翻译

给定数组 nums 和整数 k。选择一个子数组并给所有元素加上同一个整数 x，使操作后 k 的出现次数最大化。

## 解题思路

对每个值 v（1-50，v≠k），考虑将 v 变为 k（即 x = k-v）。对数组做变换：nums[i]=v 的位置为 +1，nums[i]=k 的位置为 -1，其余为 0。用 Kadane 算法求最大子数组和，即为选择该 v 时的最大净增益（convert 的 v 个数 - 损失的 k 个数）。遍历所有 v 取最大增益，加上原始 k 的计数。

时间复杂度：O(50n) = O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
