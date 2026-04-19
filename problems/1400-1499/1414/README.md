# [1414] Find the Minimum Number of Fibonacci Numbers Whose Sum Is K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/description/)

* algorithms
* Medium (64.87%)
* Likes:    1053
* Dislikes: 68
* Testcase Example:  '7'

```md
Given an integerk, return the minimum number of Fibonacci numbers whose sum is equal to k. The same Fibonacci number can be used multiple times.
The Fibonacci numbers are defined as:

F1 = 1
F2 = 1
Fn = Fn-1 + Fn-2 for n > 2.

It is guaranteed that for the given constraints we can always find such Fibonacci numbers that sum up to k.

Example 1:

Input: k = 7
Output: 2
Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ...
For k = 7 we can use 2 + 5 = 7.
Example 2:

Input: k = 10
Output: 2
Explanation: For k = 10 we can use 2 + 8 = 10.

Example 3:

Input: k = 19
Output: 3
Explanation: For k = 19 we can use 1 + 5 + 13 = 19.


Constraints:

1 <= k <= 109


```

## 翻译

给定整数 k，求最少需要多少个斐波那契数（可重复使用）的和等于 k。

## Approach

贪心：先生成所有不超过 k 的斐波那契数，然后从大到小贪心选取。每次选不超过剩余值的最大斐波那契数，减去后继续。

时间复杂度 O(log k)（斐波那契数列增长指数级），空间复杂度 O(log k)。

## Solution

[SourceCode](./solution.js)
