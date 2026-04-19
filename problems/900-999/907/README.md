# [907] Sum of Subarray Minimums

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-subarray-minimums/description/)

* algorithms
* Medium (38.42%)
* Likes:    9242
* Dislikes: 740
* Testcase Example:  '[3,1,2,4]'

```md
Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

Example 1:

Input: arr = [3,1,2,4]
Output: 17
Explanation:
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.

Example 2:

Input: arr = [11,81,94,43,3]
Output: 444


Constraints:

1 <= arr.length <= 3 * 104
1 <= arr[i] <= 3 * 104


```

## 翻译

给定整数数组 arr，求所有连续子数组的最小值之和。结果对 10^9+7 取模。

## Approach

单调栈。对每个元素 arr[i]，计算它作为最小值的子数组贡献。用单调栈找左边和右边第一个比它小的元素位置：

- left[i]：左边第一个 < arr[i] 的位置（如果没有则为 -1）
- right[i]：右边第一个 <= arr[i] 的位置（如果没有则为 n）

贡献 = arr[i] * (i - left[i]) * (right[i] - i)

用两遍单调栈计算 left 和 right 数组。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
