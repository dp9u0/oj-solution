# [3245] Alternating Groups III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/alternating-groups-iii/description/)

* algorithms
* Hard (19.10%)
* Likes:    61
* Dislikes: 10
* Testcase Example:  '[0,1,1,0,1]\n[[2,1,0],[1,4]]'

```md
There are some red and blue tiles arranged circularly. You are given an array of integers colors and a 2D integers array queries.
The color of tile i is represented by colors[i]:

colors[i] == 0 means that tile i is red.
colors[i] == 1 means that tile i is blue.

An alternating group is a contiguous subset of tiles in the circle with alternating colors (each tile in the group except the first and last one has a different color from its adjacent tiles in the group).
You have to process queries of two types:

queries[i] = [1, sizei], determine the count of alternating groups with size sizei.
queries[i] = [2, indexi, colori], change colors[indexi] to colori.

Return an array answer containing the results of the queries of the first type in order.
Note that since colors represents a circle, the first and the last tiles are considered to be next to each other.

Example 1:

Input: colors = [0,1,1,0,1], queries = [[2,1,0],[1,4]]
Output: [2]
Explanation:

First query:
Change colors[1] to 0.

Second query:
Count of the alternating groups with size 4:


Example 2:

Input: colors = [0,0,1,0,1,1], queries = [[1,3],[2,3,0],[1,5]]
Output: [2,0]
Explanation:

First query:
Count of the alternating groups with size 3:

Second query: colors will not change.
Third query: There is no alternating group with size 5.


Constraints:

4 <= colors.length <= 5 * 104
0 <= colors[i] <= 1
1 <= queries.length <= 5 * 104
queries[i][0] == 1 or queries[i][0] == 2
For all i that:

queries[i][0] == 1: queries[i].length == 2, 3 <= queries[i][1] <= colors.length - 1
queries[i][0] == 2: queries[i].length == 3, 0 <= queries[i][1] <= colors.length - 1, 0 <= queries[i][2] <= 1




```

## 题目翻译

给定环形排列的 colors 数组（0=红，1=蓝）和 queries。交替组是环形中颜色交替的连续子序列。处理两种查询：
1. [1, size]：统计大小为 size 的交替组数量
2. [2, index, color]：将 colors[index] 改为 color

返回所有类型 1 查询的结果。

## 解题思路

**区间管理 + 差分数组**。

核心观察：
- 环形数组中，先找出所有交替段（最大交替区间）的长度。
- 一个长度为 L 的交替段，包含大小为 s 的交替组数量为 max(0, L - s + 1)。
- 用差分数组 cnt[s] 记录各大小交替组的数量，即对每个长度 L 的段，cnt[s..L] 各加 1，等价于用差分数组：diff[1]+=1, diff[L+1]-=1，然后前缀和得到 cnt。
- 更新操作：修改一个位置的颜色可能影响相邻交替段的合并或分裂。需要维护一个有序集合（按段起始位置排序），支持插入、删除、查找。
- 由于 JS 没有内置有序集合，用数组手动管理段。

具体实现：
1. 先找到所有交替段（环上首尾相连的情况需特殊处理）。
2. 用 Map 记录每个长度出现的次数，查询时用前缀和计算。
3. 更新时，修改位置的颜色，检查是否需要合并/分裂相邻段，更新长度计数。

## Solution

[SourceCode](./solution.js)
