# [面试题 17.23] 最大黑方阵

## Description


```md
https://leetcode.cn/problems/max-black-square-lcci/description/
* lcci
* Medium (38.99%)
* Likes:    60
* Dislikes: -
* Testcase Example:  '[[1,0,1],[0,0,1],[0,0,1]]'
给定一个方阵，其中每个单元(像素)非黑即白。设计一个算法，找出 4 条边皆为黑色像素的最大子方阵。
返回一个数组 [r, c, size] ，其中 r, c 分别代表子方阵左上角的行号和列号，size 是子方阵的边长。若有多个满足条件的子方阵，返回 r 最小的，若 r 相同，返回 c 最小的子方阵。若无满足条件的子方阵，返回空数组。
示例 1：
输入：
[
[1,0,1],
[0,0,1],
[0,0,1]
]
输出：[1,0,2]
解释：输入中 0 代表黑色，1 代表白色，标粗的元素即为满足条件的最大子方阵
示例 2：
输入：
[
[0,1,1],
[1,0,1],
[1,1,0]
]
输出：[0,0,1]
提示：
matrix.length == matrix[0].length <= 200
Hint 1: 从蛮力解法开始。你能先试试最大的正方形吗?
Hint 2: 最大的正方形是N×N。所以你先试一下该正方形，如果可行，那么你便知道已经找到了最佳正方形。否则，可以尝试下一个最小的正方形。
Hint 3: 描述蛮力解法的时间复杂度。
Hint 4: 你能通过预处理来优化这个解决方案吗？
Hint 5: 你应该能在O(N^3)时间内完成，其中N是正方形一边的长度。
Hint 6: 当你检查一个特定的正方形是否有效时（所有边框为黑色），需要检查在一个坐标的上面（或下面）和这个坐标的左边（或右边）有多少个黑色像素。你能预先计算出给定单元格上面和左边的黑色像素的数量吗？

```

## Description (English)

Given a square matrix where each cell (pixel) is black or white, design an algorithm to find the largest sub-square whose four borders are all black pixels. Return [r, c, size] where r, c are the row and column of the top-left corner and size is the edge length. If multiple qualify, return the one with smallest r, then smallest c. If none exists, return an empty array. (0 = black, 1 = white.)

Example 1: [[1,0,1],[0,0,1],[0,0,1]] → [1,0,2]
Example 2: [[0,1,1],[1,0,1],[1,1,0]] → [0,0,1]

Note: matrix.length == matrix[0].length <= 200.

## 思路

四向游程预计算 O(N²)：up/left 以本格收尾、down/right 以本格起始的连续黑格数。以 (r,c) 为左上角、边长 s 的四条边分别由 `right[r][c] ≥ s`（上）、`down[r][c] ≥ s`（左）、`up[r+s−1][c+s−1] ≥ s`（右列，以右下角收尾）、`left[r+s−1][c+s−1] ≥ s`(底行) 判定——右列/底行的检查点必须落在右下角，不能沿用左上角的游程。s 从 `min(down, right)` 降序试，命中即该格最大。全局严格更大才更新，配合 (r,c) 升序扫描满足 r→c 平序，总 O(N³)。

## Solution

[SourceCode](./solution.js)
