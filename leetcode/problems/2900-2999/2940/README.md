# [2940] Find Building Where Alice and Bob Can Meet

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/description/)

* algorithms
* Hard (52.25%)
* Likes:    857
* Dislikes: 58
* Testcase Example:  '[6,4,8,5,2,7]\n[[0,1],[0,3],[2,4],[3,4],[2,2]]'

```md
You are given a 0-indexed array heights of positive integers, where heights[i] represents the height of the ith building.
If a person is in building i, they can move to any other building j if and only if i < j and heights[i] < heights[j].
You are also given another array queries where queries[i] = [ai, bi]. On the ith query, Alice is in building ai while Bob is in building bi.
Return an array ans where ans[i] is the index of the leftmost building where Alice and Bob can meet on the ith query. If Alice and Bob cannot move to a common building on query i, set ans[i] to -1.

Example 1:

Input: heights = [6,4,8,5,2,7], queries = [[0,1],[0,3],[2,4],[3,4],[2,2]]
Output: [2,5,-1,5,2]
Explanation: In the first query, Alice and Bob can move to building 2 since heights[0] < heights[2] and heights[1] < heights[2].
In the second query, Alice and Bob can move to building 5 since heights[0] < heights[5] and heights[3] < heights[5].
In the third query, Alice cannot meet Bob since Alice cannot move to any other building.
In the fourth query, Alice and Bob can move to building 5 since heights[3] < heights[5] and heights[4] < heights[5].
In the fifth query, Alice and Bob are already in the same building.
For ans[i] != -1, It can be shown that ans[i] is the leftmost building where Alice and Bob can meet.
For ans[i] == -1, It can be shown that there is no building where Alice and Bob can meet.

Example 2:

Input: heights = [5,3,8,2,6,1,4,6], queries = [[0,7],[3,5],[5,2],[3,0],[1,6]]
Output: [7,6,-1,4,6]
Explanation: In the first query, Alice can directly move to Bob&#39;s building since heights[0] < heights[7].
In the second query, Alice and Bob can move to building 6 since heights[3] < heights[6] and heights[5] < heights[6].
In the third query, Alice cannot meet Bob since Bob cannot move to any other building.
In the fourth query, Alice and Bob can move to building 4 since heights[3] < heights[4] and heights[0] < heights[4].
In the fifth query, Alice can directly move to Bob&#39;s building since heights[1] < heights[6].
For ans[i] != -1, It can be shown that ans[i] is the leftmost building where Alice and Bob can meet.
For ans[i] == -1, It can be shown that there is no building where Alice and Bob can meet.


Constraints:

1 <= heights.length <= 5 * 104
1 <= heights[i] <= 109
1 <= queries.length <= 5 * 104
queries[i] = [ai, bi]
0 <= ai, bi <= heights.length - 1


```

## 中文翻译

给定 heights 数组和 queries 数组。人只能从建筑 i 移到 j（i < j 且 heights[i] < heights[j]）。对每个查询 [a, b]，求 Alice 和 Bob 能相遇的最左边建筑索引。若不能相遇返回 -1。

## 解题思路

对每个查询 (a, b)，先确保 a <= b。若 a == b 或 heights[a] < heights[b]，答案直接是 b。否则需要找 max(a,b) 右侧第一个大于 max(heights[a], heights[b]) 的建筑。用单调栈+二分或离线处理+最小堆。这里用离线处理：按查询的 max(a,b) 从大到小排序，维护单调递减栈，二分找第一个 > maxHeight 的位置。

## Solution

[SourceCode](./solution.js)
