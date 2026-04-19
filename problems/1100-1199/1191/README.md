# [1191] K-Concatenation Maximum Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/k-concatenation-maximum-sum/description/)

* algorithms
* Medium (25.42%)
* Likes:    1511
* Dislikes: 134
* Testcase Example:  '[1,2]\n3'

```md
Given an integer array arr and an integer k, modify the array by repeating it k times.
For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2].
Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be 0 and its sum in that case is 0.
As the answer can be very large, return the answer modulo 109 + 7.

Example 1:

Input: arr = [1,2], k = 3
Output: 9

Example 2:

Input: arr = [1,-2,1], k = 5
Output: 2

Example 3:

Input: arr = [-1,-2], k = 7
Output: 0


Constraints:

1 <= arr.length <= 105
1 <= k <= 105
-104 <= arr[i] <= 104


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一个整数数组 arr 和一个整数 k，将数组重复 k 次。例如 arr = [1, 2], k = 3，则修改后的数组为 [1, 2, 1, 2, 1, 2]。返回修改后数组中最大子数组和。子数组长度可以为 0，此时和为 0。结果需要对 10^9 + 7 取模。

## 解题思路

Kadane算法 + 拼接分析。分三种情况：

1. **k=1**：直接对单次数组跑Kadane算法求最大子数组和。
2. **k≥2**：对 arr+arr（两次拼接）跑Kadane算法得 kadane2。
3. **若 total_sum > 0 且 k≥3**：最大值可能跨多份拷贝，形式为 suffixMax + (k-2)*total + prefixMax，即取一份的最大后缀 + 中间(k-2)份的完整和 + 一份的最大前缀。

最终答案取 max(0, kadane1, kadane2, 跨多份情况)，对 MOD 取模。用 BigInt 处理大数乘法避免溢出。
