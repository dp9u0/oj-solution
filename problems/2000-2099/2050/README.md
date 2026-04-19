# [2050] Parallel Courses III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/parallel-courses-iii/description/)

* algorithms
* Hard (66.84%)
* Likes:    1742
* Dislikes: 47
* Testcase Example:  '3\n[[1,3],[2,3]]\n[3,2,5]'

```md
You are given an integer n, which indicates that there are n courses labeled from 1 to n. You are also given a 2D integer array relations where relations[j] = [prevCoursej, nextCoursej] denotes that course prevCoursej has to be completed before course nextCoursej (prerequisite relationship). Furthermore, you are given a 0-indexed integer array time where time[i] denotes how many months it takes to complete the (i+1)th course.
You must find the minimum number of months needed to complete all the courses following these rules:

You may start taking a course at any time if the prerequisites are met.
Any number of courses can be taken at the same time.

Return the minimum number of months needed to complete all the courses.
Note: The test cases are generated such that it is possible to complete every course (i.e., the graph is a directed acyclic graph).

Example 1:


Input: n = 3, relations = [[1,3],[2,3]], time = [3,2,5]
Output: 8
Explanation: The figure above represents the given graph and the time required to complete each course.
We start course 1 and course 2 simultaneously at month 0.
Course 1 takes 3 months and course 2 takes 2 months to complete respectively.
Thus, the earliest time we can start course 3 is at month 3, and the total time required is 3 + 5 = 8 months.

Example 2:


Input: n = 5, relations = [[1,5],[2,5],[3,5],[3,4],[4,5]], time = [1,2,3,4,5]
Output: 12
Explanation: The figure above represents the given graph and the time required to complete each course.
You can start courses 1, 2, and 3 at month 0.
You can complete them after 1, 2, and 3 months respectively.
Course 4 can be taken only after course 3 is completed, i.e., after 3 months. It is completed after 3 + 4 = 7 months.
Course 5 can be taken only after courses 1, 2, 3, and 4 have been completed, i.e., after max(1,2,3,7) = 7 months.
Thus, the minimum time needed to complete all the courses is 7 + 5 = 12 months.


Constraints:

1 <= n <= 5 * 104
0 <= relations.length <= min(n * (n - 1) / 2, 5 * 104)
relations[j].length == 2
1 <= prevCoursej, nextCoursej <= n
prevCoursej != nextCoursej
All the pairs [prevCoursej, nextCoursej] are unique.
time.length == n
1 <= time[i] <= 104
The given graph is a directed acyclic graph.


```

## 题目翻译

给定 n 门课程（编号 1..n）、先修关系 relations 和各课程完成时间 time。课程可以并行学习，只要先修课已完成。求完成所有课程的最少月数。

## 解题思路

**DAG 上拓扑排序 + DP**

dp[v] = 完成课程 v 的最早时间 = max(dp[u], u 是 v 的先修) + time[v]。

用 Kahn 算法（BFS 拓扑排序），入度为 0 的课程直接开始（dp = time），处理每条边时更新后续课程的 dp。

答案 = max(dp[v])。

时间 O(n + m)，空间 O(n + m)。

## Solution

[SourceCode](./solution.js)
