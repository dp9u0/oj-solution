# [1979] Find Greatest Common Divisor of Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/)

* algorithms
* Easy (79.81%)
* Likes:    1307
* Dislikes: 55
* Testcase Example:  '[2,5,6,9,10]'

```md
Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Example 1:

Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.

Example 2:

Input: nums = [7,5,6,8,3]
Output: 1
Explanation:
The smallest number in nums is 3.
The largest number in nums is 8.
The greatest common divisor of 3 and 8 is 1.

Example 3:

Input: nums = [3,3]
Output: 3
Explanation:
The smallest number in nums is 3.
The largest number in nums is 3.
The greatest common divisor of 3 and 3 is 3.


Constraints:

2 <= nums.length <= 1000
1 <= nums[i] <= 1000


```

## 翻译

给定整数数组，返回数组中最小值和最大值的最大公约数。

## Approach

找到最小值和最大值，用辗转相除法求 gcd。

时间复杂度 O(n + log(max))，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
