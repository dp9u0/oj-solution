# [1413] Minimum Value to Get Positive Step by Step Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/description/)

* algorithms
* Easy (64.66%)
* Likes:    1681
* Dislikes: 387
* Testcase Example:  '[-3,2,-3,4,2]'

```md
Given an array of integersnums, you start with an initial positive value startValue.
In each iteration, you calculate the step by step sum of startValuepluselements in nums(from left to right).
Return the minimum positive value ofstartValue such that the step by step sum is never less than 1.

Example 1:

Input: nums = [-3,2,-3,4,2]
Output: 5
Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
step by step sum
startValue = 4
startValue = 5
nums
(4 -3 ) = 1
(5 -3 ) = 2
-3
(1 +2 ) = 3
(2 +2 ) = 4
2
(3 -3 ) = 0
(4 -3 ) = 1
-3
(0 +4 ) = 4
(1 +4 ) = 5
4
(4 +2 ) = 6
(5 +2 ) = 7
2

Example 2:

Input: nums = [1,2]
Output: 1
Explanation: Minimum start value should be positive.

Example 3:

Input: nums = [1,-2,-3]
Output: 5


Constraints:

1 <= nums.length <= 100
-100 <= nums[i] <= 100


```

## 题目翻译

给定整数数组，找一个最小正整数 startValue，使逐步和始终 >= 1。

## 解题思路

找到前缀和的最小值，startValue = max(1, 1 - minPrefix)。

## Solution

[SourceCode](./solution.js)
