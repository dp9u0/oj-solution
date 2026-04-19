# [3289] The Two Sneaky Numbers of Digitville

## Description

[LeetCode Problem Description](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/description/)

* algorithms
* Easy (89.79%)
* Likes:    526
* Dislikes: 22
* Testcase Example:  '[0,1,1,0]'

```md
In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.
As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

Example 1:

Input: nums = [0,1,1,0]
Output: [0,1]
Explanation:
The numbers 0 and 1 each appear twice in the array.

Example 2:

Input: nums = [0,3,2,1,3,2]
Output: [2,3]
Explanation:
The numbers 2 and 3 each appear twice in the array.

Example 3:

Input: nums = [7,1,5,4,3,4,6,0,9,5,8,2]
Output: [4,5]
Explanation:
The numbers 4 and 5 each appear twice in the array.


Constraints:

2 <= n <= 100
nums.length == n + 2
0 <= nums[i] < n
The input is generated such that nums contains exactly two repeated elements.


```

## 中文翻译

数组应包含 0 到 n-1 各一次，但有两个数多出现了一次。找出这两个重复数。

## 解题思路

计数数组，出现第二次时收集。O(n) 时间。

## Solution

[SourceCode](./solution.js)
