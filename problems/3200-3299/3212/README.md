# [3212] Count Submatrices With Equal Frequency of X and Y

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/description/)

* algorithms
* Medium (69.57%)
* Likes:    420
* Dislikes: 50
* Testcase Example:  '[["X","Y","."],["Y",".","."]]'

```md
Given a 2D character matrix grid, where grid[i][j] is either &#39;X&#39;, &#39;Y&#39;, or &#39;.&#39;, return the number of submatrices that contain:

grid[0][0]
an equal frequency of &#39;X&#39; and &#39;Y&#39;.
at least one &#39;X&#39;.


Example 1:

Input: grid = [['X','Y','.'],['Y','.','.']]
Output: 3
Explanation:


Example 2:

Input: grid = [['X','X'],['X','Y']]
Output: 0
Explanation:
No submatrix has an equal frequency of &#39;X&#39; and &#39;Y&#39;.

Example 3:

Input: grid = [['.','.'],['.','.']]
Output: 0
Explanation:
No submatrix has at least one &#39;X&#39;.


Constraints:

1 <= grid.length, grid[i].length <= 1000
grid[i][j] is either &#39;X&#39;, &#39;Y&#39;, or &#39;.&#39;.


```

## 翻译

给定字符矩阵grid（含X、Y、.），统计包含grid[0][0]的子矩阵中，X和Y出现次数相等且至少有一个X的个数。

## 解题思路

所有满足条件的子矩阵都以(0,0)为左上角。用2D前缀和分别统计X和Y的计数，遍历所有右下角(i,j)，检查countX==countY且countX>=1。

## Solution

[SourceCode](./solution.js)
