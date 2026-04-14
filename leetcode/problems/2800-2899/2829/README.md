# [2829] Determine the Minimum Sum of a k-avoiding Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/description/)

* algorithms
* Medium (60.78%)
* Likes:    347
* Dislikes: 13
* Testcase Example:  '5\n4'

```md
You are given two integers,n and k.
An array of distinct positive integers is called a k-avoiding array if there does not exist any pair of distinct elements that sum to k.
Return the minimum possible sum of a k-avoiding array of length n.

Example 1:

Input: n = 5, k = 4
Output: 18
Explanation: Consider the k-avoiding array [1,2,4,5,6], which has a sum of 18.
It can be proven that there is no k-avoiding array with a sum less than 18.

Example 2:

Input: n = 2, k = 6
Output: 3
Explanation: We can construct the array [1,2], which has a sum of 3.
It can be proven that there is no k-avoiding array with a sum less than 3.


Constraints:

1 <= n, k <= 50


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定两个整数 n 和 k。一个由不同正整数组成的数组，如果不存在任意两个不同元素之和等于 k，则称为 k-avoiding 数组。返回长度为 n 的 k-avoiding 数组的最小可能和。

## 解题思路

贪心：从 1 开始依次选取数字，用 Set 记录已选的数。对于当前数 x，如果 k - x 已在 Set 中则跳过，否则选取。从最小数开始贪心保证总和最小。
