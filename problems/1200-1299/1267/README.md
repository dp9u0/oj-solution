# [1267] Count Servers that Communicate

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-servers-that-communicate/description/)

* algorithms
* Medium (73.52%)
* Likes:    1915
* Dislikes: 109
* Testcase Example:  '[[1,0],[0,1]]'

```md
You are given a map of a server center, represented as a m * n integer matrixgrid, where 1 means that on that cell there is a server and 0 means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.

Return the number of serversthat communicate with any other server.

Example 1:


Input: grid = [[1,0],[0,1]]
Output: 0
Explanation:No servers can communicate with others.
Example 2:


Input: grid = [[1,0],[1,1]]
Output: 3
Explanation:All three servers can communicate with at least one other server.

Example 3:


Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
Output: 4
Explanation:The two servers in the first row can communicate with each other. The two servers in the third column can communicate with each other. The server at right bottom corner can&#39;t communicate with any other server.


Constraints:

m == grid.length
n == grid[i].length
1 <= m <= 250
1 <= n <= 250
grid[i][j] == 0 or 1


```

## 题目翻译

给定 m*n 矩阵 grid，1 表示有服务器，0 表示没有。同行或同列的两个服务器可以通信。返回能与其他服务器通信的服务器数量。

## 解题思路

统计每行每列的服务器数，若某服务器所在行或列的服务器数>1，则它可以通信。

## Solution

[SourceCode](./solution.js)
