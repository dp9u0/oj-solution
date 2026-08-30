# [3931] Check Adjacent Digit Differences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-adjacent-digit-differences/description/)

* algorithms
* Easy (78.10%)
* Likes:    18
* Dislikes: 1
* Testcase Example:  '"132"'

```md
You are given a string s consisting of digits.
Return true if the absolute difference between every pair of adjacent digits is at most 2, otherwise return false.
The absolute difference between a and b is defined as abs(a - b).

Example 1:

Input: s = '132'
Output: true
Explanation:

The absolute difference between digits at s[0] and s[1] is abs(1 - 3) = 2.
The absolute difference between digits at s[1] and s[2] is abs(3 - 2) = 1.
Since both differences are at most 2, the answer is true.


Example 2:

Input: s = '129'
Output: false
Explanation:

The absolute difference between digits at s[0] and s[1] is abs(1 - 2) = 1.
The absolute difference between digits at s[1] and s[2] is abs(2 - 9) = 7, which is greater than 2.
Therefore, the answer is false.



Constraints:

2 <= s.length <= 100
s consists only of digits.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个仅由数字组成的字符串 s。
如果每一对相邻数字的绝对差都不超过 2，返回 true，否则返回 false。
a 和 b 的绝对差定义为 abs(a - b)。

示例 1：
输入：s = "132"
输出：true
解释：abs(1-3)=2，abs(3-2)=1，均不超过 2，所以答案为 true。

示例 2：
输入：s = "129"
输出：false
解释：abs(2-9)=7，大于 2，所以答案为 false。

约束：
2 <= s.length <= 100
s 仅由数字组成。

## 解题思路

一次线性遍历：对每个相邻字符对 s[i] 与 s[i+1]，计算 abs(s[i] - s[i+1])，只要有一个超过 2 就返回 false；遍历完全部通过则返回 true。

时间复杂度 O(n)，空间复杂度 O(1)。
