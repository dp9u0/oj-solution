# [397] Integer Replacement

## Description

[LeetCode Problem Description](https://leetcode.com/problems/integer-replacement/description/)

* algorithms
* Medium (37.38%)
* Likes:    1444
* Dislikes: 486
* Testcase Example:  '8'

```md
Given a positive integer n,you can apply one of the followingoperations:

If n is even, replace n with n / 2.
If n is odd, replace n with either n + 1 or n - 1.

Return the minimum number of operations needed for n to become 1.

Example 1:

Input: n = 8
Output: 3
Explanation: 8 -> 4 -> 2 -> 1

Example 2:

Input: n = 7
Output: 4
Explanation: 7 -> 8 -> 4 -> 2 -> 1
or 7 -> 6 -> 3 -> 2 -> 1

Example 3:

Input: n = 4
Output: 2


Constraints:

1 <= n <= 231 - 1


```

## 中文翻译

给定正整数 n，偶数时可以除以2，奇数时可以加1或减1。求将 n 变为 1 的最少操作次数。

## 解题思路

贪心 + 位运算。偶数直接除2。奇数时：若 n%4==1 则减1（使 (n-1)/2 为偶数），若 n%4==3 且 n≠3 则加1（使 (n+1)/2 为偶数）。n=3 是特殊情况，3→2→1 比 3→4→2→1 更优。

## Solution

[SourceCode](./solution.js)
