# [LCP 03] 机器人大冒险

## Description


```md
https://leetcode.cn/problems/programmable-robot/description/
* algorithms
* Medium (24.52%)
* Likes:    147
* Dislikes: -
* Testcase Example:  '"URR"\n[]\n3\n2'
力扣团队买了一个可编程机器人，机器人初始位置在原点(0, 0)。小伙伴事先给机器人输入一串指令command，机器人就会无限循环这条指令的步骤进行移动。指令有两种：
U: 向y轴正方向移动一格
R: 向x轴正方向移动一格。
不幸的是，在 xy 平面上还有一些障碍物，他们的坐标用obstacles表示。机器人一旦碰到障碍物就会被损毁。
给定终点坐标(x, y)，返回机器人能否完好地到达终点。如果能，返回true；否则返回false。

示例 1：
输入：command = "URR", obstacles = [], x = 3, y = 2
输出：true
解释：U(0, 1) -> R(1, 1) -> R(2, 1) -> U(2, 2) -> R(3, 2)。
示例 2：
输入：command = "URR", obstacles = [[2, 2]], x = 3, y = 2
输出：false
解释：机器人在到达终点前会碰到(2, 2)的障碍物。
示例 3：
输入：command = "URR", obstacles = [[4, 2]], x = 3, y = 2
输出：true
解释：到达终点后，再碰到障碍物也不影响返回结果。

限制：
2 <= command的长度 <= 1000
command由U，R构成，且至少有一个U，至少有一个R
0 <= x <= 1e9, 0 <= y <= 1e9
0 <= obstacles的长度 <= 1000
obstacles[i]不为原点或者终点

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The LeetCode team bought a programmable robot. The robot starts at the origin (0, 0). A friend pre-inputs a sequence of instructions `command`, and the robot will move following this instruction sequence repeatedly in an infinite loop. There are two kinds of instructions:
- `U`: move one unit in the positive y-axis direction.
- `R`: move one unit in the positive x-axis direction.

Unfortunately, there are some obstacles on the xy-plane, whose coordinates are given in `obstacles`. The robot is destroyed once it hits an obstacle.

Given the target coordinate (x, y), return whether the robot can reach the target intact. Return `true` if it can, otherwise return `false`.

Example 1:
```
Input: command = "URR", obstacles = [], x = 3, y = 2
Output: true
Explanation: U(0,1) -> R(1,1) -> R(2,1) -> U(2,2) -> R(3,2).
```

Example 2:
```
Input: command = "URR", obstacles = [[2, 2]], x = 3, y = 2
Output: false
Explanation: The robot hits (2, 2) before reaching the target.
```

Example 3:
```
Input: command = "URR", obstacles = [[4, 2]], x = 3, y = 2
Output: true
Explanation: After reaching the target, hitting an obstacle does not affect the result.
```

Constraints:
- `2 <= command.length <= 1000`
- `command` consists of `U` and `R`, with at least one `U` and at least one `R`.
- `0 <= x <= 1e9`, `0 <= y <= 1e9`
- `0 <= obstacles.length <= 1000`
- `obstacles[i]` is neither the origin nor the target.

---

## Approach

Since the robot repeats `command` infinitely, each full cycle produces a fixed displacement `(dx, dy)`, where `dx` = number of `R` and `dy` = number of `U`.

**Key observation — is a point on the path?**
For any point `(px, py)` on the robot's route, we can compute how many full cycles were completed before the robot could reach it:
```
k = min(px / dx, py / dy)   (integer division)
```
Then the point is reached during the `(k+1)`-th cycle iff the remainder offset `(px - k*dx, py - k*dy)` appears among the prefix positions of a single `command` execution (including the origin, excluding the end-of-cycle position which equals the next cycle's origin).

Precompute the set of prefix positions of one command: start at `(0,0)`, add current position after each move. Since `command.length <= 1000`, this set has at most 1001 entries.

**Algorithm:**
1. If the target `(x, y)` is not on the path → return `false`.
2. For each obstacle `(ox, oy)`:
   - If the obstacle is not on the path → ignore.
   - If the obstacle is on the path, it blocks the robot only if it is reached strictly *before* the target, i.e. `k_obs * cycle + stepsWithinCycle(obs) < k_target * cycle + stepsWithinCycle(target)` (fewer total steps). If so → return `false`.
3. Otherwise return `true`.

We compute the number of steps within a cycle for a given point by counting moves along the single command path.

Time: O(command.length + obstacles.length), Space: O(command.length).
