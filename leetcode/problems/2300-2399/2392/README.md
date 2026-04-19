# [2392] Build a Matrix With Conditions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/build-a-matrix-with-conditions/description/)

* algorithms
* Hard (79.30%)
* Likes:    1509
* Dislikes: 56
* Testcase Example:  '3\n[[1,2],[3,2]]\n[[2,1],[3,2]]'

```md
You are given a positive integer k. You are also given:

a 2D integer array rowConditions of size n where rowConditions[i] = [abovei, belowi], and
a 2D integer array colConditions of size m where colConditions[i] = [lefti, righti].

The two arrays contain integers from 1 to k.
You have to build a k x k matrix that contains each of the numbers from 1 to k exactly once. The remaining cells should have the value 0.
The matrix should also satisfy the following conditions:

The number abovei should appear in a row that is strictly above the row at which the number belowi appears for all i from 0 to n - 1.
The number lefti should appear in a column that is strictly left of the column at which the number righti appears for all i from 0 to m - 1.

Return any matrix that satisfies the conditions. If no answer exists, return an empty matrix.

Example 1:


Input: k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]
Output: [[3,0,0],[0,0,1],[0,2,0]]
Explanation: The diagram above shows a valid example of a matrix that satisfies all the conditions.
The row conditions are the following:
- Number 1 is in row 1, and number 2 is in row 2, so 1 is above 2 in the matrix.
- Number 3 is in row 0, and number 2 is in row 2, so 3 is above 2 in the matrix.
The column conditions are the following:
- Number 2 is in column 1, and number 1 is in column 2, so 2 is left of 1 in the matrix.
- Number 3 is in column 0, and number 2 is in column 1, so 3 is left of 2 in the matrix.
Note that there may be multiple correct answers.

Example 2:

Input: k = 3, rowConditions = [[1,2],[2,3],[3,1],[2,3]], colConditions = [[2,1]]
Output: []
Explanation: From the first two conditions, 3 has to be below 1 but the third conditions needs 3 to be above 1 to be satisfied.
No matrix can satisfy all the conditions, so we return the empty matrix.


Constraints:

2 <= k <= 400
1 <= rowConditions.length, colConditions.length <= 104
rowConditions[i].length == colConditions[i].length == 2
1 <= abovei, belowi, lefti, righti <= k
abovei != belowi
lefti != righti


```

## 题目翻译

给定正整数 k，以及两个条件数组 rowConditions 和 colConditions。
需要构建一个 k×k 矩阵，包含 1 到 k 各一次，其余为 0，满足：
- rowConditions 中 [above, below] 表示 above 所在行严格在 below 所在行之上
- colConditions 中 [left, right] 表示 left 所在列严格在 right 所在列之左

无解返回空矩阵。

## 解题思路

**两次拓扑排序**

1. 将 rowConditions 视为 DAG（above→below），拓扑排序得到行排列
2. 将 colConditions 视为 DAG（left→right），拓扑排序得到列排列
3. 任一排序检测到环则返回 []
4. 根据行排列和列排列确定每个数的 (row, col) 位置，填入矩阵

时间 O(k + E)，空间 O(k + E)。

## Solution

[SourceCode](./solution.js)
