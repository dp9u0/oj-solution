# [3852] Smallest Pair With Different Frequencies

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-pair-with-different-frequencies/description/)

* algorithms
* Easy (69.36%)
* Likes:    31
* Dislikes: 4
* Testcase Example:  '[1,1,2,2,3,4]'

```md
You are given an integer array nums.
Consider all pairs of distinct values x and y from nums such that:

x < y
x and y have different frequencies in nums.

Among all such pairs:

Choose the pair with the smallest possible value of x.
If multiple pairs have the same x, choose the one with the smallest possible value of y.

Return an integer array [x, y]. If no valid pair exists, return [-1, -1].

Example 1:

Input: nums = [1,1,2,2,3,4]
Output: [1,3]
Explanation:
The smallest value is 1 with a frequency of 2, and the smallest value greater than 1 that has a different frequency from 1 is 3 with a frequency of 1. Thus, the answer is [1, 3].

Example 2:

Input: nums = [1,5]
Output: [-1,-1]
Explanation:
Both values have the same frequency, so no valid pair exists. Return [-1, -1].

Example 3:

Input: nums = [7]
Output: [-1,-1]
Explanation:
There is only one value in the array, so no valid pair exists. Return [-1, -1].


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100


```

## 题目翻译

给定数组 nums，找最小的不同值对 (x, y) 满足 x < y 且 x, y 在数组中出现频率不同。返回 [x, y]，无则 [-1, -1]。

## 解题思路

统计频率后按值排序，对每个值找第一个频率不同的更大值。O(n^2) 或 O(n) 均可（n ≤ 100）。

## Solution

[SourceCode](./solution.js)
