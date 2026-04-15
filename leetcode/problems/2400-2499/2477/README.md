# [2477] Minimum Fuel Cost to Report to the Capital

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/description/)

* algorithms
* Medium (65.10%)
* Likes:    2321
* Dislikes: 97
* Testcase Example:  '[[0,1],[0,2],[0,3]]\n5'

```md
There is a tree (i.e., a connected, undirected graph with no cycles) structure country network consisting of n cities numbered from 0 to n - 1 and exactly n - 1 roads. The capital city is city 0. You are given a 2D integer array roads where roads[i] = [ai, bi] denotes that there exists a bidirectional road connecting cities ai and bi.
There is a meeting for the representatives of each city. The meeting is in the capital city.
There is a car in each city. You are given an integer seats that indicates the number of seats in each car.
A representative can use the car in their city to travel or change the car and ride with another representative. The cost of traveling between two cities is one liter of fuel.
Return the minimum number of liters of fuel to reach the capital city.

Example 1:


Input: roads = [[0,1],[0,2],[0,3]], seats = 5
Output: 3
Explanation:
- Representative1 goes directly to the capital with 1 liter of fuel.
- Representative2 goes directly to the capital with 1 liter of fuel.
- Representative3 goes directly to the capital with 1 liter of fuel.
It costs 3 liters of fuel at minimum.
It can be proven that 3 is the minimum number of liters of fuel needed.

Example 2:


Input: roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], seats = 2
Output: 7
Explanation:
- Representative2 goes directly to city 3 with 1 liter of fuel.
- Representative2 and representative3 go together to city 1 with 1 liter of fuel.
- Representative2 and representative3 go together to the capital with 1 liter of fuel.
- Representative1 goes directly to the capital with 1 liter of fuel.
- Representative5 goes directly to the capital with 1 liter of fuel.
- Representative6 goes directly to city 4 with 1 liter of fuel.
- Representative4 and representative6 go together to the capital with 1 liter of fuel.
It costs 7 liters of fuel at minimum.
It can be proven that 7 is the minimum number of liters of fuel needed.

Example 3:


Input: roads = [], seats = 1
Output: 0
Explanation: No representatives need to travel to the capital city.


Constraints:

1 <= n <= 105
roads.length == n - 1
roads[i].length == 2
0 <= ai, bi < n
ai != bi
roads represents a valid tree.
1 <= seats <= 105


```

## 中文翻译

树结构网络，首都为 0 号城市，每辆车有 seats 个座位。所有代表需到首都，每走一条边消耗 1 升油，可拼车。求最少油耗。

## 解题思路

**DFS 后序遍历**

1. 建邻接表，从 0 出发 DFS（记录 parent 防回走）
2. 每个节点返回子树中代表人数（包括自身）
3. 从子节点到当前节点的边，需要 ceil(people / seats) 辆车，即 Math.ceil(people / seats) 升油
4. 累加所有边的油耗

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
