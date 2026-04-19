# [3765] Complete Prime Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/complete-prime-number/description/)

* algorithms
* Medium (36.89%)
* Likes:    49
* Dislikes: 4
* Testcase Example:  '23'

```md
You are given an integer num.
A number num is called a Complete Prime Number if every prefix and every suffix of num is prime.
Return true if num is a Complete Prime Number, otherwise return false.
Note:

A prefix of a number is formed by the first k digits of the number.
A suffix of a number is formed by the last k digits of the number.
Single-digit numbers are considered Complete Prime Numbers only if they are prime.


Example 1:

Input: num = 23
Output: true
Explanation:

​​​​​​​Prefixes of num = 23 are 2 and 23, both are prime.
Suffixes of num = 23 are 3 and 23, both are prime.
All prefixes and suffixes are prime, so 23 is a Complete Prime Number and the answer is true.


Example 2:

Input: num = 39
Output: false
Explanation:

Prefixes of num = 39 are 3 and 39. 3 is prime, but 39 is not prime.
Suffixes of num = 39 are 9 and 39. Both 9 and 39 are not prime.
At least one prefix or suffix is not prime, so 39 is not a Complete Prime Number and the answer is false.


Example 3:

Input: num = 7
Output: true
Explanation:

7 is prime, so all its prefixes and suffixes are prime and the answer is true.



Constraints:

1 <= num <= 109


```

## 题目翻译

给定整数 num，判断其所有前缀和后缀是否都是素数。前缀由前 k 位组成，后缀由后 k 位组成。

## 解题思路

**素数判断 + 枚举前后缀**

将 num 转为字符串，枚举所有前缀和后缀，判断每个是否为素数。素数判断用试除法（√n）。num ≤ 10^9，最多 10 位数字，判断次数有限。O(d * √num) 时间。

## Solution

[SourceCode](./solution.js)
