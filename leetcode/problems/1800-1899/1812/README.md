# [1812] Determine Color of a Chessboard Square

## Description

[LeetCode Problem Description](https://leetcode.com/problems/determine-color-of-a-chessboard-square/description/)

* algorithms
* Easy (79.83%)
* Likes:    902
* Dislikes: 24
* Testcase Example:  '"a1"'

```md
You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

Return true if the square is white, and false if the square is black.
The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

Example 1:

Input: coordinates = 'a1'
Output: false
Explanation: From the chessboard above, the square with coordinates 'a1' is black, so return false.

Example 2:

Input: coordinates = 'h3'
Output: true
Explanation: From the chessboard above, the square with coordinates 'h3' is white, so return true.

Example 3:

Input: coordinates = 'c7'
Output: false


Constraints:

coordinates.length == 2
&#39;a&#39; <= coordinates[0] <= &#39;h&#39;
&#39;1&#39; <= coordinates[1] <= &#39;8&#39;


```

## 中文翻译

给定一个表示棋盘上某个格子坐标的字符串，判断该格子是否为白色。坐标格式为字母+数字（如 "a1"），字母表示列（a-h），数字表示行（1-8）。白色返回 true，黑色返回 false。

## 解题思路

国际象棋棋盘中，a1 为黑色。观察规律：列的奇偶性和行的奇偶性之和为偶数时为黑色，为奇数时为白色。即 `(col + row) % 2 === 0` 时为黑色（返回 false），否则为白色（返回 true）。等价于判断 `(col - 'a') + (row - '1')` 的奇偶性。

## Solution

[SourceCode](./solution.js)
