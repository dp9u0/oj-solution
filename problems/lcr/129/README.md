# [LCR 129] 字母迷宫

## Description


```md
https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/description/
* algorithms
* Medium (45.77%)
* Likes:    848
* Dislikes: -
* Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
字母迷宫游戏初始界面记作 m x n 二维字符串数组 grid，请判断玩家是否能在 grid 中找到目标单词 target。
注意：寻找单词时 必须 按照字母顺序，通过水平或垂直方向相邻的单元格内的字母构成，同时，同一个单元格内的字母 不允许被重复使用 。


示例 1：
输入：grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], target = "ABCCED"
输出：true
示例 2：
输入：grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], target = "SEE"
输出：true
示例 3：
输入：grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], target = "ABCB"
输出：false

提示：
m == grid.length
n = grid[i].length
1 <= m, n <= 6
1 <= target.length <= 15
grid 和 target 仅由大小写英文字母组成

注意：本题与主站 79 题相同：https://leetcode.cn/problems/word-search/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Grid `m x n` of letters. Determine whether `target` can be found following letter order via 4-directionally adjacent cells, without reusing a cell.

**Example:** grid `[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]`: "ABCCED"→true, "SEE"→true, "ABCB"→false.

**Constraints:** grid ≤ 6×6, word ≤ 15. Note: same as LeetCode 79.

---

## Approach

**DFS backtracking** from each cell matching the first letter; mark used (set to sentinel) while exploring, unmark on backtrack.

Complexity: `O(R·C·3^L)` worst.
