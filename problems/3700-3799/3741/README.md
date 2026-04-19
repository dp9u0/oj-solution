# [3741] Minimum Distance Between Three Equal Elements II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-distance-between-three-equal-elements-ii/description/)

* algorithms
* Medium (69.93%)
* Likes:    292
* Dislikes: 9
* Testcase Example:  '[1,2,1,1,3]'

```md
You are given an integer array nums.
A tuple (i, j, k) of 3 distinct indices is good if nums[i] == nums[j] == nums[k].
The distance of a good tuple is abs(i - j) + abs(j - k) + abs(k - i), where abs(x) denotes the absolute value of x.
Return an integer denoting the minimum possible distance of a good tuple. If no good tuples exist, return -1.

Example 1:

Input: nums = [1,2,1,1,3]
Output: 6
Explanation:
The minimum distance is achieved by the good tuple (0, 2, 3).
(0, 2, 3) is a good tuple because nums[0] == nums[2] == nums[3] == 1. Its distance is abs(0 - 2) + abs(2 - 3) + abs(3 - 0) = 2 + 1 + 3 = 6.

Example 2:

Input: nums = [1,1,2,3,2,1,2]
Output: 8
Explanation:
The minimum distance is achieved by the good tuple (2, 4, 6).
(2, 4, 6) is a good tuple because nums[2] == nums[4] == nums[6] == 2. Its distance is abs(2 - 4) + abs(4 - 6) + abs(6 - 2) = 2 + 2 + 4 = 8.

Example 3:

Input: nums = [1]
Output: -1
Explanation:
There are no good tuples. Therefore, the answer is -1.


Constraints:

1 <= n == nums.length <= 105
1 <= nums[i] <= n


```

## 中文翻译

给定数组 nums，找三个不同下标 i,j,k 使得 nums[i]==nums[j]==nums[k]，距离为 |i-j|+|j-k|+|k-i|，求最小距离。不存在返回 -1。

## 解题思路

按值分组收集下标。对于每组下标 positions，距离 = 2*(max - min)（因为排序后 i<j<k 时 |i-j|+|j-k|+|k-i| = 2*(k-i)）。最小化 k-i 即找任意三个连续下标中首尾差最小的，所以对每组取相邻三个下标的最小首尾差即可。

## Solution

[SourceCode](./solution.js)
