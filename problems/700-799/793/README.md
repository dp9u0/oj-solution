# [793] Preimage Size of Factorial Zeroes Function

## Description

[LeetCode Problem Description](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/description/)

* algorithms
* Hard (46.88%)
* Likes:    474
* Dislikes: 104
* Testcase Example:  '0'

```md
Let f(x) be the number of zeroes at the end of x!. Recall that x! = 1 * 2 * 3 * ... * x and by convention, 0! = 1.

For example, f(3) = 0 because 3! = 6 has no zeroes at the end, while f(11) = 2 because 11! = 39916800 has two zeroes at the end.

Given an integer k, return the number of non-negative integers x have the property that f(x) = k.

Example 1:

Input: k = 0
Output: 5
Explanation: 0!, 1!, 2!, 3!, and 4! end with k = 0 zeroes.

Example 2:

Input: k = 5
Output: 0
Explanation: There is no x such that x! ends in k = 5 zeroes.

Example 3:

Input: k = 3
Output: 5


Constraints:

0 <= k <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

定义 f(x) 为 x! 末尾零的个数。给定整数 k，求有多少个非负整数 x 满足 f(x) = k。

## 解题思路

f(x) 是非递减函数，满足 f(x)=k 的 x 构成连续区间（可能为空）。用二分查找找 left = 最小 x 使得 f(x) >= k，right = 最小 x 使得 f(x) >= k+1。如果 f(left) == k，答案为 right - left，否则为 0。答案要么是 0 要么是 5。
