# [面试题 08.12] 八皇后

## Description


```md
https://leetcode.cn/problems/eight-queens-lcci/description/
* lcci
* Hard (76.45%)
* Likes:    201
* Dislikes: -
* Testcase Example:  '4'
设计一种算法，打印 N 皇后在 N × N 棋盘上的各种摆法，其中每个皇后都不同行、不同列，也不在对角线上。这里的“对角线”指的是所有的对角线，不只是平分整个棋盘的那两条对角线。
注意：本题相对原题做了扩展
示例：
输入：4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：4 皇后问题存在如下两个不同的解法。
[
[".Q..",  // 解法 1
"...Q",
"Q...",
"..Q."],
["..Q.",  // 解法 2
"Q...",
"...Q",
".Q.."]
]
Hint 1: 我们知道每一行都有一个皇后。你能试试所有的可能性吗？
Hint 2: 每行都必须有个皇后。从最后一行开始。有8个不同的列你可以放皇后。你能挨个试试吗？
Hint 3: 把它拆分成更小的子问题。第8行的皇后必定在第1、2、3、4、5、6、7或8列。当一个皇后在第8行第3列，你能输出所有可能的八皇后位置吗？然后你需要做的就是检查将一个皇后放在第7行的所有情况。

```

## Description (English)

Design an algorithm to print all ways of arranging N queens on an N×N board so that no two queens share the same row, column, or diagonal ("diagonals" here means all diagonals, not just the two bisecting the board).

Example:
Input: 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

## 思路

逐行回溯：每行放一个皇后，用 `Set` 记已占列、`r-c`（主对角线）、`r+c`（副对角线）三个键判冲突，放前检查、递归后撤销。行序 + 列升序枚举的输出顺序与样例一致。摆盘方案数为 0（n=2,3）时自然返回空数组。

## Solution

[SourceCode](./solution.js)
