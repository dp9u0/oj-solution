# [3127] Make a Square with the Same Color

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-a-square-with-the-same-color/description/)

* algorithms
* Easy (53.06%)
* Likes:    94
* Dislikes: 12
* Testcase Example:  '[["B","W","B"],["B","W","W"],["B","W","B"]]'

```md
You are given a 2D matrix grid of size 3 x 3 consisting only of characters &#39;B&#39; and &#39;W&#39;. Character &#39;W&#39; represents the white color, and character &#39;B&#39; represents the black color.
Your task is to change the color of at most one cell so that the matrix has a 2 x 2 square where all cells are of the same color.
Return true if it is possible to create a 2 x 2 square of the same color, otherwise, return false.

.grid-container {
display: grid;
grid-template-columns: 30px 30px 30px;
padding: 10px;
}
.grid-item {
background-color: black;
border: 1px solid gray;
height: 30px;
font-size: 30px;
text-align: center;
}
.grid-item-white {
background-color: white;
}



Example 1:












Input: grid = [['B','W','B'],['B','W','W'],['B','W','B']]
Output: true
Explanation:
It can be done by changing the color of the grid[0][2].

Example 2:












Input: grid = [['B','W','B'],['W','B','W'],['B','W','B']]
Output: false
Explanation:
It cannot be done by changing at most one cell.

Example 3:












Input: grid = [['B','W','B'],['B','W','W'],['B','W','W']]
Output: true
Explanation:
The grid already contains a 2 x 2 square of the same color.


Constraints:

grid.length == 3
grid[i].length == 3
grid[i][j] is either &#39;W&#39; or &#39;B&#39;.


```

## 题目翻译

给定一个 3x3 的字符矩阵，元素只有 'B' 和 'W'。最多改变一个单元格的颜色，判断是否能形成一个 2x2 同色正方形。

## 解题思路

3x3 网格有 4 个 2x2 正方形。遍历每个 2x2 正方形，统计 B 和 W 的数量，如果有任一颜色数量 >= 3（即同色 3 个以上，最多改 1 个即可全部同色），则返回 true。

## Solution

[SourceCode](./solution.js)
