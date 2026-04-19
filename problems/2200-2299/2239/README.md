# [2239] Find Closest Number to Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-closest-number-to-zero/description/)

* algorithms
* Easy (47.83%)
* Likes:    807
* Dislikes: 57
* Testcase Example:  '[-4,-2,1,4,8]'

```md
Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

Example 1:

Input: nums = [-4,-2,1,4,8]
Output: 1
Explanation:
The distance from -4 to 0 is
-4
= 4.
The distance from -2 to 0 is
-2
= 2.
The distance from 1 to 0 is
1
= 1.
The distance from 4 to 0 is
4
= 4.
The distance from 8 to 0 is
8
= 8.
Thus, the closest number to 0 in the array is 1.

Example 2:

Input: nums = [2,-1,1]
Output: 1
Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.


Constraints:

1 <= n <= 1000
-105 <= nums[i] <= 105


```

## 中文翻译

给定整数数组 nums，返回最接近 0 的数。若距离相同，返回较大的那个。

## 解题思路

一次遍历，比较绝对值，绝对值相同时取较大的值。

## Solution

[SourceCode](./solution.js)
