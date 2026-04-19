# [1494] Parallel Courses II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/parallel-courses-ii/description/)

* algorithms
* Hard (30.81%)
* Likes:    1143
* Dislikes: 78
* Testcase Example:  '4\n[[2,1],[3,1],[1,4]]\n2'

```md
You are given an integer n, which indicates that there are n courses labeled from 1 to n. You are also given an array relations where relations[i] = [prevCoursei, nextCoursei], representing a prerequisite relationship between course prevCoursei and course nextCoursei: course prevCoursei has to be taken before course nextCoursei. Also, you are given the integer k.
In one semester, you can take at most k courses as long as you have taken all the prerequisites in the previous semesters for the courses you are taking.
Return the minimum number of semesters needed to take all courses. The testcases will be generated such that it is possible to take every course.

Example 1:


Input: n = 4, relations = [[2,1],[3,1],[1,4]], k = 2
Output: 3
Explanation: The figure above represents the given graph.
In the first semester, you can take courses 2 and 3.
In the second semester, you can take course 1.
In the third semester, you can take course 4.

Example 2:


Input: n = 5, relations = [[2,1],[3,1],[4,1],[1,5]], k = 2
Output: 4
Explanation: The figure above represents the given graph.
In the first semester, you can only take courses 2 and 3 since you cannot take more than two per semester.
In the second semester, you can take course 4.
In the third semester, you can take course 1.
In the fourth semester, you can take course 5.


Constraints:

1 <= n <= 15
1 <= k <= n
0 <= relations.length <= n * (n-1) / 2
relations[i].length == 2
1 <= prevCoursei, nextCoursei <= n
prevCoursei != nextCoursei
All the pairs [prevCoursei, nextCoursei] are unique.
The given graph is a directed acyclic graph.


```

## 翻译

n 门课程有先修关系，每学期最多选 k 门。求最少几个学期学完所有课程。

## 解题思路

n ≤ 15，用 bitmask DP（BFS）。状态为已学课程集合 mask。对每个状态计算当前可学课程（先修都已学完），枚举其中大小 ≤ k 的子集作为本学期课程，转移到新状态。已证明每次选 min(k, available) 门课最优，但选哪几门影响后续，故需枚举。O(2^n * C(n,k))。

## Solution

[SourceCode](./solution.js)
