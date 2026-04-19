# [1861] Rotating the Box

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rotating-the-box/description/)

* algorithms
* Medium (79.15%)
* Likes:    1633
* Dislikes: 83
* Testcase Example:  '[["#",".","#"]]'

```md
You are given an m x n matrix of characters boxGrid representing a side-view of a box. Each cell of the box is one of the following:

A stone &#39;#&#39;
A stationary obstacle &#39;*&#39;
Empty &#39;.&#39;

The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity does not affect the obstacles&#39; positions, and the inertia from the box&#39;s rotation does not affect the stones&#39; horizontal positions.
It is guaranteed that each stone in boxGrid rests on an obstacle, another stone, or the bottom of the box.
Return an n x m matrix representing the box after the rotation described above.

Example 1:


Input: boxGrid = [['#','.','#']]
Output: [['.'],
['#'],
['#']]

Example 2:


Input: boxGrid = [['#','.','*','.'],
['#','#','*','.']]
Output: [['#','.'],
['#','#'],
['*','*'],
['.','.']]

Example 3:


Input: boxGrid = [['#','#','*','.','*','.'],
['#','#','#','*','.','.'],
['#','#','#','.','#','.']]
Output: [['.','#','#'],
['.','#','#'],
['#','#','*'],
['#','*','.'],
['#','.','*'],
['#','.','.']]


Constraints:

m == boxGrid.length
n == boxGrid[i].length
1 <= m, n <= 500
boxGrid[i][j] is either &#39;#&#39;, &#39;*&#39;, or &#39;.&#39;.


```

## 题目翻译

给定m×n矩阵boxGrid，包含石头'#'、障碍物'*'和空'.'。将矩阵顺时针旋转90度后，石头因重力下落直到碰到障碍物、其他石头或底部。返回旋转并下落后的矩阵。

## 解题思路

先处理每行（旋转后变成列）的石头下落：从右往左遍历，遇到石头则尝试向右移动到最远的空位，遇到障碍物则停止。然后将结果矩阵顺时针旋转90度（转置+每行反转）。

## Solution

[SourceCode](./solution.js)
