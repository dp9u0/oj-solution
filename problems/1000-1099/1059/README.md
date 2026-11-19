# [1059] 从起点到终点的所有路径

## Description


```md
https://leetcode.cn/problems/all-paths-from-source-lead-to-destination/description/
* algorithms
* Medium (36.20%)
* Likes:    70
* Dislikes: -
* Testcase Example:  '3\n[[0,1],[0,2]]\n0\n2'
给定有向图的边 edges，以及该图的起点 source 和目标终点 destination，确定从起点 source 出发的所有路径是否最终结束于目标终点 destination，即：
从起点 source 到目标终点 destination 存在至少一条路径
如果存在从起点 source 到没有出边的节点的路径，则该节点就是路径终点。
从起点source到目标终点 destination 可能路径数是有限数字
当从起点 source 出发的所有路径都可以到达目标终点 destination 时返回 true，否则返回 false。

示例 1：
输入：n = 3, edges = [[0,1],[0,2]], source = 0, destination = 2
输出：false
说明：节点 1 和节点 2 都可以到达，但也会卡在那里。
示例 2：
输入：n = 4, edges = [[0,1],[0,3],[1,2],[2,1]], source = 0, destination = 3
输出：false
说明：有两种可能：在节点 3 处结束，或是在节点 1 和节点 2 之间无限循环。
示例 3：
输入：n = 4, edges = [[0,1],[0,2],[1,3],[2,3]], source = 0, destination = 3
输出：true

提示：
1 <= n <= 104
0 <= edges.length <= 104
edges[i].length == 2
0 <= ai, bi <= n - 1
0 <= source <= n - 1
0 <= destination <= n - 1
给定的图中可能带有自环和平行边。
Hint 1: What if we can reach to a cycle from the source node?
Hint 2: Then the answer will be false, because we eventually get trapped in the cycle forever.
Hint 3: What if the we can't reach to a cycle from the source node? Then we need to ensure that from all visited nodes from source the unique node with indegree = 0 is the destination node.

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a directed graph, determine whether EVERY path starting from source ends at destination: (1) at least one source→destination path exists, (2) any path leaving source must terminate, and (3) each terminated path ends exactly at destination (no reachable dead ends ≠ destination, no reachable cycles).

- Example: n=4, edges=[[0,1],[0,2],[1,3],[2,3]], source=0, destination=3 → `true`

## Approach

**三色 DFS**。从 source 递归:节点无出边 ⇔ 必须恰为 destination(否则 false);遇灰色(当前递归栈上)节点即环 → false;黑色缓存直接返回。全部子节点通过则染黑缓存 true。该谓词"所有路径有限且终于 destination"按节点单调可缓存。递归前不需单独判 source→dest 存在性:谓词为 true 本身蕴含可达。O(n + m)。
