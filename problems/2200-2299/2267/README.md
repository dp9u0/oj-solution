# [2267]  Check if There Is a Valid Parentheses String Path

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/description/)

* algorithms
* Hard (40.13%)
* Likes:    541
* Dislikes: 9
* Testcase Example:  '[["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]'

```md
A parentheses string is a non-empty string consisting only of &#39;(&#39; and &#39;)&#39;. It is valid if any of the following conditions is true:

It is ().
It can be written as AB (A concatenated with B), where A and B are valid parentheses strings.
It can be written as (A), where A is a valid parentheses string.

You are given an m x n matrix of parentheses grid. A valid parentheses string path in the grid is a path satisfying all of the following conditions:

The path starts from the upper left cell (0, 0).
The path ends at the bottom-right cell (m - 1, n - 1).
The path only ever moves down or right.
The resulting parentheses string formed by the path is valid.

Return true if there exists a valid parentheses string path in the grid. Otherwise, return false.

Example 1:


Input: grid = [['(','(','('],[')','(',')'],['(','(',')'],['(','(',')']]
Output: true
Explanation: The above diagram shows two possible paths that form valid parentheses strings.
The first path shown results in the valid parentheses string '()(())'.
The second path shown results in the valid parentheses string '((()))'.
Note that there may be other valid parentheses string paths.

Example 2:


Input: grid = [[')',')'],['(','(']]
Output: false
Explanation: The two possible paths form the parentheses strings '))(' and ')(('. Since neither of them are valid parentheses strings, we return false.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
grid[i][j] is either &#39;(&#39; or &#39;)&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一个由 '(' 和 ')' 组成的 m×n 矩阵，判断是否存在一条从左上角到右下角的路径（只能向右或向下移动），使得路径上的括号组成的字符串是合法的。

## 解题思路

DP。将 '(' 视为 +1，')' 视为 -1。合法括号串要求每个前缀的 balance >= 0，且最终 balance = 0。

- dp[j][b] 表示在当前行第 j 列是否可达 balance b
- 转移：从上方（prev[j]）或左方（curr[j-1]）转移，加上当前格的 delta
- 路径长度 m+n-1 必须为偶数，balance 范围 [0, (m+n-1)/2]
- 最终检查 dp[n-1][0] 是否可达

时间复杂度 O(m × n × (m+n))，空间 O(n × (m+n))
