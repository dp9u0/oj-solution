# [2549] Count Distinct Numbers on Board

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-distinct-numbers-on-board/description/)

* algorithms
* Easy (61.71%)
* Likes:    321
* Dislikes: 295
* Testcase Example:  '5'

```md
You are given a positive integer n, that is initially placed on a board. Every day, for 109 days, you perform the following procedure:

For each number x present on the board, find all numbers 1 <= i <= n such that x % i == 1.
Then, place those numbers on the board.

Return the number of distinct integers present on the board after 109 days have elapsed.
Note:

Once a number is placed on the board, it will remain on it until the end.
%standsfor the modulo operation. For example,14 % 3 is 2.


Example 1:

Input: n = 5
Output: 4
Explanation: Initially, 5 is present on the board.
The next day, 2 and 4 will be added since 5 % 2 == 1 and 5 % 4 == 1.
After that day, 3 will be added to the board because 4 % 3 == 1.
At the end of a billion days, the distinct numbers on the board will be 2, 3, 4, and 5.

Example 2:

Input: n = 3
Output: 2
Explanation:
Since 3 % 2 == 1, 2 will be added to the board.
After a billion days, the only two distinct numbers on the board are 2 and 3.


Constraints:

1 <= n <= 100


```

## 题目翻译

给定正整数 n 放在板上。每天对板上每个数 x，找出所有 1 <= i <= n 使得 x % i == 1，将 i 放到板上。求 10^9 天后板上的不同整数个数。

## 解题思路

关键观察：对于任意 x >= 3，x % (x-1) == 1，所以 x-1 会被加入。最终 2 到 n 的所有整数都会出现在板上（1 永远不会被加入，因为任何数 % 1 == 0）。所以结果就是 n-1（n>=2 时）或 0（n==1 时）。

时间复杂度：O(1)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
