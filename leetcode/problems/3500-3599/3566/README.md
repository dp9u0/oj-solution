# [3566] Partition Array into Two Equal Product Subsets

## Description

[LeetCode Problem Description](https://leetcode.com/problems/partition-array-into-two-equal-product-subsets/description/)

* algorithms
* Medium (35.11%)
* Likes:    87
* Dislikes: 21
* Testcase Example:  '[3,1,6,8,4]\n24'

```md
You are given an integer array nums containing distinct positive integers and an integer target.
Determine if you can partition nums into two non-empty disjoint subsets, with each element belonging to exactly one subset, such that the product of the elements in each subset is equal to target.
Return true if such a partition exists and false otherwise.
A subset of an array is a selection of elements of the array.

Example 1:

Input: nums = [3,1,6,8,4], target = 24
Output: true
Explanation: The subsets [3, 8] and [1, 6, 4] each have a product of 24. Hence, the output is true.

Example 2:

Input: nums = [2,5,3,7], target = 15
Output: false
Explanation: There is no way to partition nums into two non-empty disjoint subsets such that both subsets have a product of 15. Hence, the output is false.


Constraints:

3 <= nums.length <= 12
1 <= target <= 1015
1 <= nums[i] <= 100
All elements of nums are distinct.


```

## 题目翻译

给定互不相同的正整数数组 nums 和整数 target。判断能否将 nums 分成两个非空不相交子集，使得每个子集的元素乘积都等于 target。

## 解题思路

**位枚举 + BigInt**。

- n <= 12，2^n = 4096，可以枚举所有子集。
- 首先验证所有元素的总乘积是否等于 target^2（不等于则一定不行）。
- 然后用位掩码枚举所有非空真子集，用 BigInt 计算乘积并剪枝（超过 target 则跳过）。
- 找到一个乘积等于 target 的子集即返回 true。
- 总复杂度 O(2^n * n)。
