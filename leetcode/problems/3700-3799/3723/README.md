# [3723] Maximize Sum of Squares of Digits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-sum-of-squares-of-digits/description/)

* algorithms
* Medium (58.94%)
* Likes:    62
* Dislikes: 2
* Testcase Example:  '2\n3'

```md
You are given two positive integers num and sum.
A positive integer n is good if it satisfies both of the following:

The number of digits in n is exactly num.
The sum of digits in n is exactly sum.

The score of a good integer n is the sum of the squares of digits in n.
Return a string denoting the good integer n that achieves the maximum score. If there are multiple possible integers, return the maximum ​​​​​​​one. If no such integer exists, return an empty string.

Example 1:

Input: num = 2, sum = 3
Output: '30'
Explanation:
There are 3 good integers: 12, 21, and 30.

The score of 12 is 12 + 22 = 5.
The score of 21 is 22 + 12 = 5.
The score of 30 is 32 + 02 = 9.

The maximum score is 9, which is achieved by the good integer 30. Therefore, the answer is '30'.

Example 2:

Input: num = 2, sum = 17
Output: '98'
Explanation:
There are 2 good integers: 89 and 98.

The score of 89 is 82 + 92 = 145.
The score of 98 is 92 + 82 = 145.

The maximum score is 145. The maximum good integer that achieves this score is 98. Therefore, the answer is '98'.

Example 3:

Input: num = 1, sum = 10
Output: ''
Explanation:
There are no integers that have exactly 1 digit and whose digits sum to 10. Therefore, the answer is ''.


Constraints:

1 <= num <= 2 * 105
1 <= sum <= 2 * 106


```

## 翻译

给定两个正整数 num 和 sum。一个正整数 n 如果满足以下两个条件则称为"好的"：
- n 的位数恰好为 num
- n 的各位数字之和恰好为 sum

好的整数 n 的分数是其各位数字的平方和。返回取得最大分数的好整数的字符串形式。如果有多个，返回最大的那个。如果不存在，返回空字符串。

## Approach

贪心构造。由于 x² 是凸函数，将数字尽可能集中在少数位上（用尽可能多的 9）可以最大化平方和。

1. 若 sum > 9 * num，无法构造，返回 ""
2. nines = floor(sum / 9)，remaining = sum % 9
3. 若 remaining == 0：返回 nines 个 "9" + (num - nines) 个 "0"
4. 若 remaining > 0：返回 nines 个 "9" + str(remaining) + (num - nines - 1) 个 "0"

这样构造的数同时满足：最大分数 + 最大整数值（高位放大的数字）。

时间复杂度 O(num)，空间复杂度 O(num)。

## Solution

[SourceCode](./solution.js)
