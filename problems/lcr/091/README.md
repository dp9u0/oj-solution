# [LCR 091] 粉刷房子

## Description


```md
https://leetcode.cn/problems/JEj789/description/
* algorithms
* Medium (76.85%)
* Likes:    193
* Dislikes: -
* Testcase Example:  '[[17,2,17],[16,16,5],[14,3,19]]'
假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。
当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x 3 的正整数矩阵 costs 来表示的。
例如，costs[0][0] 表示第 0 号房子粉刷成红色的成本花费；costs[1][2] 表示第 1 号房子粉刷成绿色的花费，以此类推。
请计算出粉刷完所有房子最少的花费成本。

示例 1：
输入: costs = [[17,2,17],[16,16,5],[14,3,19]]
输出: 10
解释: 将 0 号房子粉刷成蓝色，1 号房子粉刷成绿色，2 号房子粉刷成蓝色。
最少花费: 2 + 5 + 3 = 10。
示例 2：
输入: costs = [[7,6,2]]
输出: 2

提示:
costs.length == n
costs[i].length == 3
1 <= n <= 100
1 <= costs[i][j] <= 20

注意：本题与主站 256 题相同：https://leetcode.cn/problems/paint-house/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

There is a row of `n` houses, each can be painted one of three colors: red, blue, or green. You need to paint all houses so that **no two adjacent houses** have the same color.

Naturally, paint of different colors costs differently, and the cost for each house in each color is given as an `n x 3` matrix `costs`. E.g. `costs[0][0]` is the cost of painting house 0 red; `costs[1][2]` is the cost of painting house 1 green, etc.

Compute the **minimum cost** to paint all the houses.

**Example 1:** Input `costs = [[17,2,17],[16,16,5],[14,3,19]]` → Output `10` (blue, green, blue: 2+5+3)
**Example 2:** Input `costs = [[7,6,2]]` → Output `2`

**Constraints:** `costs.length == n`, `1 <= n <= 100`, `costs[i].length == 3`, `1 <= costs[i][j] <= 20`.

Note: same as LeetCode 256.

---

## Approach

**Dynamic programming** over houses with 3 states (color of current house).

Let `dp[c]` = minimum total cost up to the current house, given it is painted color `c`. Initialize with the first house's costs, then for each next house color `c`, `dp[c] = costs[i][c] + min(dp[other two colors])` because neighbors can't match.

Keep only the previous row, so space is `O(1)` beyond input; answer is `min(dp[0..2])`.

Complexity: `O(n)` time, `O(1)` extra space.
