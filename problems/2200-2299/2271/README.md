# [2271] Maximum White Tiles Covered by a Carpet

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/description/)

* algorithms
* Medium (35.81%)
* Likes:    840
* Dislikes: 58
* Testcase Example:  '[[1,5],[10,11],[12,18],[20,25],[30,32]]\n10'

```md
You are given a 2D integer array tiles where tiles[i] = [li, ri] represents that every tile j in the range li <= j <= ri is colored white.
You are also given an integer carpetLen, the length of a single carpet that can be placed anywhere.
Return the maximum number of white tiles that can be covered by the carpet.

Example 1:


Input: tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10
Output: 9
Explanation: Place the carpet starting on tile 10.
It covers 9 white tiles, so we return 9.
Note that there may be other places where the carpet covers 9 white tiles.
It can be shown that the carpet cannot cover more than 9 white tiles.

Example 2:


Input: tiles = [[10,11],[1,1]], carpetLen = 2
Output: 2
Explanation: Place the carpet starting on tile 10.
It covers 2 white tiles, so we return 2.


Constraints:

1 <= tiles.length <= 5 * 104
tiles[i].length == 2
1 <= li <= ri <= 109
1 <= carpetLen <= 109
The tiles are non-overlapping.


```

## 翻译

给定一个二维整数数组 tiles，其中 tiles[i] = [li, ri] 表示 li 到 ri 范围内的每个瓦片都被涂成白色。还给定一个整数 carpetLen，表示一块地毯的长度，可以放置在任意位置。返回地毯能覆盖的最多白色瓦片数。

## 解题思路

排序 + 滑动窗口：

1. 将 tiles 按 li 排序
2. 枚举地毯起点为某个 tile 的左端点 li，用滑动窗口维护地毯覆盖范围内所有完整的 tile 区间
3. 对于每个起点 li，地毯覆盖 [li, li + carpetLen - 1]
4. 用前缀和快速计算区间内完整 tile 的覆盖数
5. 对于最后一个可能部分覆盖的 tile，额外计算覆盖部分

## Solution

[SourceCode](./solution.js)
