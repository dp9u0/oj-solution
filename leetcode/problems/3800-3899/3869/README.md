# [3869] Count Fancy Numbers in a Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-fancy-numbers-in-a-range/description/)

* algorithms
* Hard (25.85%)
* Likes:    58
* Dislikes: 2
* Testcase Example:  '8\n10'

```md
You are given two integers l and r.
An integer is called good if its digits form a strictly monotone sequence, meaning the digits are strictly increasing or strictly decreasing. All single-digit integers are considered good.
An integer is called fancy if it is good, or if the sum of its digits is good.
Return an integer representing the number of fancy integers in the range [l, r] (inclusive).
A sequence is said to be strictly increasing if each element is strictly greater than its previous one (if exists).
A sequence is said to be strictly decreasing if each element is strictly less than its previous one (if exists).

Example 1:

Input: l = 8, r = 10
Output: 3
Explanation:

8 and 9 are single-digit integers, so they are good and therefore fancy.
10 has digits [1, 0], which form a strictly decreasing sequence, so 10 is good and thus fancy.

Therefore, the answer is 3.

Example 2:

Input: l = 12340, r = 12341
Output: 1
Explanation:

12340

12340 is not good because [1, 2, 3, 4, 0] is not strictly monotone.
The digit sum is 1 + 2 + 3 + 4 + 0 = 10.
10 is good as it has digits [1, 0], which is strictly decreasing. Therefore, 12340 is fancy.


12341

12341 is not good because [1, 2, 3, 4, 1] is not strictly monotone.
The digit sum is 1 + 2 + 3 + 4 + 1 = 11.
11 is not good as it has digits [1, 1], which is not strictly monotone. Therefore, 12341 is not fancy.



Therefore, the answer is 1.

Example 3:

Input: l = 123456788, r = 123456788
Output: 0
Explanation:

123456788 is not good because its digits are not strictly monotone.
The digit sum is 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 8 = 44.
44 is not good as it has digits [4, 4], which is not strictly monotone. Therefore, 123456788 is not fancy.

Therefore, the answer is 0.


Constraints:

1 <= l <= r <= 1015


```

## 中文翻译

给定两个整数 l 和 r。一个整数是"good"的，如果其数字严格递增或严格递减（个位数都是 good）。
一个整数是"fancy"的，如果它本身是 good，或者其各位数字之和是 good。
返回 [l, r] 范围内 fancy 整数的个数。

## 解题思路

数位 DP。对于每个数，需要判断两个条件：数字是否严格单调、数字和是否 good。
DP 状态：(pos, tight, started, monoState, lastDigit, digitSum)
- monoState: 0=未定（0-1位）, 1=递增, 2=递减, 3=非单调
- digitSum 最大 9×15=135，预计算所有 good 数（<=135）
- 数位 DP 统计 fancy 数个数

## Solution

[SourceCode](./solution.js)
