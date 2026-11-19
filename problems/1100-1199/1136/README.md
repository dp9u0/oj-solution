# [1136] 并行课程

## Description


```md
https://leetcode.cn/problems/parallel-courses/description/
* algorithms
* Medium (61.67%)
* Likes:    93
* Dislikes: -
* Testcase Example:  '3\n[[1,3],[2,3]]'
给你一个整数 n ，表示编号从 1 到 n 的 n 门课程。另给你一个数组 relations ，其中 relations[i] = [prevCoursei, nextCoursei] ，表示课程 prevCoursei 和课程 nextCoursei 之间存在先修关系：课程 prevCoursei 必须在 nextCoursei 之前修读完成。
在一个学期内，你可以学习 任意数量 的课程，但前提是你已经在 上 一学期修读完待学习课程的所有先修课程。
请你返回学完全部课程所需的 最少 学期数。如果没有办法做到学完全部这些课程的话，就返回 -1。


示例 1：
输入：n = 3, relations = [[1,3],[2,3]]
输出：2
解释：上图表示课程之间的关系图：
在第一学期，可以修读课程 1 和 2 。
在第二学期，可以修读课程 3 。
示例 2：
输入：n = 3, relations = [[1,2],[2,3],[3,1]]
输出：-1
解释：没有课程可以学习，因为它们互为先修课程。

提示：
1 <= n <= 5000
1 <= relations.length <= 5000
relations[i].length == 2
1 <= prevCoursei, nextCoursei <= n
prevCoursei != nextCoursei
所有 [prevCoursei, nextCoursei] 互不相同
Hint 1: Try to think of it as a graph problem. It will be impossible to study all the courses if the graph had a cycle.
Hint 2: The graph is a directed acyclic graph (DAG). The answer is the longes path in this DAG.
Hint 3: You can use DP to find the longest path in the DAG.

```

## Solution

[SourceCode](./solution.js)

## Translation

Take courses in semesters; in one semester you may take any number of courses whose prerequisites were completed in earlier semesters. Return the minimum number of semesters, or -1 if a cycle makes it impossible.

- Example: n = 3, relations = [[1,3],[2,3]] → `2`

## Approach

**Kahn 分层拓扑**。每层取出当前入度 0 的全部课程算一学期,同时把后继入度减一入下一层;处理完后已取课程数 = n 则层数即答案,否则有环 → -1。学期数即 DAG 最长链长度。O(n + E)。
