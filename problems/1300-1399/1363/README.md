# [1363] Largest Multiple of Three

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-multiple-of-three/description/)

* algorithms
* Hard (33.22%)
* Likes:    629
* Dislikes: 91
* Testcase Example:  '[8,1,9]'

```md
Given an array of digits digits, return the largest multiple of three that can be formed by concatenating some of the given digits in any order. If there is no answer return an empty string.
Since the answer may not fit in an integer data type, return the answer as a string. Note that the returning answer must not contain unnecessary leading zeros.

Example 1:

Input: digits = [8,1,9]
Output: '981'

Example 2:

Input: digits = [8,6,7,1,0]
Output: '8760'

Example 3:

Input: digits = [1]
Output: ''


Constraints:

1 <= digits.length <= 104
0 <= digits[i] <= 9


```

## 中文翻译

给定数字数组 digits，返回由其中一些数字拼接成的最大的 3 的倍数。没有答案返回空串。答案不能有前导零。

## 解题思路

数字之和是 3 的倍数 ⟺ 该数是 3 的倍数。
1. 统计每个数字出现次数和总和
2. 若 sum % 3 == 0：直接从大到小排列
3. 若 sum % 3 == 1：移除一个最小的 ≡1(mod 3) 的数字，或两个最小的 ≡2(mod 3) 的数字
4. 若 sum % 3 == 2：移除一个最小的 ≡2(mod 3) 的数字，或两个最小的 ≡1(mod 3) 的数字
5. 拼接结果，处理前导零

## Solution

[SourceCode](./solution.js)
