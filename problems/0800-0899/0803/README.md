# [803] Bricks Falling When Hit

## Description

[LeetCode Problem Description](https://leetcode.com/problems/bricks-falling-when-hit/description/)

* algorithms
* Hard (37.80%)
* Likes:    1220
* Dislikes: 194
* Testcase Example:  '[[1,0,0,0],[1,1,1,0]]\n[[1,0]]'

```md
You are given an m x n binary grid, where each 1 represents a brick and 0 represents an empty space. A brick is stable if:

It is directly connected to the top of the grid, or
At least one other brick in its four adjacent cells is stable.

You are also given an array hits, which is a sequence of erasures we want to apply. Each time we want to erase the brick at the location hits[i] = (rowi, coli). The brick on that location(if it exists) will disappear. Some other bricks may no longer be stable because of that erasure and will fall. Once a brick falls, it is immediately erased from the grid (i.e., it does not land on other stable bricks).
Return an array result, where each result[i] is the number of bricks that will fall after the ith erasure is applied.
Note that an erasure may refer to a location with no brick, and if it does, no bricks drop.

Example 1:

Input: grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]
Output: [2]
Explanation: Starting with the grid:
[[1,0,0,0],
[1,1,1,0]]
We erase the underlined brick at (1,0), resulting in the grid:
[[1,0,0,0],
[0,1,1,0]]
The two underlined bricks are no longer stable as they are no longer connected to the top nor adjacent to another stable brick, so they will fall. The resulting grid is:
[[1,0,0,0],
[0,0,0,0]]
Hence the result is [2].

Example 2:

Input: grid = [[1,0,0,0],[1,1,0,0]], hits = [[1,1],[1,0]]
Output: [0,0]
Explanation: Starting with the grid:
[[1,0,0,0],
[1,1,0,0]]
We erase the underlined brick at (1,1), resulting in the grid:
[[1,0,0,0],
[1,0,0,0]]
All remaining bricks are still stable, so no bricks fall. The grid remains the same:
[[1,0,0,0],
[1,0,0,0]]
Next, we erase the underlined brick at (1,0), resulting in the grid:
[[1,0,0,0],
[0,0,0,0]]
Once again, all remaining bricks are still stable, so no bricks fall.
Hence the result is [0,0].


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
grid[i][j] is 0 or 1.
1 <= hits.length <= 4 * 104
hits[i].length == 2
0 <= xi<= m - 1
0 <=yi <= n - 1
All (xi, yi) are unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

`m x n` 二维网格，1 是砖、0 是空。砖**稳定**当且仅当：直接与网格顶端相连，或四相邻格中至少有一块稳定砖（稳定性沿连通传递 = 与顶行砖连通）。给定擦除序列 `hits`：每次擦掉 `(x, y)` 处的砖（若存在），因失去支撑而落下的砖**全部消失**（不会堆叠）。返回每次擦除后落下的砖数。命中的位置可能无砖，此时掉落 0。

示例 1：`[[1,0,0,0],[1,1,1,0]], hits=[[1,0]]` → `[2]`
示例 2：`[[1,0,0,0],[1,1,0,0]], hits=[[1,1],[1,0]]` → `[0,0]`

约束：`m, n <= 200`，`|hits| <= 4×10^4`，命中位置互异

## 解题思路

**逆向时光 + 并查集**（打砖块的经典套路）：

1. 先把所有 hit 应用到网格：原本有砖的标 2（被打掉的），无砖的标 0；
2. 在**最终**网格上建并查集：所有剩余 1 砖与四邻相连，顶行砖连到虚拟**屋顶**节点，维护连通块大小；
3. **倒序**恢复被击碎的砖：恢复前记屋顶块大小 `before`，把该格置 1 并与四邻 1 砖及（若在顶行）屋顶合并，再记 `after`；本次掉落数 = `after − before − 1`（减 1 是恢复的那块本身，用 max(0,·) 防负）；
4. 原本无砖的命中直接 0。

复杂度 O(mn·α + |hits|)。

验证示例 1：逆向恢复 (1,0) 前屋顶大小 1，恢复连通后 4 → 4−1−1 = 2 ✓
