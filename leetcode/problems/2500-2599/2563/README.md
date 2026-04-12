# [2563] Count the Number of Fair Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-fair-pairs/description/)

* algorithms
* Medium (52.68%)
* Likes:    2015
* Dislikes: 150
* Testcase Example:  '[0,1,7,4,4,5]\n3\n6'

```md
Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.
A pair (i, j) is fair if:

0 <= i < j < n, and
lower <= nums[i] + nums[j] <= upper


Example 1:

Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
Output: 6
Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).

Example 2:

Input: nums = [1,7,9,2,5], lower = 11, upper = 11
Output: 1
Explanation: There is a single fair pair: (2,3).


Constraints:

1 <= nums.length <= 105
nums.length == n
-109<= nums[i] <= 109
-109<= lower <= upper <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums 和两个整数 lower、upper，返回满足 0 <= i < j < n 且 lower <= nums[i] + nums[j] <= upper 的数对 (i, j) 的个数。

## 解题思路

**排序 + 双指针**

排序不影响数对计数（只是不关心原始索引）。排序后对每个 nums[i]，用二分查找在 i+1..n-1 中找满足 lower <= nums[i] + nums[j] <= upper 的范围。

具体：对每个 i，在 nums[i+1..n-1] 中找 nums[j] >= lower - nums[i] 的最小位置 left，和 nums[j] <= upper - nums[i] 的最大位置 right，贡献为 right - left + 1。

用二分查找实现。时间复杂度 O(n log n)，空间复杂度 O(1)。
