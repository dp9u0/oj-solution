# [LCP 56] 信物传送

## Description


```md
https://leetcode.cn/problems/6UEx57/description/
* algorithms
* Medium (50.29%)
* Likes:    33
* Dislikes: -
* Testcase Example:  '[">>v","v^<","<><"]\n[0,1]\n[2,0]'
欢迎各位勇者来到力扣城，本次试炼主题为「信物传送」。
本次试炼场地设有若干传送带，matrix[i][j] 表示第 i 行 j 列的传送带运作方向，"^","v","<",">" 这四种符号分别表示 上、下、左、右 四个方向。信物会随传送带的方向移动。勇者每一次施法操作，可临时变更一处传送带的方向，在物品经过后传送带恢复原方向。
通关信物初始位于坐标 start处，勇者需要将其移动到坐标 end 处，请返回勇者施法操作的最少次数。
注意：
start 和 end 的格式均为 [i,j]
示例 1：
输入：matrix = [">>v","v^<","<><"], start = [0,1], end = [2,0]
输出：1
解释： 如上图所示 当信物移动到 [1,1] 时，勇者施法一次将 [1,1] 的传送方向 ^ 从变更为 < 从而信物移动到 [1,0]，后续到达 end 位置 因此勇者最少需要施法操作 1 次
示例 2：
输入：matrix = [">>v",">>v","^<<"], start = [0,0], end = [1,1]
输出：0
解释：勇者无需施法，信物将自动传送至 end 位置
示例 3：
输入：matrix = [">^^>","<^v>","^v^<"], start = [0,0], end = [1,3]
输出：3
提示：
matrix 中仅包含 '^'、'v'、'<'、'>'
0 < matrix.length <= 100
0 < matrix[i].length <= 100
0 <= start[0],end[0] < matrix.length
0 <= start[1],end[1] < matrix[i].length

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The venue has conveyor belts. `matrix[i][j]` is the direction of the belt at row i, column j — `^`, `v`, `<`, `>` mean up, down, left, right. A token moves along the belt's direction. In one spell cast, Xiao Kou can temporarily change one belt's direction (it restores after the token passes).

The token starts at `start`; return the **minimum number of spell casts** needed to move it to `end`.

**Example 1:** `matrix=[">>v","v^<","<><"], start=[0,1], end=[2,0]` → `1`
**Example 2:** `matrix=[">>v",">>v","^<<"], start=[0,0], end=[1,1]` → `0`
**Example 3:** `matrix=[">^^>","<^v>","^v^<"], start=[0,0], end=[1,3]` → `3`

**Constraints:** grid ≤ 100×100.

---

## Approach

**0-1 BFS** over grid cells:

- From a cell, following its current belt direction moves the token to an adjacent cell at **cost 0**.
- Casting a spell to send the token in any of the other 3 directions costs **1**.

Use a deque (cost-0 pushes to front, cost-1 to back), tracking min cost per cell. Answer = min cost to reach `end`.

Complexity: `O(R·C)` time and space.
