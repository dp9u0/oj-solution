# [2473] 购买苹果的最低成本

## Description


```md
https://leetcode.cn/problems/minimum-cost-to-buy-apples/description/
* algorithms
* Medium (56.74%)
* Likes:    6
* Dislikes: -
* Testcase Example:  '4\n[[1,2,4],[2,3,2],[2,4,5],[3,4,1],[1,3,4]]\n[56,42,102,301]\n2'
给你一个正整数  n，表示从 1 到 n 的 n 个城市。还给你一个 二维 数组 roads，其中 roads[i] = [ai, bi, costi] 表示在城市 ai 和 bi 之间有一条双向道路，其旅行成本等于 costi。
你可以在 任何 城市买到苹果，但是有些城市买苹果的费用不同。给定数组 appleCost ，其中 appleCost[i] 是从城市 i 购买一个苹果的成本。
你从某个城市开始，穿越各种道路，最终从 任何一个 城市买 一个 苹果。在你买了那个苹果之后，你必须回到你 开始的 城市，但现在所有道路的成本将 乘以 一个给定的因子 k。
给定整数 k，返回一个大小为 n 的从 1 开始的数组 answer，其中 answer[i] 是从城市 i 开始购买一个苹果的 最小 总成本。

示例 1:
输入: n = 4, roads = [[1,2,4],[2,3,2],[2,4,5],[3,4,1],[1,3,4]], appleCost = [56,42,102,301], k = 2
输出: [54,42,48,51]
解释: 每个起始城市的最低费用如下:
- 从城市 1 开始:你走路径 1 -> 2，在城市 2 买一个苹果，最后走路径 2 -> 1。总成本是 4 + 42 + 4 * 2 = 54。
- 从城市 2 开始:你直接在城市 2 买一个苹果。总费用是 42。
- 从城市 3 开始:你走路径 3 -> 2，在城市 2 买一个苹果，最后走路径 2 -> 3。总成本是 2 + 42 + 2 * 2 = 48。
- 从城市 4 开始:你走路径 4 -> 3 -> 2，然后你在城市 2 购买，最后走路径 2 -> 3 -> 4。总成本是 1 + 2 + 42 + 1 * 2 + 2 * 2 = 51。
示例 2:
输入: n = 3, roads = [[1,2,5],[2,3,1],[3,1,2]], appleCost = [2,3,1], k = 3
输出: [2,3,1]
解释: 在起始城市买苹果总是最优的。

提示:
2 <= n <= 1000
1 <= roads.length <= 1000
1 <= ai, bi <= n
ai != bi
1 <= costi <= 105
appleCost.length == n
1 <= appleCost[i] <= 105
1 <= k <= 100

没有重复的边。
Hint 1: Notice that the path you take to buy an apple will be the same path to return to the starting city.
Hint 2: Starting from each city, use Dijkstra’s algorithm to find the best city to travel to.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Undirected weighted roads between n cities; appleCost[i] to buy an apple in city i. Starting from city s, travel to some city t, buy an apple, and return to s with every road cost multiplied by k. answer[s] = minimum total cost.

Example 1:
Input: n = 4, roads = [[1,2,4],[2,3,2],[2,4,5],[3,4,1],[1,3,4]], appleCost = [56,42,102,301], k = 2
Output: [54,42,48,51]

Example 2:
Input: n = 3, roads = [[1,2,5],[2,3,1],[3,1,2]], appleCost = [2,3,1], k = 3
Output: [2,3,1]

Constraints: 2 <= n <= 1000, roads <= 1000, k <= 100.

## Approach

The route out and back is the same path (undirected), so for start s the best is min over t of dist(s,t) * (1 + k) + appleCost[t]. Run Dijkstra from every city and take that minimum. O(n * E log V).
