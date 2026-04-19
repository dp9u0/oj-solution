# [2285] Maximum Total Importance of Roads

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-total-importance-of-roads/description/)

* algorithms
* Medium (69.11%)
* Likes:    1364
* Dislikes: 84
* Testcase Example:  '5\n[[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]'

```md
You are given an integer n denoting the number of cities in a country. The cities are numbered from 0 to n - 1.
You are also given a 2D integer array roads where roads[i] = [ai, bi] denotes that there exists a bidirectional road connecting cities ai and bi.
You need to assign each city with an integer value from 1 to n, where each value can only be used once. The importance of a road is then defined as the sum of the values of the two cities it connects.
Return the maximum total importance of all roads possible after assigning the values optimally.

Example 1:


Input: n = 5, roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
Output: 43
Explanation: The figure above shows the country and the assigned values of [2,4,5,3,1].
- The road (0,1) has an importance of 2 + 4 = 6.
- The road (1,2) has an importance of 4 + 5 = 9.
- The road (2,3) has an importance of 5 + 3 = 8.
- The road (0,2) has an importance of 2 + 5 = 7.
- The road (1,3) has an importance of 4 + 3 = 7.
- The road (2,4) has an importance of 5 + 1 = 6.
The total importance of all roads is 6 + 9 + 8 + 7 + 7 + 6 = 43.
It can be shown that we cannot obtain a greater total importance than 43.

Example 2:


Input: n = 5, roads = [[0,3],[2,4],[1,3]]
Output: 20
Explanation: The figure above shows the country and the assigned values of [4,3,2,5,1].
- The road (0,3) has an importance of 4 + 5 = 9.
- The road (2,4) has an importance of 2 + 1 = 3.
- The road (1,3) has an importance of 3 + 5 = 8.
The total importance of all roads is 9 + 3 + 8 = 20.
It can be shown that we cannot obtain a greater total importance than 20.


Constraints:

2 <= n <= 5 * 104
1 <= roads.length <= 5 * 104
roads[i].length == 2
0 <= ai, bi <= n - 1
ai != bi
There are no duplicate roads.


```

## 翻译

给你一个整数 `n`，表示一个国家中的城市数量。城市编号从 `0` 到 `n - 1`。

同时给你一个二维整数数组 `roads`，其中 `roads[i] = [ai, bi]` 表示存在一条连接城市 `ai` 和 `bi` 的双向道路。

你需要给每个城市分配一个从 `1` 到 `n` 的整数值，每个值只能使用一次。一条道路的重要度定义为它连接的两个城市的值之和。

返回在最优分配下所有道路的最大总重要度。

## Approach

**贪心。** 度数越大的城市应该分配越大的值，这样对总重要度的贡献最大。

- 统计每个城市的度数（连接的道路数）
- 将度数排序，度数最小的城市分配值 1，度数最大的城市分配值 n
- 遍历所有道路，求每个城市分配值之和即为答案

等价地：排序后，第 i 小的度数乘以 (i+1)，再对所有城市求和。

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
