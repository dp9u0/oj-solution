# [2654] Minimum Number of Operations to Make All Array Elements Equal to 1

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/description/)

* algorithms
* Medium (54.70%)
* Likes:    787
* Dislikes: 49
* Testcase Example:  '[2,6,3,4]'

```md
You are given a 0-indexedarray nums consisting of positive integers. You can do the following operation on the array any number of times:

Select an index i such that 0 <= i < n - 1 and replace either ofnums[i] or nums[i+1] with their gcd value.

Return the minimum number of operations to make all elements of nums equal to 1. If it is impossible, return -1.
The gcd of two integers is the greatest common divisor of the two integers.

Example 1:

Input: nums = [2,6,3,4]
Output: 4
Explanation: We can do the following operations:
- Choose index i = 2 and replace nums[2] with gcd(3,4) = 1. Now we have nums = [2,6,1,4].
- Choose index i = 1 and replace nums[1] with gcd(6,1) = 1. Now we have nums = [2,1,1,4].
- Choose index i = 0 and replace nums[0] with gcd(2,1) = 1. Now we have nums = [1,1,1,4].
- Choose index i = 2 and replace nums[3] with gcd(1,4) = 1. Now we have nums = [1,1,1,1].

Example 2:

Input: nums = [2,10,6,14]
Output: -1
Explanation: It can be shown that it is impossible to make all the elements equal to 1.


Constraints:

2 <= nums.length <= 50
1 <= nums[i] <= 106


```

## 中文翻译

给定正整数数组，操作：选相邻两个数，将其中一个替换为它们的 gcd。求使所有元素变为 1 的最小操作数，不可能则返回 -1。

## 解题思路

先看是否已有 1，有则只需 n - count(1) 次操作（每个非 1 元素与 1 做 gcd）。否则找最短的连续子数组使其 gcd 为 1，长度为 len 则需 len-1 次操作产生第一个 1，然后 n-1 次操作传播。总操作数 = (len-1) + (n-1)。若整个数组 gcd 不为 1 则返回 -1。

## Solution

[SourceCode](./solution.js)
