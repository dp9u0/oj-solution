# [679] 24 Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/24-game/description/)

* algorithms
* Hard (59.45%)
* Likes:    1890
* Dislikes: 288
* Testcase Example:  '[4,1,8,7]'

```md
You are given an integer array cards of length 4. You have four cards, each containing a number in the range [1, 9]. You should arrange the numbers on these cards in a mathematical expression using the operators [&#39;+&#39;, &#39;-&#39;, &#39;*&#39;, &#39;/&#39;] and the parentheses &#39;(&#39; and &#39;)&#39; to get the value 24.
You are restricted with the following rules:

The division operator &#39;/&#39; represents real division, not integer division.

For example, 4 / (1 - 2 / 3) = 4 / (1 / 3) = 12.


Every operation done is between two numbers. In particular, we cannot use &#39;-&#39; as a unary operator.

For example, if cards = [1, 1, 1, 1], the expression '-1 - 1 - 1 - 1' is not allowed.


You cannot concatenate numbers together

For example, if cards = [1, 2, 1, 2], the expression '12 + 12' is not valid.



Return true if you can get such expression that evaluates to 24, and false otherwise.

Example 1:

Input: cards = [4,1,8,7]
Output: true
Explanation: (8-4) * (7-1) = 24

Example 2:

Input: cards = [1,2,1,2]
Output: false


Constraints:

cards.length == 4
1 <= cards[i] <= 9


```

## 中文翻译

给定 4 张牌（1-9），用 +、-、*、/ 和括号组成表达式使结果为 24，可以则返回 true。

## 解题思路

**DFS 暴力枚举**

每次从列表中选两个数，尝试四种运算，将结果放回列表。递归直到剩一个数，判断是否为 24（浮点误差 < 1e-6）。

注意：除法需检查除数非零；减法 a-b 和 b-a 结果不同，枚举时自然覆盖。

时间复杂度：O(1)（4 张牌搜索空间有限），空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
