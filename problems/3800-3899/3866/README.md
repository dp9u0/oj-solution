# [3866] First Unique Even Element

## Description

[LeetCode Problem Description](https://leetcode.com/problems/first-unique-even-element/description/)

* algorithms
* Easy (66.25%)
* Likes:    38
* Dislikes: -
* Testcase Example:  '[3,4,2,5,4,6]'

```md
You are given an integer array nums.
Return an integer denoting the first even integer (earliest by array index) that appears exactly once in nums. If no such integer exists, return -1.
An integer x is considered even if it is divisible by 2.

Example 1:

Input: nums = [3,4,2,5,4,6]
Output: 2
Explanation:
Both 2 and 6 are even and they appear exactly once. Since 2 occurs first in the array, the answer is 2.

Example 2:

Input: nums = [4,4]
Output: -1
Explanation:
No even integer appears exactly once, so return -1.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100


```

## 翻译

给定整数数组，返回第一个只出现一次的偶数。不存在返回 -1。

## 解题思路

用 Map 统计偶数出现次数，再遍历找第一个出现一次的偶数。

## Solution

[SourceCode](./solution.js)
