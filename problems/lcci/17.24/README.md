# [面试题 17.24] 最大子矩阵

## Description


```md
https://leetcode.cn/problems/max-submatrix-lcci/description/
* lcci
* Hard (54.10%)
* Likes:    229
* Dislikes: -
* Testcase Example:  '[[9,-8,1,3,-2],[-3,7,6,-2,4],[6,-4,-4,8,-7]]'
给定一个正整数、负整数和 0 组成的 N × M 矩阵，编写代码找出元素总和最大的子矩阵。
返回一个数组 [r1, c1, r2, c2]，其中 r1, c1 分别代表子矩阵左上角的行号和列号，r2, c2 分别代表右下角的行号和列号。若有多个满足条件的子矩阵，返回任意一个均可。
注意：本题相对书上原题稍作改动
示例：
输入：
[
[-1,0],
[0,-1]
]
输出：[0,1,0,1]
解释：输入中标粗的元素即为输出所表示的矩阵

说明：
1 <= matrix.length, matrix[0].length <= 200
Hint 1: 从蛮力解法开始。
Hint 2: 蛮力解法要求连续计算每个矩阵的和。能优化它吗？
Hint 3: 你能做任何形式的预计算来使计算子矩阵和的运行时间为O(1)吗？
Hint 4: 如果你预先计算从左上角开始并扩展到全部单元格的子矩阵的和会怎样？计算它需要多长时间？计算完以后，你能在O(1)时间内得到任意子矩阵的和吗？
Hint 5: 如果你能预先计算从左上角到每个单元格的和，那么便可以在O(1)时间内用它来计算任意子矩阵的和。画一个特定的子矩阵。这个子矩阵上面的数组（C）、左边的数组（B），以及上边和左边的数组（A）的和均分别预先计算完成。你如何计算目标矩阵（D）的和？
Hint 6: D的和将是sum(A&B&C&D) - sum(A&B) - sum(A&C) + sum(A)。
Hint 7: 通过预计算，你应该能够得到O(N4)的时间复杂度。可以更快些吗?
Hint 8: 假设这只是一个数组。如何计算有最大和的子数组呢？详见16.17。
Hint 9: 假设我只是想让你找出从第r1行开始到第r2行结束的最大子矩阵，怎么才能最有效地做到这一点（参见前面的提示）？如果我现在让你找出从r1到(r2+2)的最大子数组，你能有效地做到吗?

```

## Description (English)

Given an N×M matrix of positive integers, negative integers and zeros, write code to find the submatrix with the maximum sum. Return [r1, c1, r2, c2] where r1, c1 are the row and column of the top-left corner and r2, c2 the bottom-right corner. If multiple submatrices qualify, return any.

Example:
Input: [[-1,0],[0,-1]]
Output: [0,1,0,1]

Note: 1 <= matrix.length, matrix[0].length <= 200.

## 思路

行对压缩 + Kadane，O(N²·M)：枚举上边界 r1、下边界 r2，把两行之间的各列压缩成一维数组（增量维护），对该数组跑最大子数组——Kadane 中 `cur ≤ 0` 重启并记录起点列，更新全局最优时还原四元组坐标。200×200 下约 1.6e9 降为 1.6e6。

## Solution

[SourceCode](./solution.js)
