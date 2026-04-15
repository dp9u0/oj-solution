# [1802] Maximum Value at a Given Index in a Bounded Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/description/)

* algorithms
* Medium (38.87%)
* Likes:    2728
* Dislikes: 478
* Testcase Example:  '4\n2\n6'

```md
You are given three positive integers:n, index, and maxSum. You want to construct an array nums (0-indexed) that satisfies the following conditions:

nums.length == n
nums[i] is a positive integer where 0 <= i < n.
abs(nums[i] - nums[i+1]) <= 1 where 0 <= i < n-1.
The sum of all the elements of nums does not exceed maxSum.
nums[index] is maximized.

Return nums[index] of the constructed array.
Note that abs(x) equals x if x >= 0, and -x otherwise.

Example 1:

Input: n = 4, index = 2,  maxSum = 6
Output: 2
Explanation: nums = [1,2,2,1] is one array that satisfies all the conditions.
There are no arrays that satisfy all the conditions and have nums[2] == 3, so 2 is the maximum nums[2].

Example 2:

Input: n = 6, index = 1,  maxSum = 10
Output: 3


Constraints:

1 <= n <= maxSum <= 109
0 <= index < n


```

## 中文翻译

构造长度为 n 的正整数数组，相邻元素差不超过 1，总和不超过 maxSum，使 nums[index] 最大。

## 解题思路

二分答案。设 nums[index] = x，则左侧和右侧形成以 x 为峰的山形（降到 1 后保持 1）。用等差数列公式计算总和，检查是否 <= maxSum。

左侧：从 index 向左，值为 x, x-1, ..., 到 1 或用完空间。右侧类似。

时间复杂度：O(log(maxSum))，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
