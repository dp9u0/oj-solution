# [902] Numbers At Most N Given Digit Set

## Description

[LeetCode Problem Description](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/description/)

* algorithms
* Hard (44.86%)
* Likes:    1470
* Dislikes: 98
* Testcase Example:  '["1","3","5","7"]\n100'

```md
Given an array of digits which is sorted in non-decreasing order. You can write numbers using each digits[i] as many times as we want. For example, if digits = [&#39;1&#39;,&#39;3&#39;,&#39;5&#39;], we may write numbers such as &#39;13&#39;, &#39;551&#39;, and &#39;1351315&#39;.
Return the number of positive integers that can be generated that are less than or equal to a given integer n.

Example 1:

Input: digits = ['1','3','5','7'], n = 100
Output: 20
Explanation:
The 20 numbers that can be written are:
1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.

Example 2:

Input: digits = ['1','4','9'], n = 1000000000
Output: 29523
Explanation:
We can write 3 one digit numbers, 9 two digit numbers, 27 three digit numbers,
81 four digit numbers, 243 five digit numbers, 729 six digit numbers,
2187 seven digit numbers, 6561 eight digit numbers, and 19683 nine digit numbers.
In total, this is 29523 integers that can be written using the digits array.

Example 3:

Input: digits = ['7'], n = 8
Output: 1


Constraints:

1 <= digits.length <= 9
digits[i].length == 1
digits[i] is a digit from&#39;1&#39;to &#39;9&#39;.
All the values indigits are unique.
digits is sorted innon-decreasing order.
1 <= n <= 109


```

## 中文翻译

给定一组数字（已排序），可用这些数字任意组合（每个数字可重复使用），求能组成多少个 ≤ n 的正整数。

## 解题思路

**数位 DP**

设 n 的字符串表示 s 长度为 len，数字集大小 m。

1. 位数少于 len 的数：对于长度 k (1 ≤ k < len)，有 m^k 个，全部满足
2. 位数等于 len 的数：逐位比较
   - 对于位置 i，若当前数字 d < s[i]，剩余 len-1-i 位任意填，贡献 m^(len-1-i)
   - 若 d == s[i]，继续下一位
   - 若没有任何 d == s[i]，停止

时间复杂度：O(len * m)，空间复杂度：O(len)

## Solution

[SourceCode](./solution.js)
