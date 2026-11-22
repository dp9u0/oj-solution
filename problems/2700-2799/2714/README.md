# [2714] 找到 K 次跨越的最短路径

## Description


```md
https://leetcode.cn/problems/find-shortest-path-with-k-hops/description/
* algorithms
* Hard (53.10%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '4\n[[0,1,4],[0,2,2],[2,3,6]]\n1\n3\n2'
现给定一个正整数 n ，它表示一个 索引从 0 开始的无向带权连接图 的节点数，以及一个 索引从 0 开始的二维数组 edges ，其中 edges[i] = [ui, vi, wi] 表示节点 ui 和 vi 之间存在权重为 wi 的边。
还给定两个节点 s 和 d ，以及一个正整数 k ，你的任务是找到从 s 到 d 的 最短 路径，但你可以 最多 跨越 k 条边。换句话说，将 最多 k 条边的权重设为 0，然后找到从 s 到 d 的 最短 路径。
返回满足给定条件的从 s 到 d 的 最短 路径的长度。

示例 1：
输入：n = 4, edges = [[0,1,4],[0,2,2],[2,3,6]], s = 1, d = 3, k = 2
输出：2
解释：在这个例子中，只有一条从节点1（绿色节点）到节点3（红色节点）的路径，即（1->0->2->3），其长度为4 + 2 + 6 = 12。现在我们可以将两条边的权重设为 0，即将蓝色边的权重设为 0，那么路径的长度就变为 0 + 2 + 0 = 2。可以证明 2 是我们在给定条件下能够达到的最小路径长度。
示例 2：
输入：n = 7, edges = [[3,1,9],[3,2,4],[4,0,9],[0,5,6],[3,6,2],[6,0,4],[1,2,4]], s = 4, d = 1, k = 2
输出：6
解释：在这个例子中，有两条从节点4（绿色节点）到节点1（红色节点）的路径，分别是（4->0->6->3->2->1）和（4->0->6->3->1）。第一条路径的长度为 9 + 4 + 2 + 4 + 4 = 23，第二条路径的长度为 9 + 4 + 2 + 9 = 24。现在，如果我们将蓝色边的权重设为 0，那么最短路径的长度就变为 0 + 4 + 2 + 0 = 6。可以证明 6 是我们在给定条件下能够达到的最小路径长度。
示例 3：
输入：n = 5, edges = [[0,4,2],[0,1,3],[0,2,1],[2,1,4],[1,3,4],[3,4,7]], s = 2, d = 3, k = 1
输出：3
解释：在这个例子中，从节点2（绿色节点）到节点3（红色节点）有4条路径，分别是（2->1->3）、（2->0->1->3）、（2->1->0->4->3）和（2->0->4->3）。前两条路径的长度为4 + 4 = 1 + 3 + 4 = 8，第三条路径的长度为4 + 3 + 2 + 7 = 16，最后一条路径的长度为1 + 2 + 7 = 10。现在，如果我们将蓝色边的权重设为 0，那么最短路径的长度就为1 + 2 + 0 = 3。可以证明在给定条件下，3 是我们能够达到的最小路径长度。

提示：
2 <= n <= 500
n - 1 <= edges.length <= n * (n - 1) / 2
edges[i].length = 3
0 <= edges[i][0], edges[i][1] <= n - 1
1 <= edges[i][2] <= 106
0 <= s, d, k <= n - 1
s != d
输入的生成确保图是 连通 的，并且没有 重复的边 或 自环。
Hint 1: Let's construct a new graph and run Dijkstra on it to get the answer to the problem.
Hint 2: We define the new graph as follows: Each node of this graph is a pair (v, c) where v is a node from the given graph and c is any number between 0 and k (inclusive).
Hint 3: Try to make edges of the defined graph in such a way that if we run Dijkstra on the node (s, 0), then the shortest path to node (d, k) would be the final answer.
Hint 4: Edge type one: If the edge (v, u, w) belongs to the initial graph, we put an edge with the weight of w between nodes (v, c) and (u, c) for any c between 0 and k (inclusive) in the new graph.
Hint 5: Edge type two: If the edge (v, u, w) belongs to the initial graph, we put an edge with the weight of 0 between nodes (v, c) and (u, c + 1), also between (u, c) and (v, c + 1) for any c between 0 and k - 1 (inclusive) in the new graph.
Hint 6: For the matter of time complexity, note that you **don’t need** to literally construct the described graph.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Undirected weighted connected graph, no self-loops/duplicate edges. Find the shortest path from s to d where up to k edges may have their weight set to 0 ("hops").

Approach: layered Dijkstra on implicit state (node, hopsUsed). dist[v][c] = shortest distance reaching v using exactly/at most c hops. Relaxation over each edge (u,v,w): (u,c) -> (v,c) with cost w, and (u,c) -> (v,c+1) with cost 0 for c < k. Answer = min over c of dist[d][c]. Implemented with a binary min-heap; the graph is never explicitly built.

Complexity: O(k * E log(k * V)).
