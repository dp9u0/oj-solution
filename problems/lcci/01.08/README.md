# [面试题 01.08] 零矩阵

## Description


```md
https://leetcode.cn/problems/zero-matrix-lcci/description/
* lcci
* Medium (62.86%)
* Likes:    181
* Dislikes: -
* Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

示例 1：
输入：
[
[1,1,1],
[1,0,1],
[1,1,1]
]
输出：
[
[1,0,1],
[0,0,0],
[1,0,1]
]
示例 2：
输入：
[
[0,1,2,0],
[3,4,5,2],
[1,3,1,5]
]
输出：
[
[0,0,0,0],
[0,4,5,0],
[0,3,1,0]
]
Hint 1: 如果你在找到0时清除了行和列，则可能会清理整个矩阵。在对矩阵进行任何更改之前，首先尝试找到所有的0。
Hint 2: 你能只用额外的O(N)空间而不是O(N2)吗？在为0的单元格列表中你真正需要的是什么信息？
Hint 3: 你可能需要一些数据存储来维护一个需要清零的行与列的列表。通过使用矩阵本身来存储数据，你是否可以把额外的空间占用减小到O(1)？

```

## Description (English)

Write an algorithm such that if an element in an M×N matrix is 0, its entire row and column are set to 0. Modify the matrix in-place.

Example 1:
Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

## 思路

原地 O(1) 额外空间：用矩阵自身的第一行、第一列充当其余行列的清零标记，另用两个布尔记录第一行/列自身是否需要清零。

顺序关键：①先扫描首行首列记 flag；②用首行/列标记内部 0 所在行列；③按标记清零内部；④**最后**按 flag 清首行/首列——若先清标记会被误判扩散。

## Solution

[SourceCode](./solution.js)
