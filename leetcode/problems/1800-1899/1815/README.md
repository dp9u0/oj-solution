# [1815] Maximum Number of Groups Getting Fresh Donuts

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/description/)

* algorithms
* Hard (41.44%)
* Likes:    358
* Dislikes: 34
* Testcase Example:  '3\n[1,2,3,4,5,6]'

```md
There is a donuts shop that bakes donuts in batches of batchSize. They have a rule where they must serve all of the donuts of a batch before serving any donuts of the next batch. You are given an integer batchSize and an integer array groups, where groups[i] denotes that there is a group of groups[i] customers that will visit the shop. Each customer will get exactly one donut.
When a group visits the shop, all customers of the group must be served before serving any of the following groups. A group will be happy if they all get fresh donuts. That is, the first customer of the group does not receive a donut that was left over from the previous group.
You can freely rearrange the ordering of the groups. Return the maximum possible number of happy groups after rearranging the groups.

Example 1:

Input: batchSize = 3, groups = [1,2,3,4,5,6]
Output: 4
Explanation: You can arrange the groups as [6,2,4,5,1,3]. Then the 1st, 2nd, 4th, and 6th groups will be happy.

Example 2:

Input: batchSize = 4, groups = [1,3,2,5,2,2,1,6]
Output: 4


Constraints:

1 <= batchSize <= 9
1 <= groups.length <= 30
1 <= groups[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 batchSize 和 groups 数组。甜甜圈按批次制作，每批 batchSize 个。每个顾客一个甜甜圈。一组人同时被服务。一组人快乐当且仅当第一个顾客拿到的是新鲜的（新批次开始时）。可以自由排列组顺序。求最大快乐组数。

## 解题思路

每组只有 groups[i] % batchSize 有意义。

1. 余数为 0 的组总是快乐的，直接计数
2. 贪心配对：(r, batchSize-r) 的组配对，每对贡献 1 个快乐组（放在 leftover=0 时，第一个快乐，第二个重置 leftover）
3. 对剩余未配对的组，使用 DFS + 记忆化搜索：状态为 (各余数剩余数量, 当前 leftover)

batchSize <= 9，配对后最多 4 种余数有剩余，状态空间可控。
