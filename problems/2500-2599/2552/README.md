# [2552] Count Increasing Quadruplets

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-increasing-quadruplets/description/)

* algorithms
* Hard (34.51%)
* Likes:    402
* Dislikes: 73
* Testcase Example:  '[1,3,2,4,5]'

```md
Given a 0-indexed integer array nums of size n containing all numbers from 1 to n, return the number of increasing quadruplets.
A quadruplet (i, j, k, l) is increasing if:

0 <= i < j < k < l < n, and
nums[i] < nums[k] < nums[j] < nums[l].


Example 1:

Input: nums = [1,3,2,4,5]
Output: 2
Explanation:
- When i = 0, j = 1, k = 2, and l = 3, nums[i] < nums[k] < nums[j] < nums[l].
- When i = 0, j = 1, k = 2, and l = 4, nums[i] < nums[k] < nums[j] < nums[l].
There are no other quadruplets, so we return 2.

Example 2:

Input: nums = [1,2,3,4]
Output: 0
Explanation: There exists only one quadruplet with i = 0, j = 1, k = 2, l = 3, but since nums[j] < nums[k], we return 0.


Constraints:

4 <= nums.length <= 4000
1 <= nums[i] <= nums.length
All the integers of nums are unique. nums is a permutation.


```

## 翻译

给定 1~n 的排列 nums，统计满足 i<j<k<l 且 nums[i]<nums[k]<nums[j]<nums[l] 的四元组数量。即 1324 模式计数。

## 解题思路

固定中间两个索引 (j, k)，其中 j < k 且 nums[k] < nums[j]：
- less = j 前面小于 nums[k] 的元素数（即合法 i 的数量）
- greater = k 后面大于 nums[j] 的元素数（即合法 l 的数量）
- 贡献 = less × greater

对每个 j，用值域前缀和算 less，用后缀扫描算 greater。O(n²) 时间，O(n) 空间。

## Solution

[SourceCode](./solution.js)
