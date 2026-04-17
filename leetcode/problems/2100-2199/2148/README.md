# [2148] Count Elements With Strictly Smaller and Greater Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/description/)

* algorithms
* Easy (59.90%)
* Likes:    719
* Dislikes: 46
* Testcase Example:  '[11,7,2,15]'

```md
Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

Example 1:

Input: nums = [11,7,2,15]
Output: 2
Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.

Example 2:

Input: nums = [-3,3,3,90]
Output: 2
Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.


Constraints:

1 <= nums.length <= 100
-105 <= nums[i] <= 105


```

## 题目翻译

给定数组 nums，返回既有严格更小元素又有严格更大元素的元素个数。

## 解题思路

**min/max 过滤**

找最小值 mn 和最大值 mx，统计 mn < x < mx 的元素个数。O(n)。

## Solution

[SourceCode](./solution.js)
