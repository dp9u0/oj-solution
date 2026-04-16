# [1671] Minimum Number of Removals to Make Mountain Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/description/)

* algorithms
* Hard (54.78%)
* Likes:    2294
* Dislikes: 41
* Testcase Example:  '[1,3,1]'

```md
You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:

arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]



Given an integer array nums​​​, return the minimum number of elements to remove to make nums​​​ a mountain array.

Example 1:

Input: nums = [1,3,1]
Output: 0
Explanation: The array itself is a mountain array so we do not need to remove any elements.

Example 2:

Input: nums = [2,1,1,5,6,2,3,1]
Output: 3
Explanation: One solution is to remove the elements at indices 0, 1, and 5, making the array nums = [1,5,6,3,1].


Constraints:

3 <= nums.length <= 1000
1 <= nums[i] <= 109
It is guaranteed that you can make a mountain array out of nums.


```

## 中文翻译

给定数组 nums，求最少删除多少个元素使其变为山脉数组（存在峰 i，左侧严格递增，右侧严格递减，长度 >= 3）。

## 解题思路

等价于找最长山脉子序列。对每个位置 i，计算 left[i] = 以 i 结尾的最长严格递增子序列长度，right[i] = 以 i 开头的最长严格递减子序列长度。当 left[i]>=2 且 right[i]>=2 时，山脉长度 = left[i] + right[i] - 1。答案 = n - maxLen。

n <= 1000，O(n^2) DP 即可。

## Solution

[SourceCode](./solution.js)
