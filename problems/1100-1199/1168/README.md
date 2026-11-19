# [1168] 水资源分配优化

## Description


```md
https://leetcode.cn/problems/optimize-water-distribution-in-a-village/description/
* algorithms
* Hard (65.13%)
* Likes:    113
* Dislikes: -
* Testcase Example:  '3\n[1,2,2]\n[[1,2,1],[2,3,1]]'
村里面一共有 n 栋房子。我们希望通过建造水井和铺设管道来为所有房子供水。
对于每个房子 i，我们有两种可选的供水方案：一种是直接在房子内建造水井，成本为 wells[i - 1] （注意 -1 ，因为 索引从0开始 ）；另一种是从另一口井铺设管道引水，数组 pipes 给出了在房子间铺设管道的成本，其中每个 pipes[j] = [house1j, house2j, costj] 代表用管道将 house1j 和 house2j连接在一起的成本。连接是双向的。
请返回 为所有房子都供水的最低总成本 。

示例 1：
输入：n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]
输出：3
解释：
上图展示了铺设管道连接房屋的成本。
最好的策略是在第一个房子里建造水井（成本为 1），然后将其他房子铺设管道连起来（成本为 2），所以总成本为 3。
示例 2：
输入：n = 2, wells = [1,1], pipes = [[1,2,1]]
输出：2
解释：我们可以用以下三种方法中的一种来提供低成本的水:
选项1:
在1号房子里面建一口井，成本为1
在房子2内建造井，成本为1
总成本是2。
选项2:
在1号房子里面建一口井，成本为1
-花费1连接房子2和房子1。
总成本是2。
选项3:
在房子2内建造井，成本为1
-花费1连接房子1和房子2。
总成本是2。
注意，我们可以用cost 1或cost 2连接房子1和房子2，但我们总是选择最便宜的选项。

提示：
2 <= n <= 104
wells.length == n
0 <= wells[i] <= 105
1 <= pipes.length <= 104
pipes[j].length == 3
1 <= house1j, house2j <= n
0 <= costj <= 105
house1j != house2j
Hint 1: What if we model this problem as a graph problem?
Hint 2: A house is a node and a pipe is a weighted edge.
Hint 3: How to represent building wells in the graph model?
Hint 4: Add a virtual node, connect it to houses with edges weighted by the costs to build wells in these houses.
Hint 5: The problem is now reduced to a Minimum Spanning Tree problem.

```

## Solution

[SourceCode](./solution.js)

## Translation

Supply water to n houses: build a well in house i (cost wells[i-1]) or lay pipes between houses (given costs). Minimize total.

- Example: n=3, wells=[1,2,2], pipes=[[1,2,1],[2,3,1]] → `3` (well at 1 + pipes 1-2, 2-3)

## Approach

**虚节点 + MST**。加虚节点 0,与房子 i 连一条成本 wells[i-1] 的边(建井 = 从"水源"接水),管道边照加;对 n+1 个节点跑 Kruskal(n 条生成树边),总成本即最小供水成本。连通性由虚节点保证。O(E log E)。
