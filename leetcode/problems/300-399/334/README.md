# [334] Increasing Triplet Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/increasing-triplet-subsequence/description/)

* algorithms
* Medium (39.14%)
* Likes:    8481
* Dislikes: 637
* Testcase Example:  '[1,2,3,4,5]'

```md
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.


Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1


Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

```

## Solution

[SourceCode](./solution.js)

## 解题思路

1. **问题分析**：
   我们需要在数组中找到一个递增的三元子序列，即存在三个索引i < j < k，使得nums[i] < nums[j] < nums[k]。

2. **算法选择**：
   使用贪心算法，维护两个变量first和second，分别表示当前找到的最小值和次小值。遍历数组时，如果当前数字小于等于first，则更新first；如果大于first但小于等于second，则更新second；如果大于second，则说明找到了递增的三元组。

3. **复杂度分析**：
   - 时间复杂度：O(n)，只需遍历数组一次
   - 空间复杂度：O(1)，只使用了常数个额外变量

4. **边界条件**：
   - 数组长度小于3时直接返回false
   - 处理负数和大数的情况

## 中文题目

给定一个整数数组nums，判断是否存在三个下标(i, j, k)满足i < j < k且nums[i] < nums[j] < nums[k]。如果不存在这样的下标，返回false。

示例1:
输入: nums = [1,2,3,4,5]
输出: true
解释: 任何i < j < k的三元组都有效

示例2:
输入: nums = [5,4,3,2,1]
输出: false
解释: 不存在满足条件的三元组

示例3:
输入: nums = [2,1,5,0,4,6]
输出: true
解释: 三元组(3, 4, 5)满足条件，因为nums[3] == 0 < nums[4] == 4 < nums[5] == 6

约束条件:
1 <= nums.length <= 5 * 10^5
-2^31 <= nums[i] <= 2^31 - 1

进阶: 你能实现一个时间复杂度为O(n)且空间复杂度为O(1)的解决方案吗？
