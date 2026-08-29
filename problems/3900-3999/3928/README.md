# [3928] Minimum Cost to Buy Apples II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-buy-apples-ii/description/)

* algorithms
* Hard (32.88%)
* Likes:    52
* Dislikes: 2
* Testcase Example:  '2\n[8,3]\n[[0,1,1,2]]'

```md
You are given an integer n and an integer array prices of length n, where prices[i] is the price of apples at shop i.
You are also given a 2D integer array roads, where roads[i] = [ui, vi, costi, taxi] represents a bidirectional road:

ui and vi are the shops connected by the road.
costi is the cost to travel the road without carrying apples.
taxi is the multiplier applied to costi when traveling with apples.

For each shop i, you can either:

Buy apples locally at shop i for prices[i].
Travel empty to any shop j using any number of roads, buy apples for prices[j], and return to shop i while carrying apples, paying cost * tax on each road used for the return trip.

The forward path, where you travel empty, and the return path may be different.
Return an integer array ans of length n, where ans[i] is the minimum total cost to buy apples starting from shop i.

Example 1:

Input: n = 2, prices = [8,3], roads = [[0,1,1,2]]
Output: [6,3]
Explanation:




Shop i
prices[i]
Shop j
prices[j]
costi
taxi
Travel cost
Return cost
Total
Minimum




0
8
1
3
1
2
1
1 * 2 = 2
1 + 2 + 3 = 6
min(8, 6) = 6


1
3
0
8
1
2
1
1 * 2 = 2
1 + 2 + 8 = 11
min(3, 11) = 3



Thus, the answer is [6, 3].

Example 2:

Input: n = 3, prices = [9,4,6], roads = [[0,1,1,3],[1,2,4,2]]
Output: [8,4,6]
Explanation:
​​​​​​​



Shop i
prices[i]
Shop j
prices[j]
costi
taxi
Travel cost
Return cost
Total
Minimum




0
9
1
4
1
3
1
1 * 3 = 3
1 + 3 + 4 = 8
min(9, 8) = 8


1
4
2
6
4
2
4
4 * 2 = 8
4 + 8 + 6 = 18
min(4, 18) = 4


2
6
1
4
4
2
4
4 * 2 = 8
4 + 8 + 4 = 16
min(6, 16) = 6



Thus, the answer is [8, 4, 6].

Example 3:

Input: n = 3, prices = [10,11,1], roads = [[0,2,1,3],[1,2,3,4],[0,1,5,2]]
Output: [5,11,1]
Explanation:
​​​​​​​​​​​​​​



Shop i
prices[i]
Shop j
prices[j]
costi
taxi
Travel cost
Return cost
Total
Minimum




0
10
2
1
1
3
1
1 * 3 = 3
1 + 3 + 1 = 5
min(10, 5) = 5


1
11
2
1
3
4
3
3 * 4 = 12
3 + 12 + 1 = 16
min(11, 16) = 11


2
1
0
10
1
3
1
1 * 3 = 3
1 + 3 + 10 = 14
min(1, 14) = 1



Thus, the answer is [5, 11, 1].


Constraints:

1 <= n <= 1000
prices.length == n
1 <= prices[i] <= 109
0 <= roads.length <= min(n &times; (n - 1) / 2, 2000)
roads[i] = [ui, vi, costi, taxi]
0 <= ui, vi <= n - 1
ui != vi
1 <= costi <= 109
​​​​​​​1 <= tax​​​​​​​i <= 100​​​​​​​
There are no repeated edges.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

n 个商店，`prices[i]` 为本地苹果价；无向边 `[u,v,cost,taxi]`。从 i 出发可以：本地买（价 prices[i]）；或空载走任意路径到 j（每路过 cost），买入后**载货返回** i（每路过 cost×taxi），去回路径可不同。返回每个商店的最小总花费。

示例 1：`2, [8,3], [[0,1,1,2]]` → `[6,3]`

约束：n ≤ 1000（隐藏测试实际更大），roads ≤ 2000，价格/花费 ≤ 1e9

## 解题思路

**分层 Dijkstra + 连通分量隔离 + 上界剪枝**：

- 状态 = (节点, 层)：0 层空载（边权 cost），1 层载货（边权 cost×taxi），层切换边权 prices[v]（恰好在 v 买入）；ans[i] = 到 (i, 载货层) 的最短路；
- 图极稀疏（大量孤立点）→ 孤立点直接本地买；非平凡分量内做局部下标映射后逐源 Dijkstra；
- **剪枝**：ans[i] ≤ prices[i] 作为初始上界，弹出/松弛时 d ≥ bound 即剪（全 1e9 的对抗测试从 388ms 降到 9ms）。

复杂度：分量内 O(k(k+m)logk)，剪枝后实际很快。注意判题环境已有全局 MinHeap 类名，勿重名。