# [1820] 最多邀请的个数

## Description


```md
https://leetcode.cn/problems/maximum-number-of-accepted-invitations/description/
* algorithms
* Medium (49.88%)
* Likes:    19
* Dislikes: -
* Testcase Example:  '[[1,1,1],[1,0,1],[0,0,1]]'
某一个班级有 m 个男孩和 n 个女孩，即将举行一个派对。
给定一个 m x n 的整数矩阵 grid ，其中 grid[i][j] 等于 0 或 1 。 若 grid[i][j] == 1 ，则表示第 i 个男孩可以邀请第 j 个女孩参加派对。 一个男孩最多可以邀请一个女孩，一个女孩最多可以接受一个男孩的一个邀请。
返回可能的最多邀请的个数。

示例 1:
输入: grid = [[1,1,1],
[1,0,1],
[0,0,1]]
输出: 3
解释: 按下列方式邀请：
- 第 1 个男孩邀请第 2 个女孩。
- 第 2 个男孩邀请第 1 个女孩。
- 第 3 个男孩邀请第 3 个女孩。
示例 2:
输入: grid = [[1,0,1,0],
[1,0,0,0],
[0,0,1,0],
[1,1,1,0]]
输出: 3
解释: 按下列方式邀请：
- 第 1 个男孩邀请第 3 个女孩。
- 第 2 个男孩邀请第 1 个女孩。
- 第 3 个男孩未邀请任何人。
- 第 4 个男孩邀请第 2 个女孩。

提示：
grid.length == m
grid[i].length == n
1 <= m, n <= 200
grid[i][j] 是 0 或 1 之一。
Hint 1: We can see that the problem can be represented as a directed graph with an edge from each boy to the girl he invited.
Hint 2: We need to choose a set of edges such that no to source points in the graph (i.e., boys) have an edge with the same endpoint (i.e., the same girl).
Hint 3: The problem is maximum bipartite matching in the graph.

```

## Solution

[SourceCode](./solution.js)

## Translation

Maximum bipartite matching: boys × girls compatibility grid; maximize accepted invitations.

## Approach

**匈牙利算法(Kuhn 增广路径)**。matchGirl 记每个女孩的当前配对男孩;每个男孩 DFS 找增广路径——能配对空女孩,或其已配对女孩的原配男孩能改配他人则抢占。m,n ≤ 200,O(m·n·m) = 8×10⁶。
