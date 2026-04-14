# [3658] GCD of Odd and Even Sums

## Description

[LeetCode Problem Description](https://leetcode.com/problems/gcd-of-odd-and-even-sums/description/)

* algorithms
* Easy (84.92%)
* Likes:    107
* Dislikes: 15
* Testcase Example:  '4'

```md
You are given an integer n. Your task is to compute the GCD (greatest common divisor) of two values:


sumOdd: the sum of the smallestnpositive odd numbers.


sumEven: the sum of the smallestnpositive even numbers.


Return the GCD of sumOdd and sumEven.

Example 1:

Input: n = 4
Output: 4
Explanation:

Sum of the first 4 odd numbers sumOdd = 1 + 3 + 5 + 7 = 16
Sum of the first 4 even numbers sumEven = 2 + 4 + 6 + 8 = 20

Hence, GCD(sumOdd, sumEven) = GCD(16, 20) = 4.

Example 2:

Input: n = 5
Output: 5
Explanation:

Sum of the first 5 odd numbers sumOdd = 1 + 3 + 5 + 7 + 9 = 25
Sum of the first 5 even numbers sumEven = 2 + 4 + 6 + 8 + 10 = 30

Hence, GCD(sumOdd, sumEven) = GCD(25, 30) = 5.


Constraints:

1 <= n <= 10​​​​​​​00


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 n，计算前 n 个正奇数之和与前 n 个正偶数之和的最大公约数。

## 解题思路

sumOdd = n²，sumEven = n(n+1)。GCD(n², n(n+1)) = n × GCD(n, n+1) = n × 1 = n。因为 n 和 n+1 互质。所以答案就是 n。O(1)。
