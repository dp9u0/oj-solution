# [2344] Minimum Deletions to Make Array Divisible

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/description/)

* algorithms
* Hard (61.01%)
* Likes:    589
* Dislikes: 134
* Testcase Example:  '[2,3,2,4,3]\n[9,6,9,3,15]'

```md
You are given two positive integer arrays nums and numsDivide. You can delete any number of elements from nums.
Return the minimum number of deletions such that the smallest element in nums divides all the elements of numsDivide. If this is not possible, return -1.
Note that an integer x divides y if y % x == 0.

Example 1:

Input: nums = [2,3,2,4,3], numsDivide = [9,6,9,3,15]
Output: 2
Explanation:
The smallest element in [2,3,2,4,3] is 2, which does not divide all the elements of numsDivide.
We use 2 deletions to delete the elements in nums that are equal to 2 which makes nums = [3,4,3].
The smallest element in [3,4,3] is 3, which divides all the elements of numsDivide.
It can be shown that 2 is the minimum number of deletions needed.

Example 2:

Input: nums = [4,3,6], numsDivide = [8,2,6,10]
Output: -1
Explanation:
We want the smallest element in nums to divide all the elements of numsDivide.
There is no way to delete elements from nums to allow this.

Constraints:

1 <= nums.length, numsDivide.length <= 105
1 <= nums[i], numsDivide[i] <= 109


```

## 翻译

给定 nums 和 numsDivide 数组。可删除 nums 中任意元素。求最少删除次数，使得 nums 中最小元素能整除 numsDivide 所有元素。不可能返回 -1。

## 解题思路

先求 numsDivide 所有元素的 GCD=G。能整除 G 的任何数都能整除 numsDivide 所有元素。排序 nums，找最小的 x 使得 G%x==0，删除所有比 x 小的元素即可。O(n log n)。

## Solution

[SourceCode](./solution.js)
