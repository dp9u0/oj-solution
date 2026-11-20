# [1257] 最小公共区域

## Description


```md
https://leetcode.cn/problems/smallest-common-region/description/
* algorithms
* Medium (62.73%)
* Likes:    62
* Dislikes: -
* Testcase Example:  '[["Earth","North America","South America"],["North America","United States","Canada"],["United States","New York","Boston"],["Canada","Ontario","Quebec"],["South America","Brazil"]]\n' +
'"Quebec"\n' +
'"New York"'
给你一些区域列表 regions ，每个列表的第一个区域都 直接 包含这个列表内所有其他区域。
如果一个区域 x 直接包含区域 y，并且区域 y 直接包含区域 z，那么说区域 x 间接 包含区域 z。请注意，区域 x 也 间接 包含所有在 y 中 间接 包含的区域。
很自然地，如果区域 x 包含区域 y ，那么区域 x  比区域 y 大。同时根据定义，区域 x 包含自身。
给定两个区域 region1 和 region2 ，找到同时包含这两个区域的 最小 区域。
数据同样保证最小区域一定存在。

示例 1：
输入：
regions = [["Earth","North America","South America"],
["North America","United States","Canada"],
["United States","New York","Boston"],
["Canada","Ontario","Quebec"],
["South America","Brazil"]],
region1 = "Quebec",
region2 = "New York"
输出："North America"
示例 2：
输入：regions = [["Earth", "North America", "South America"],["North America", "United States", "Canada"],["United States", "New York", "Boston"],["Canada", "Ontario", "Quebec"],["South America", "Brazil"]], region1 = "Canada", region2 = "South America"
输出："Earth"

提示：
2 <= regions.length <= 104
2 <= regions[i].length <= 20
1 <= regions[i][j].length, region1.length, region2.length <= 20
region1 != region2
regions[i][j]，region1 和 region2 由英语字母组成。
输入保证存在一个区域直接或间接包含所有其他区域。
Hint 1: Try to model the problem as a graph problem.
Hint 2: The given graph is a tree.
Hint 3: The problem is reduced to finding the lowest common ancestor of two nodes in a tree.

```

## Solution

[SourceCode](./solution.js)

## Translation

Each region list's first entry contains the rest (a tree). Find the smallest region containing both region1 and region2 (LCA).

- Example: see sample → "North America"

## Approach

**父映射 + 祖先集合**。regions[i][0] 是其余项的父节点,建 child→parent 表;region1 沿父链收集祖先集合,region2 向上走直到命中集合即 LCA。O(N)。
