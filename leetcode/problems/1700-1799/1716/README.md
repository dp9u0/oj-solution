# [1716] Calculate Money in Leetcode Bank

## Description

[LeetCode Problem Description](https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/)

* algorithms
* Easy (82.35%)
* Likes:    1847
* Dislikes: 64
* Testcase Example:  '4'

```md
Hercy wants to save money for his first car. He puts money in the Leetcodebank every day.
He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

Example 1:

Input: n = 4
Output: 10
Explanation:After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

Example 2:

Input: n = 10
Output: 37
Explanation:After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.

Example 3:

Input: n = 20
Output: 96
Explanation:After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.


Constraints:

1 <= n <= 1000


```

## 翻译

第 1 天（周一）存 $1，之后每天比前一天多 $1。每周一比上一个周一多 $1。求 n 天后总共存了多少钱。

## Approach

n 天有 weeks = floor(n/7) 个完整周和 days = n%7 个剩余天。完整周的和用等差数列公式：第 i 周（0-indexed）的和为 7*i + 28（即 i+1 到 i+7）。剩余天的和为 (weeks+1) + (weeks+2) + ... + (weeks+days)。

时间复杂度 O(1)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
