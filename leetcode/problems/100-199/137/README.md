# [137] Single Number II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/single-number-ii/description/)

* algorithms
* Medium (49.21%)
* Testcase Example:  '[2,2,3,2]'

```md
Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
Example 1:
Input: [2,2,3,2]
Output: 3
Example 2:
Input: [0,1,0,1,0,1,99]
Output: 99

```

## Solution

利用亦或的特性 `a ^ b ^a = b`

[SourceCode](./solution.js)
