# [1566] Detect Pattern of Length M Repeated K or More Times

## Description

[LeetCode Problem Description](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/description/)

* algorithms
* Easy (43.81%)
* Likes:    690
* Dislikes: 148
* Testcase Example:  '[1,2,4,4,4,4]\n1\n3'

```md
Given an array of positive integers arr, find a pattern of length m that is repeated k or more times.
A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping. A pattern is defined by its length and the number of repetitions.
Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.

Example 1:

Input: arr = [1,2,4,4,4,4], m = 1, k = 3
Output: true
Explanation: The pattern (4) of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.

Example 2:

Input: arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
Output: true
Explanation: The pattern (1,2) of length 2 is repeated 2 consecutive times. Another valid pattern (2,1) is also repeated 2 times.

Example 3:

Input: arr = [1,2,1,2,1,3], m = 2, k = 3
Output: false
Explanation: The pattern (1,2) is of length 2 but is repeated only 2 times. There is no pattern of length 2 that is repeated 3 or more times.


Constraints:

2 <= arr.length <= 100
1 <= arr[i] <= 100
1 <= m <= 100
2 <= k <= 100


```

## 中文翻译

给定正整数数组，判断是否存在长度为 m 的子数组连续重复 k 次及以上。

## 解题思路

**连续匹配计数**

遍历数组，比较 arr[i] 与 arr[i-m]：
- 若相等，count++（表示又多一个连续匹配位置）
- 若不等，count = 0
- 当 count >= m*(k-1) 时，说明有 k 段相同，返回 true

原理：k 次重复需要 k-1 个"跨越 m 的连续相等"。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
