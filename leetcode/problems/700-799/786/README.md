# [786] K-th Smallest Prime Fraction

## Description

[LeetCode Problem Description](https://leetcode.com/problems/k-th-smallest-prime-fraction/description/)

* algorithms
* Medium (69.00%)
* Likes:    2140
* Dislikes: 121
* Testcase Example:  '[1,2,3,5]\n3'

```md
You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k.
For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].
Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].

Example 1:

Input: arr = [1,2,3,5], k = 3
Output: [2,5]
Explanation: The fractions to be considered in sorted order are:
1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
The third fraction is 2/5.

Example 2:

Input: arr = [1,7], k = 1
Output: [1,7]


Constraints:

2 <= arr.length <= 1000
1 <= arr[i] <= 3 * 104
arr[0] == 1
arr[i] is a prime number for i > 0.
All the numbers of arr are unique and sorted in strictly increasing order.
1 <= k <= arr.length * (arr.length - 1) / 2


Follow up: Can you solve the problem with better than O(n2) complexity?

```

## 中文翻译

给定排序数组 arr（含 1 和素数），对每对 i<j 考虑分数 arr[i]/arr[j]，返回第 k 小的分数 [分子, 分母]。

## 解题思路

**二分答案**：二分分数值 mid，统计有多少分数 ≤ mid。对每个分母 arr[j]，用二分找最大的 i 使得 arr[i]/arr[j] ≤ mid，即 arr[i] ≤ mid*arr[j]，统计总数。若 count ≥ k 则缩小上界，记录最后一对满足的 [i,j]；否则增大下界。

## Solution

[SourceCode](./solution.js)
