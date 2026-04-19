# [3274] Check if Two Chessboard Squares Have the Same Color

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/description/)

* algorithms
* Easy (72.30%)
* Likes:    143
* Dislikes: 5
* Testcase Example:  '"a1"\n"c3"'

```md
You are given two strings, coordinate1 and coordinate2, representing the coordinates of a square on an 8 x 8 chessboard.
Below is the chessboard for reference.

Return true if these two squares have the same color and false otherwise.
The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first (indicating its column), and the number second (indicating its row).

Example 1:

Input: coordinate1 = 'a1', coordinate2 = 'c3'
Output: true
Explanation:
Both squares are black.

Example 2:

Input: coordinate1 = 'a1', coordinate2 = 'h3'
Output: false
Explanation:
Square 'a1' is black and 'h3' is white.


Constraints:

coordinate1.length == coordinate2.length == 2
&#39;a&#39; <= coordinate1[0], coordinate2[0] <= &#39;h&#39;
&#39;1&#39; <= coordinate1[1], coordinate2[1] <= &#39;8&#39;


```

## 中文翻译

给定两个棋盘坐标，判断两个格子颜色是否相同。棋盘 8x8，字母表示列，数字表示行。

## 解题思路

棋盘格子颜色由 (列号 + 行号) 的奇偶性决定。两格子奇偶性相同则颜色相同。

## Solution

[SourceCode](./solution.js)
