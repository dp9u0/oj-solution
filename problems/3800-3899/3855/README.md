# [3855] Sum of K-Digit Numbers in a Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-k-digit-numbers-in-a-range/description/)

* algorithms
* Hard (50.49%)
* Likes:    47
* Dislikes: 3
* Testcase Example:  '1\n2\n2'

```md
You are given three integers l, r, and k.
Consider all possible integers consisting of exactly k digits, where each digit is chosen independently from the integer range [l, r] (inclusive). If 0 is included in the range, leading zeros are allowed.
Return an integer representing the sum of all such numbers.​​​​​​​ Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: l = 1, r = 2, k = 2
Output: 66
Explanation:

All numbers formed using k = 2 digits in the range [1, 2] are 11, 12, 21, 22.
The total sum is 11 + 12 + 21 + 22 = 66.


Example 2:

Input: l = 0, r = 1, k = 3
Output: 444
Explanation:

All numbers formed using k = 3 digits in the range [0, 1] are 000, 001, 010, 011, 100, 101, 110, 111​​​​​​​.
These numbers without leading zeros are 0, 1, 10, 11, 100, 101, 110, 111.
The total sum is 444.


Example 3:

Input: l = 5, r = 5, k = 10
Output: 555555520
Explanation:​​​​​​​

5555555555 is the only valid number consisting of k = 10 digits in the range [5, 5].
The total sum is 5555555555 % (109 + 7) = 555555520.



Constraints:

0 <= l <= r <= 9
1 <= k <= 109


```

## 题目翻译

给定 l, r, k，用 [l, r] 中的数字（允许前导零）组成所有 k 位数，返回它们的和 mod 10^9+7。

## 解题思路

**数学公式**

每位数字独立选择，共 count = r-l+1 种选择，总数 = count^k 个数。

每位上每个数字 d 出现 count^(k-1) 次。digitSum = sum(l..r) = (l+r)*count/2。

总和 = digitSum × count^(k-1) × (10^k - 1) / 9 mod (10^9+7)

其中 (10^k-1)/9 是等比数列 1+10+100+...+10^(k-1) 的和，除以 9 用乘法逆元。

BigInt 快速幂，O(log k)。

## Solution

[SourceCode](./solution.js)
