# [1029] Two City Scheduling

## Description

[LeetCode Problem Description](https://leetcode.com/problems/two-city-scheduling/description/)

* algorithms
* Medium (68.46%)
* Likes:    4881
* Dislikes: 367
* Testcase Example:  '[[10,20],[30,200],[400,50],[30,20]]'

```md
A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti],the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.
Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

Example 1:

Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.
The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

Example 2:

Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
Output: 1859

Example 3:

Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
Output: 3086


Constraints:

2 * n == costs.length
2 <= costs.length <= 100
costs.length is even.
1 <= aCosti, bCosti <= 1000


```

## 题目翻译

给定 costs 数组，costs[i] = [aCost, bCost]。将 2n 个人分配到两个城市，每个城市恰好 n 人，最小化总费用。

## 解题思路

贪心。按 (aCost - bCost) 排序。差值越小说明去 A 越划算，差值越大说明去 B 越划算。前 n 个去 A，后 n 个去 B。

时间复杂度 O(n log n)

## Solution

[SourceCode](./solution.js)
