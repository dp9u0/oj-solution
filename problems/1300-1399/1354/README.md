# [1354] Construct Target Array With Multiple Sums

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-target-array-with-multiple-sums/description/)

* algorithms
* Hard (36.89%)
* Likes:    2125
* Dislikes: 180
* Testcase Example:  '[9,3,5]'

```md
You are given an array target of n integers. From a starting array arr consisting of n 1&#39;s, you may perform the following procedure :

let x be the sum of all elements currently in your array.
choose index i, such that 0 <= i < n and set the value of arr at index i to x.
You may repeat this procedure as many times as needed.

Return true if it is possible to construct the target array from arr, otherwise, return false.

Example 1:

Input: target = [9,3,5]
Output: true
Explanation: Start with arr = [1, 1, 1]
[1, 1, 1], sum = 3 choose index 1
[1, 3, 1], sum = 5 choose index 2
[1, 3, 5], sum = 9 choose index 0
[9, 3, 5] Done

Example 2:

Input: target = [1,1,1,2]
Output: false
Explanation: Impossible to create target array from [1,1,1,1].

Example 3:

Input: target = [8,5]
Output: true


Constraints:

n == target.length
1 <= n <= 5 * 104
1 <= target[i] <= 109


```

## 题目翻译

给定 target 数组，从全 1 数组出发，每次操作选一个下标 i，令 arr[i] = sum(arr)。问是否能构造出 target。

## 解题思路

**反向模拟 + 最大堆 + 取模优化**

正向思考困难，反向推导：从 target 还原到全 1 数组。每次操作选最大值 M（即最后被修改的位置），还原为其前一个值。

关键推导：设当前总和 S，最大值 M，其余和 R = S - M。
- M 一定是上一步被设为当时的总和，前一个值为 M - R（因为上一步总和 = R + old_val，old_val = M - R）
- 若同一位置连续被操作 k 次，值每次减少 R（因为 R 不变），所以直接取模：newVal = M % R
- 特判：R = 1 时一定可行（每次减 1 直到变为 1）；M ≤ R 时不可能（正向操作必使最大值 > 总和的一半）；M % R = 0 时不可能（还原后值为 R = 其余和，无法继续反向）

使用最大堆维护，每次取模优化避免逐次递减。总复杂度 O(n·log(maxVal)·log(n))。

## Solution

[SourceCode](./solution.js)
