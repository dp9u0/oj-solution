# [1524] Number of Sub-arrays With Odd Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/description/)

* algorithms
* Medium (55.71%)
* Likes:    2076
* Dislikes: 102
* Testcase Example:  '[1,3,5]'

```md
Given an array of integers arr, return the number of subarrays with an odd sum.
Since the answer can be very large, return it modulo 109 + 7.

Example 1:

Input: arr = [1,3,5]
Output: 4
Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
All sub-arrays sum are [1,4,9,3,8,5].
Odd sums are [1,9,3,5] so the answer is 4.

Example 2:

Input: arr = [2,4,6]
Output: 0
Explanation: All subarrays are [[2],[2,4],[2,4,6],[4],[4,6],[6]]
All sub-arrays sum are [2,6,12,4,10,6].
All sub-arrays have even sum and the answer is 0.

Example 3:

Input: arr = [1,2,3,4,5,6,7]
Output: 16


Constraints:

1 <= arr.length <= 105
1 <= arr[i] <= 100


```

## 中文翻译

给定整数数组 arr，返回和为奇数的子数组个数。结果模 10^9+7。

## 解题思路

前缀和+奇偶计数。前缀和初始为 0（偶数）。遍历时维护奇/偶前缀和个数，子数组 [i,j] 和为奇 iff prefix[j] 与 prefix[i-1] 奇偶不同。每步更新答案。

## Solution

[SourceCode](./solution.js)
