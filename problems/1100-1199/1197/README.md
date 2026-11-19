# [1197] 进击的骑士

## Description


```md
https://leetcode.cn/problems/minimum-knight-moves/description/
* algorithms
* Medium (42.16%)
* Likes:    127
* Dislikes: -
* Testcase Example:  '2\n1'
一个坐标可以从 -infinity 延伸到 +infinity 的 无限大的 棋盘上，你的 骑士 驻扎在坐标为 [0, 0] 的方格里。
骑士的走法和中国象棋中的马相似，走 “日” 字：即先向左（或右）走 1 格，再向上（或下）走 2 格；或先向左（或右）走 2 格，再向上（或下）走 1 格。
每次移动，他都可以按图示八个方向之一前进。
返回 骑士前去征服坐标为 [x, y] 的部落所需的最小移动次数 。本题确保答案是一定存在的。

示例 1：
输入：x = 2, y = 1
输出：1
解释：[0, 0] → [2, 1]
示例 2：
输入：x = 5, y = 5
输出：4
解释：[0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]

提示：
-300 <= x, y <= 300
0 <=
x
+
y
<= 300
Hint 1: You can simulate the movements since the limits are low.
Hint 2: Is there a search algorithm applicable to this problem?
Hint 3: Since we want the minimum number of moves, we can use Breadth First Search.

```

## Solution

[SourceCode](./solution.js)

## Translation

Infinite chessboard; knight at (0,0); minimum moves to reach (x, y) (x, y may be negative, 0 ≤ x+y ≤ 300).

- Example: x=5, y=5 → `4`

## Approach

**对称 + 有界 BFS**。骑士可走步对 (x,y) 与 (−x,−y) 对称,取 |x|,|y| 在第一象限搜;最优路径不会越过 [−2, |t|+2] 的边界(经典界)。层序 BFS,visited 用编码 key,步数即答案。~300² 状态 × 8 方向。
