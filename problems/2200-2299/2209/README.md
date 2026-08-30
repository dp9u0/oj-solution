# [2209] Minimum White Tiles After Covering With Carpets

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/description/)

* algorithms
* Hard (39.39%)
* Likes:    526
* Dislikes: 17
* Testcase Example:  '"10110101"\n2\n2'

```md
You are given a 0-indexed binary string floor, which represents the colors of tiles on a floor:

floor[i] = &#39;0&#39; denotes that the ith tile of the floor is colored black.
On the other hand, floor[i] = &#39;1&#39; denotes that the ith tile of the floor is colored white.

You are also given numCarpets and carpetLen. You have numCarpets black carpets, each of length carpetLen tiles. Cover the tiles with the given carpets such that the number of white tiles still visible is minimum. Carpets may overlap one another.
Return the minimum number of white tiles still visible.

Example 1:


Input: floor = '10110101', numCarpets = 2, carpetLen = 2
Output: 2
Explanation:
The figure above shows one way of covering the tiles with the carpets such that only 2 white tiles are visible.
No other way of covering the tiles with the carpets can leave less than 2 white tiles visible.

Example 2:


Input: floor = '11111', numCarpets = 2, carpetLen = 3
Output: 0
Explanation:
The figure above shows one way of covering the tiles with the carpets such that no white tiles are visible.
Note that the carpets are able to overlap one another.


Constraints:

1 <= carpetLen <= floor.length <= 1000
floor[i] is either &#39;0&#39; or &#39;1&#39;.
1 <= numCarpets <= 1000

Hint 1: Can you think of a DP solution?
Hint 2: Let DP[i][j] denote the minimum number of white tiles still visible from indices i to floor.length-1 after covering with at most j carpets.
Hint 3: The transition will be whether to put down the carpet at position i (if possible), or not.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给你一个下标从 0 开始的二进制字符串 `floor`，表示地板上瓷砖的颜色：

- `floor[i] = '0'` 表示第 `i` 块瓷砖是黑色。
- `floor[i] = '1'` 表示第 `i` 块瓷砖是白色。

同时给你 `numCarpets` 和 `carpetLen`。你有 `numCarpets` 条黑色地毯，每条地毯的长度为 `carpetLen` 块瓷砖。请用地毯覆盖瓷砖，使得仍然可见的白色瓷砖数量最少。地毯之间可以互相重叠。

返回仍然可见的白色瓷砖的最少数量。

示例 1：
- 输入：`floor = "10110101", numCarpets = 2, carpetLen = 2`
- 输出：`2`
- 解释：用两条地毯覆盖后仅剩 2 块白色瓷砖可见，不存在更少的方案。

示例 2：
- 输入：`floor = "11111", numCarpets = 2, carpetLen = 3`
- 输出：`0`
- 解释：两条地毯（可重叠）可以覆盖所有白色瓷砖。

约束：
- `1 <= carpetLen <= floor.length <= 1000`
- `floor[i]` 为 `'0'` 或 `'1'`
- `1 <= numCarpets <= 1000`

## 解题思路

**动态规划（后缀 DP）**

设 `dp[i][j]` 表示从下标 `i` 到末尾的区间内，最多使用 `j` 条地毯时，仍然可见的白色瓷砖最少数量。

- 边界：`dp[n][j] = 0`（没有瓷砖了）。
- 转移（对每个位置 `i` 有两种决策）：
  1. 不在位置 `i` 放地毯（`i` 号砖裸露）：`dp[i][j] = dp[i+1][j] + (floor[i] == '1' ? 1 : 0)`
  2. 用一条地毯覆盖位置 `i`（要求 `j > 0`）：地毯直接从 `i` 开始铺，覆盖 `[i, i+carpetLen)`，得 `dp[i][j] = dp[min(i+carpetLen, n)][j-1]`
- 答案：`dp[0][numCarpets]`。

**为什么铺在 `i` 处是最优的？** 若某条最优方案中的地毯覆盖了位置 `i`，可以把它向右平移直到左端恰好在 `i`，这不会使位置 `i` 裸露，而 `i` 左侧的位置在后缀 DP 中已处理完毕、不受影响（交换论证）。

**复杂度**
- 时间：`O(n × numCarpets)`，最多 10^6 次转移。
- 空间：`O(n × numCarpets)`，用二维数组（1001×1001 以内）。
