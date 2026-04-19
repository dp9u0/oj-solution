# [3745] Maximize Expression of Three Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-expression-of-three-elements/description/)

* algorithms
* Easy (72.58%)
* Likes:    52
* Dislikes: 1
* Testcase Example:  '[1,4,2,5]'

```md
You are given an integer array nums.
Choose three elements a, b, and c from nums at distinct indices such that the value of the expression a + b - c is maximized.
Return an integer denoting the maximum possible value of this expression.

Example 1:

Input: nums = [1,4,2,5]
Output: 8
Explanation:
We can choose a = 4, b = 5, and c = 1. The expression value is 4 + 5 - 1 = 8, which is the maximum possible.

Example 2:

Input: nums = [-2,0,5,-2,4]
Output: 11
Explanation:
We can choose a = 5, b = 4, and c = -2. The expression value is 5 + 4 - (-2) = 11, which is the maximum possible.


Constraints:

3 <= nums.length <= 100
-100 <= nums[i] <= 100


```

## 题目翻译

给定整数数组 nums，从不同索引选三个元素 a, b, c，使 a+b-c 最大。返回最大值。

## 解题思路

n ≤ 100，O(n^3) 枚举即可。或更优：答案 = 最大的两个不同索引元素之和 - 最小的不同索引元素。

## Solution

[SourceCode](./solution.js)
