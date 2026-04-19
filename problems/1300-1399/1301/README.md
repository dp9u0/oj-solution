# [1301] Number of Paths with Max Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-paths-with-max-score/description/)

* algorithms
* Hard (42.38%)
* Likes:    551
* Dislikes: 28
* Testcase Example:  '["E23","2X2","12S"]\r'

```md
You are given a square boardof characters. You can move on the board starting at the bottom right square marked with the character&#39;S&#39;.
You needto reach the top left square marked with the character &#39;E&#39;. The rest of the squares are labeled either with a numeric character1, 2, ..., 9 or with an obstacle &#39;X&#39;. In one move you can go up, left or up-left (diagonally) only if there is no obstacle there.
Return a list of two integers: the first integer is the maximum sum of numeric characters you can collect, and the second is the number of such paths that you can take to get that maximum sum, taken modulo 10^9 + 7.
In case there is no path, return[0, 0].

Example 1:
Input: board = ["E23","2X2","12S"]
Output: [7,1]
Example 2:
Input: board = ["E12","1X1","21S"]
Output: [4,2]
Example 3:
Input: board = ["E11","XXX","11S"]
Output: [0,0]


Constraints:

2 <= board.length == board[i].length <= 100


```

## 中文翻译

给定一个字符方阵，从右下角 'S' 出发，只能向上、左、左上移动，到达左上角 'E'。路径上收集数字字符的和。返回 [最大和, 达到最大和的路径数 mod 10^9+7]。若无法到达返回 [0,0]。

## 解题思路

**动态规划（从右下到左上）**

dp[i][j] = [最大和, 路径数]。从 (n-1, n-1) 到 (0, 0)，每一步从下方、右方、右下三个方向取最大值。若 'X' 则不可达。

- 初始化 dp[n-1][n-1] = [0, 1]（起点），E 和 S 位置数字为 0
- 状态转移：取三个方向的最大和，若多个方向和相同则路径数相加
- 结果 dp[0][0]，注意 'E' 和 'S' 位置值为 0

时间复杂度：O(n^2)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
