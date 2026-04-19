# [3067] Count Pairs of Connectable Servers in a Weighted Tree Network

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/description/)

* algorithms
* Medium (55.81%)
* Likes:    241
* Dislikes: 29
* Testcase Example:  '[[0,1,1],[1,2,5],[2,3,13],[3,4,9],[4,5,2]]\n1'

```md
You are given an unrooted weighted tree with n vertices representing servers numbered from 0 to n - 1, an array edges where edges[i] = [ai, bi, weighti] represents a bidirectional edge between vertices ai and bi of weight weighti. You are also given an integer signalSpeed.
Two servers a and b are connectable through a server c if:

a < b, a != c and b != c.
The distance from c to a is divisible by signalSpeed.
The distance from c to b is divisible by signalSpeed.
The path from c to b and the path from c to a do not share any edges.

Return an integer array count of length n where count[i] is the number of server pairs that are connectable through the server i.

Example 1:


Input: edges = [[0,1,1],[1,2,5],[2,3,13],[3,4,9],[4,5,2]], signalSpeed = 1
Output: [0,4,6,6,4,0]
Explanation: Since signalSpeed is 1, count[c] is equal to the number of pairs of paths that start at c and do not share any edges.
In the case of the given path graph, count[c] is equal to the number of servers to the left of c multiplied by the servers to the right of c.

Example 2:


Input: edges = [[0,6,3],[6,5,3],[0,3,1],[3,2,7],[3,1,6],[3,4,2]], signalSpeed = 3
Output: [2,0,0,0,0,0,2]
Explanation: Through server 0, there are 2 pairs of connectable servers: (4, 5) and (4, 6).
Through server 6, there are 2 pairs of connectable servers: (4, 5) and (0, 5).
It can be shown that no two servers are connectable through servers other than 0 and 6.


Constraints:

2 <= n <= 1000
edges.length == n - 1
edges[i].length == 3
0 <= ai, bi < n
edges[i] = [ai, bi, weighti]
1 <= weighti <= 106
1 <= signalSpeed <= 106
The input is generated such that edges represents a valid tree.


```

## 题目翻译

给定一个有 n 个顶点的无根带权树，顶点编号 0 到 n-1。`edges[i] = [ai, bi, weighti]` 表示顶点 ai 和 bi 之间有一条权重为 weighti 的双向边。另给一个整数 `signalSpeed`。

两个服务器 a 和 b 可通过服务器 c 连接，当：
- a < b，a != c 且 b != c
- c 到 a 的距离可被 signalSpeed 整除
- c 到 b 的距离可被 signalSpeed 整除
- c 到 b 的路径和 c 到 a 的路径不共享任何边

返回长度为 n 的数组 count，count[i] 是通过服务器 i 可连接的服务器对数。

## 解题思路

对于每个节点 c，将其作为根：
1. 将 c 的每个邻居作为一棵子树的入口。
2. DFS 计算每棵子树中有多少节点到 c 的距离可被 signalSpeed 整除。
3. 对不同子树中的合法节点两两配对：用乘法原理，逐个子树累乘。

即：遍历 c 的每个邻居，DFS 统计该子树中满足条件的节点数 cnt，则 `result[c] += totalSofar * cnt`，然后 `totalSofar += cnt`。

## Solution

[SourceCode](./solution.js)
