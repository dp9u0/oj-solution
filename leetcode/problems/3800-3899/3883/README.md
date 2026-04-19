# [3883] Count Non Decreasing Arrays With Given Digit Sums

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-non-decreasing-arrays-with-given-digit-sums/description/)

* algorithms
* Hard (41.85%)
* Likes:    45
* Dislikes: 2
* Testcase Example:  '[25,1]'

```md
You are given an integer array digitSum of length n.
An array arr of length n is considered valid if:

0 <= arr[i] <= 5000
it is non-decreasing.
the sum of the digits of arr[i] equals digitSum[i].

Return an integer denoting the number of distinct valid arrays. Since the answer may be large, return it modulo 109 + 7.
An array is said to be non-decreasing if each element is greater than or equal to the previous element, if it exists.

Example 1:

Input: digitSum = [25,1]
Output: 6
Explanation:
Numbers whose sum of digits is 25 are 799, 889, 898, 979, 988, and 997.
The only number whose sum of digits is 1 that can appear after these values while keeping the array non-decreasing is 1000.
Thus, the valid arrays are [799, 1000], [889, 1000], [898, 1000], [979, 1000], [988, 1000], and [997, 1000].
Hence, the answer is 6.

Example 2:

Input: digitSum = [1]
Output: 4
Explanation:
The valid arrays are [1], [10], [100], and [1000].
Thus, the answer is 4.

Example 3:

Input: digitSum = [2,49,23]
Output: 0
Explanation:
There is no integer in the range [0, 5000] whose sum of digits is 49. Thus, the answer is 0.


Constraints:

1 <= digitSum.length <= 1000
0 <= digitSum[i] <= 50


```

## 题目翻译

给定数组 digitSum，求长度为 n 的非递减数组 arr 的数量，满足：
- 0 <= arr[i] <= 5000
- arr[i] 的各位数字之和等于 digitSum[i]

结果对 10^9+7 取模。

## 解题思路

**DP + 前缀和 + 双指针**

1. 预计算：对每个数字和 s (0-50)，列出 [0,5000] 中各位数字之和为 s 的所有数（已排序）
2. dp[i][j] = 以 valid[digitSum[i]][j] 结尾的合法数组数
3. 转移：dp[i][j] = sum(dp[i-1][k]) 对所有 valid[digitSum[i-1]][k] <= valid[digitSum[i]][j]
4. 用前缀和优化转移，用双指针找分界点

时间 O(n * V)，其中 V 是每组有效数的最大长度。

## Solution

[SourceCode](./solution.js)
