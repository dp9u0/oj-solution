# [2077] 殊途同归

## Description


```md
https://leetcode.cn/problems/paths-in-maze-that-lead-to-same-room/description/
* algorithms
* Medium (58.04%)
* Likes:    9
* Dislikes: -
* Testcase Example:  '5\n[[1,2],[5,2],[4,1],[2,4],[3,1],[3,4]]'
迷宫由 n 个从 1 到 n 的房间组成，有些房间由走廊连接。给定一个二维整数数组 corridors，其中 corridors[i] = [room1i, room2i] 表示有一条走廊连接 room1i 和room2i，允许迷宫中的一个人从 room1i 到 room2i ，反之亦然。
迷宫的设计者想知道迷宫有多让人困惑。迷宫的 混乱分数 是 长度为 3 的不同的环的数量。
例如, 1 → 2 → 3 → 1 是长度为 3 的环, 但 1 → 2 → 3 → 4 和 1 → 2 → 3 → 2 → 1 不是。
如果在第一个环中访问的一个或多个房间 不在 第二个环中，则认为两个环是 不同 的。
返回迷宫的混乱分数。
示例 1:
输入: n = 5, corridors = [[1,2],[5,2],[4,1],[2,4],[3,1],[3,4]]
输出: 2
解释:
一个长度为 3 的环为 4→1→3→4，用红色表示。
注意，这是与 3→4→1→3 或 1→3→4→1 相同的环，因为房间是相同的。
另一个长度为 3 的环为 1→2→4→1，用蓝色表示。
因此，有两个长度为 3 的不同的环。
示例 2:
输入: n = 4, corridors = [[1,2],[3,4]]
输出: 0
解释:
没有长度为 3 的环。

提示:
2 <= n <= 1000
1 <= corridors.length <= 5 * 104
corridors[i].length == 2
1 <= room1i, room2i <= n
room1i != room2i

没有重复的走廊。
Hint 1: If the path starts at room i, what properties must the other two rooms in the cycle have?
Hint 2: The other two rooms must be connected to room i, and must be connected to each other.

```

## Solution

[SourceCode](./solution.js)

## English Translation

A maze has `n` rooms (1..n) connected by bidirectional corridors `corridors[i] = [a, b]`. The confusion score is the number of distinct cycles of length 3 (two cycles are the same if they visit the same set of rooms). Return the confusion score.

Example 1:
Input: n = 5, corridors = [[1,2],[5,2],[4,1],[2,4],[3,1],[3,4]]
Output: 2

Example 2:
Input: n = 4, corridors = [[1,2],[3,4]]
Output: 0

Constraints: 2 <= n <= 1000, 1 <= corridors.length <= 5 * 10^4, no duplicate corridors.

## Approach

Length-3 cycles are exactly triangles in the undirected graph. Build adjacency bitmaps (n <= 1000 -> 32 uint32 words per node). For every corridor (u, v) count the common neighbors of u and v by ANDing the two bitmaps and popcounting; each triangle is counted once for each of its 3 edges, so the answer is the sum divided by 3.

Time O(E * n / 32).
