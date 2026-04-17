# [2761] Prime Pairs With Target Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/prime-pairs-with-target-sum/description/)

* algorithms
* Medium (37.32%)
* Likes:    410
* Dislikes: 34
* Testcase Example:  '10'

```md
You are given an integer n. We say that two integers x and y form a prime number pair if:

1 <= x <= y <= n
x + y == n
x and y are prime numbers

Return the 2D sorted list of prime number pairs [xi, yi]. The list should be sorted in increasing order of xi. If there are no prime number pairs at all, return an empty array.
Note: A prime number is a natural number greater than 1 with only two factors, itself and 1.

Example 1:

Input: n = 10
Output: [[3,7],[5,5]]
Explanation: In this example, there are two prime pairs that satisfy the criteria.
These pairs are [3,7] and [5,5], and we return them in the sorted order as described in the problem statement.

Example 2:

Input: n = 2
Output: []
Explanation: We can show that there is no prime number pair that gives a sum of 2, so we return an empty array.


Constraints:

1 <= n <= 106


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定整数 n，找出所有满足以下条件的质数对 [x, y]：1 <= x <= y <= n，x + y == n，且 x 和 y 都是质数。按 x 升序返回所有质数对的列表。若无满足条件的对，返回空数组。

## 解题思路

埃氏筛预处理质数，然后遍历 x 从 2 到 n/2，检查 x 和 n-x 是否都是质数。若都是则加入结果。时间复杂度 O(n log log n) 用于筛法，O(n) 用于遍历查找。
