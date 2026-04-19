# [491] Non-decreasing Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/non-decreasing-subsequences/description/)

* algorithms
* Medium (62.58%)
* Likes:    3826
* Dislikes: 239
* Testcase Example:  '[4,6,7,7]'

```md
Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may return the answer in any order.

Example 1:

Input: nums = [4,6,7,7]
Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

Example 2:

Input: nums = [4,4,3,2,1]
Output: [[4,4]]


Constraints:

1 <= nums.length <= 15
-100 <= nums[i] <= 100


```

## 中文翻译

给定整数数组 nums，返回所有不同的非递减子序列（长度 >= 2）。

## 解题思路

**回溯 + 同层去重**

DFS 遍历数组，维护当前路径 path。每层用 set 记录已选过的值，避免同层重复。只有当前值 >= path 末尾时才加入。path 长度 >= 2 时加入结果。

时间复杂度：O(2^n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
