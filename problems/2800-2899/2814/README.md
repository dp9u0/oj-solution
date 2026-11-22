# [2814] 避免淹死并到达目的地的最短时间

## Description


```md
https://leetcode.cn/problems/minimum-time-takes-to-reach-destination-without-drowning/description/
* algorithms
* Hard (25.48%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[["D",".","*"],[".",".","."],[".","S","."]]'
现给定一个 n * m 的索引从 0 开始的二维字符串网格 land，目前你站在为 "S" 的单元格上，你需要到达为 "D" 的单元格。在这片区域上还有另外三种类型的单元格：
"."：这些单元格是空的。
"X"：这些单元格是石头。
"*"：这些单元格被淹没了。
每秒钟，你可以移动到与当前单元格共享边的单元格（如果它存在）。此外，每秒钟，与被淹没的单元格共享边的每个 空单元格 也会被淹没。
在你的旅程中，有两个需要注意的问题：
你不能踩在石头单元格上。
你不能踩在被淹没的单元格上，因为你会淹死（同时，你也不能踩在在你踩上时会被淹没的单元格上）。
返回从起始位置到达目标位置所需的 最小 时间（以秒为单位），如果不可能达到目标位置，则返回 -1。
注意，目标位置永远不会被淹没。

示例 1：
输入：land = [["D",".","*"],[".",".","."],[".","S","."]]
输出：3
解释：下面的图片逐秒模拟了土地的变化。蓝色的单元格被淹没，灰色的单元格是石头。
图片（0）显示了初始状态，图片（3）显示了当我们到达目标时的最终状态。正如你所看到的，我们需要 3 秒才能到达目标位置，答案是 3。
可以证明 3 是从 S 到 D 所需的最小时间。
示例 2：
输入：land = [["D","X","*"],[".",".","."],[".",".","S"]]
输出：-1
解释：下面的图片逐秒模拟了土地的变化。蓝色的单元格被淹没，灰色的单元格是石头。
图片（0）显示了初始状态。正如你所看到的，无论我们选择哪条路径，我们都会在第三秒淹没。并且从 S 到 D 的最小路径需要 4 秒。
所以答案是 -1。
示例 3：
输入：land = [["D",".",".",".","*","."],[".","X",".","X",".","."],[".",".",".",".","S","."]]
输出：6
解释：可以证明我们可以在 6 秒内到达目标位置。同时也可以证明 6 是从 S 到 D 所需的最小秒数。

提示：
2 <= n, m <= 100
land 只由 "S", "D", ".", "*" 和 "X" 组成。
恰好有一个单元格等于 "S"。
恰好有一个单元格等于 "D"。
Hint 1: Think of using breadth-first search.
Hint 2: Use a BFS to find for each cell the time at which it will become flooded.
Hint 3: Another BFS then simulates your movement, taking into account information gathered by the first BFS.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Grid with S (start), D (destination, never floods), '.' empty, '*' flooded, X stone. Each second you move to an edge-adjacent cell, and every empty cell sharing an edge with a flooded cell becomes flooded. You may never enter a stone, a flooded cell, or a cell that floods at the very second you enter. Minimum time S -> D or -1.

Approach: two BFS.
1. Multi-source BFS from all '*' gives floodTime[c] for every floodable cell ('.' or 'S'; X and D never flood -> Infinity).
2. BFS from S: moving to neighbor u at second t+1 is allowed iff u is 'D' (always enterable) or u is '.'/'S' with floodTime[u] > t + 1.

Answer: distance to D or -1. O(n*m).

Verified on example 2 (star behind you, path length 4 but flood cuts it) -> -1.
