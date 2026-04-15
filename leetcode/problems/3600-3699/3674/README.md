# [3674] Minimum Operations to Equalize Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-equalize-array/description/)

* algorithms
* Easy (60.29%)
* Likes:    60
* Dislikes: 12
* Testcase Example:  '[1,2]'

```md
You are given an integer array nums of length n.
In one operation, choose any subarray nums[l...r] (0 <= l <= r < n) and replace each element in that subarray with the bitwise AND of all elements.
Return the minimum number of operations required to make all elements of nums equal.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,2]
Output: 1
Explanation:
Choose nums[0...1]: (1 AND 2) = 0, so the array becomes [0, 0] and all elements are equal in 1 operation.

Example 2:

Input: nums = [5,5,5]
Output: 0
Explanation:
nums is [5, 5, 5] which already has all elements equal, so 0 operations are required.


Constraints:

1 <= n == nums.length <= 100
1 <= nums[i] <= 105


```

## 中文翻译

给定整数数组 nums，每次操作选一个子数组，将其中每个元素替换为该子数组所有元素的按位与。
返回使所有元素相等的最少操作次数。

## 解题思路

如果所有元素已经相等，返回 0。否则，选择整个数组作为子数组，所有元素变为全局 AND，一次操作即可。

## Solution

[SourceCode](./solution.js)
