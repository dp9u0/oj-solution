# [3609] Minimum Moves to Reach Target in Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-moves-to-reach-target-in-grid/description/)

* algorithms
* Hard (14.99%)
* Likes:    57
* Dislikes: 3
* Testcase Example:  '1\n2\n5\n4'

```md
You are given four integers sx, sy, tx, and ty, representing two points (sx, sy) and (tx, ty) on an infinitely large 2D grid.
You start at (sx, sy).
At any point (x, y), define m = max(x, y). You can either:

Move to (x + m, y), or
Move to (x, y + m).

Return the minimum number of moves required to reach (tx, ty). If it is impossible to reach the target, return -1.

Example 1:

Input: sx = 1, sy = 2, tx = 5, ty = 4
Output: 2
Explanation:
The optimal path is:

Move 1: max(1, 2) = 2. Increase the y-coordinate by 2, moving from (1, 2) to (1, 2 + 2) = (1, 4).
Move 2: max(1, 4) = 4. Increase the x-coordinate by 4, moving from (1, 4) to (1 + 4, 4) = (5, 4).

Thus, the minimum number of moves to reach (5, 4) is 2.

Example 2:

Input: sx = 0, sy = 1, tx = 2, ty = 3
Output: 3
Explanation:
The optimal path is:

Move 1: max(0, 1) = 1. Increase the x-coordinate by 1, moving from (0, 1) to (0 + 1, 1) = (1, 1).
Move 2: max(1, 1) = 1. Increase the x-coordinate by 1, moving from (1, 1) to (1 + 1, 1) = (2, 1).
Move 3: max(2, 1) = 2. Increase the y-coordinate by 2, moving from (2, 1) to (2, 1 + 2) = (2, 3).

Thus, the minimum number of moves to reach (2, 3) is 3.

Example 3:

Input: sx = 1, sy = 1, tx = 2, ty = 2
Output: -1
Explanation:

It is impossible to reach (2, 2) from (1, 1) using the allowed moves. Thus, the answer is -1.



Constraints:

0 <= sx <= tx <= 109
0 <= sy <= ty <= 109


```

## 中文翻译

在无限大的二维网格上，从 (sx, sy) 出发到达 (tx, ty)。
每一步在 (x, y) 处，m = max(x, y)，可以走到 (x+m, y) 或 (x, y+m)。
返回最少步数，不可达返回 -1。

约束：0 <= sx <= tx <= 10^9，0 <= sy <= ty <= 10^9

## 解题思路

**逆向推导 + BFS/贪心**

1. 正向 BFS 会指数膨胀，不可行。考虑逆向：从 (tx, ty) 倒推回 (sx, sy)。
2. 逆向：如果上一步是 (x, y) → (x+m, y)，则 (tx, ty) 中 tx > ty 时，上一步 x = tx - max(x,y) = tx - ty（因为 m = max(x,y) <= tx - m + m 的关系）。
3. 当 tx > ty 时，上一步只能是 x 增加，所以逆推 x = tx - ty，y 不变。
4. 当 ty > tx 时，上一步只能是 y 增加，所以逆推 y = ty - tx，x 不变。
5. 当 tx == ty 时无法逆推（不确定是 x 还是 y 增加的），需要特殊处理。
6. 使用类似辗转相除的加速：连续多步逆推时可以批量计算步数。
7. 当 tx == ty 时，上一步的 m 必须等于 tx（或 ty），所以上一步是 (0, ty) 或 (tx, 0)，需要检查哪个可达 (sx, sy)。

## Solution

[SourceCode](./solution.js)
