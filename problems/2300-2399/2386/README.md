# [2386] Find the K-Sum of an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-k-sum-of-an-array/description/)

* algorithms
* Hard (41.34%)
* Likes:    613
* Dislikes: 26
* Testcase Example:  '[2,4,-2]\n5'

```md
You are given an integer array nums and a positive integer k. You can choose any subsequence of the array and sum all of its elements together.
We define the K-Sum of the array as the kth largest subsequence sum that can be obtained (not necessarily distinct).
Return the K-Sum of the array.
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
Note that the empty subsequence is considered to have a sum of 0.

Example 1:

Input: nums = [2,4,-2], k = 5
Output: 2
Explanation: All the possible subsequence sums that we can obtain are the following sorted in decreasing order:
6, 4, 4, 2, 2, 0, 0, -2.
The 5-Sum of the array is 2.

Example 2:

Input: nums = [1,-2,3,4,-10,12], k = 16
Output: 10
Explanation: The 16-Sum of the array is 10.


Constraints:

n == nums.length
1 <= n <= 105
-109 <= nums[i] <= 109
1 <= k <= min(2000, 2n)


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定整数数组 nums 和正整数 k，返回所有子序列和中第 k 大的值。空子序列和为 0。

### 解题思路

**最大和 + 最小堆求第 k 小损失**

1. 最大子序列和 `maxSum` = 所有正数之和
2. 将所有元素取绝对值后排序
3. 问题转化为：从绝对值数组中选子序列，求第 k 小的子序列和（损失量）
4. 用最小堆 BFS：初始 (0, 0)，每次弹出 (sum, index)，扩展 (sum + abs[i], i+1) 和 (sum, i+1) 两种（用"跳过"技巧避免重复）
5. 第 k 次弹出的值就是第 k 小损失，答案 = maxSum - kthLoss
