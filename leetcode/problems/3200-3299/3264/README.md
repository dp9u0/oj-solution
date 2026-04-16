# [3264] Final Array State After K Multiplication Operations I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/description/)

* algorithms
* Easy (86.93%)
* Likes:    551
* Dislikes: 13
* Testcase Example:  '[2,1,3,5,6]\n5\n2'

```md
You are given an integer array nums, an integer k, and an integer multiplier.
You need to perform k operations on nums. In each operation:

Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
Replace the selected minimum value x with x * multiplier.

Return an integer array denoting the final state of nums after performing all k operations.

Example 1:

Input: nums = [2,1,3,5,6], k = 5, multiplier = 2
Output: [8,4,6,5,6]
Explanation:



Operation
Result


After operation 1
[2, 2, 3, 5, 6]


After operation 2
[4, 2, 3, 5, 6]


After operation 3
[4, 4, 3, 5, 6]


After operation 4
[4, 4, 6, 5, 6]


After operation 5
[8, 4, 6, 5, 6]




Example 2:

Input: nums = [1,2], k = 3, multiplier = 4
Output: [16,8]
Explanation:



Operation
Result


After operation 1
[4, 2]


After operation 2
[4, 8]


After operation 3
[16, 8]





Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
1 <= k <= 10
1 <= multiplier <= 5


```

## 中文翻译

给定整数数组 nums、整数 k 和 multiplier。执行 k 次操作：每次找到最小值（有多个取最前面的），将其乘以 multiplier。返回最终数组。

## 解题思路

直接模拟 k 次操作，每次找最小值下标并乘以 multiplier。k <= 10，数据量很小。

## Solution

[SourceCode](./solution.js)
