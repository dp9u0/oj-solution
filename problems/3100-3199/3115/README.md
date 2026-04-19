# [3115] Maximum Prime Difference

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-prime-difference/description/)

* algorithms
* Medium (58.78%)
* Likes:    128
* Dislikes: 16
* Testcase Example:  '[4,2,9,5,3]'

```md
You are given an integer array nums.
Return an integer that is the maximum distance between the indices of two (not necessarily different) prime numbers in nums.

Example 1:

Input: nums = [4,2,9,5,3]
Output: 3
Explanation: nums[1], nums[3], and nums[4] are prime. So the answer is
4 - 1
= 3.

Example 2:

Input: nums = [4,8,2,8]
Output: 0
Explanation: nums[2] is prime. Because there is just one prime number, the answer is
2 - 2
= 0.


Constraints:

1 <= nums.length <= 3 * 105
1 <= nums[i] <= 100
The input is generated such that the number of prime numbers in the nums is at least one.


```

## 中文翻译

给定整数数组 nums，返回数组中两个质数下标之间的最大距离（保证至少有一个质数）。nums[i] <= 100。

## 解题思路

nums[i] <= 100，预计算 100 以内的质数集合。遍历数组找第一个和最后一个质数的下标，其差即为答案。

## Solution

[SourceCode](./solution.js)
