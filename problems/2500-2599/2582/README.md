# [2582] Pass the Pillow

## Description

[LeetCode Problem Description](https://leetcode.com/problems/pass-the-pillow/description/)

* algorithms
* Easy (56.54%)
* Likes:    1104
* Dislikes: 59
* Testcase Example:  '4\n5'

```md
There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. Every second, the person holding the pillow passes it to the next person standing in the line. Once the pillow reaches the end of the line, the direction changes, and people continue passing the pillow in the opposite direction.

For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.

Given the two positive integers n and time, return the index of the person holding the pillow after time seconds.

Example 1:

Input: n = 4, time = 5
Output: 2
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
After five seconds, the 2nd person is holding the pillow.

Example 2:

Input: n = 3, time = 2
Output: 3
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3.
After two seconds, the 3rd person is holding the pillow.


Constraints:

2 <= n <= 1000
1 <= time <= 1000


Note: This question is the same as  3178: Find the Child Who Has the Ball After K Seconds.

```

## 中文翻译

n 个人排成一行传枕头，每秒传给下一个人，到头则反向。求 time 秒后枕头在谁手里。

## 解题思路

一个完整来回需要 2*(n-1) 秒。用 time % (2*(n-1)) 取模得余数 r。若 r < n 则在第 r+1 人，否则在第 n - (r - n + 1) = 2n - r - 1 人。

## Solution

[SourceCode](./solution.js)
