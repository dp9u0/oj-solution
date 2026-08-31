# [4034] Minimum Bishop Moves to Reach Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-bishop-moves-to-reach-target/description/)

* algorithms
* Medium (65.47%)
* Likes:    30
* Dislikes: 2
* Testcase Example:  '[8,1]\n[1,8]'

```md
There is an 8 x 8 empty chessboard with 1-indexed rows and columns.
You are given an array source = [sr, sc] representing the starting position of a bishop, and an array target = [tr, tc] representing the target position.
In one move, the bishop travels one or more squares along a single diagonal direction, staying within the board.
Return the minimum number of moves for the bishop to land exactly on target. If it can never reach target, return -1.

Example 1:
Input: source = [8,1], target = [1,8]
Output: 1
Explanation:
​​​​​​​
A single diagonal move takes the bishop straight from (8, 1) to (1, 8).
Example 2:
Input: source = [4,2], target = [1,3]
Output: 2
Explanation:
The bishop moves from (4, 2) to (3, 1), then from (3, 1) to (1, 3), reaching the target in 2 moves.
Example 3:
Input: source = [1,1], target = [3,4]
Output: -1
Explanation:
No matter how many diagonal moves it makes, the bishop starting at (1, 1) can never land on (3, 4). Thus, the answer is -1.

Constraints:​​​​​​​
source.length == target.length == 2
1 <= sr, sc, tr, tc <= 8
source != target
Hint 1: First consider the cases where no move is needed or where the target is unreachable. A bishop always remains on squares of the same color.
Hint 2: Two squares are on the same diagonal if either r - c or r + c is equal for both squares. If the target is reachable but not on the same diagonal, determine how many moves are sufficient.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

有一个 8 x 8 的空棋盘，行和列均从 1 开始编号。
给定数组 source = [sr, sc] 表示象（bishop）的起始位置，数组 target = [tr, tc] 表示目标位置。
每一步移动中，象沿单一对角线方向移动一格或多格（不能超出棋盘）。
返回象恰好落到目标位置所需的最少移动次数。如果永远无法到达目标位置，返回 -1。

示例 1：
输入：source = [8,1], target = [1,8]
输出：1
解释：一步对角线移动即可使象从 (8, 1) 直达 (1, 8)。

示例 2：
输入：source = [4,2], target = [1,3]
输出：2
解释：象先从 (4, 2) 移到 (3, 1)，再从 (3, 1) 移到 (1, 3)，两步到达目标。

示例 3：
输入：source = [1,1], target = [3,4]
输出：-1
解释：无论进行多少次对角线移动，起始位于 (1, 1) 的象永远无法落到 (3, 4)，因此返回 -1。

约束：
source.length == target.length == 2
1 <= sr, sc, tr, tc <= 8
source != target

## 解题思路

O(1) 数学判断，利用象（主教）的移动性质：

1. **不可达判断（颜色不变量）**：象每走一步，r+c 的变化量为 ±2k（行、列同时变化 ±k），因此 (r+c) 的奇偶性永远不变，即象始终停留在同色格子上。若 `(sr+sc) % 2 !== (tr+tc) % 2`，返回 -1。

2. **一步直达（同对角线）**：两格在同一条对角线上当且仅当 `r-c` 相等（主对角线方向）或 `r+c` 相等（副对角线方向）。若满足其一，返回 1。

3. **两步到达**：颜色相同但不在同一对角线时，经过 source 的两条对角线（r+c=s 或 r-c=d）与经过 target 的两条对角线（r+c=s' 或 r-c=d'）必有整数交点（因为同色保证 s-d' 为偶数）。可以证明在 8x8 棋盘上两个交点 `((s+d')/2, (s-d')/2)` 与 `((s'+d)/2, (s'-d)/2)` 中至少有一个落在棋盘内，因此答案恒为 2。

时间复杂度 O(1)，空间复杂度 O(1)。
