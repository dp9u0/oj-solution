# [3492] Maximum Containers on a Ship

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-containers-on-a-ship/description/)

* algorithms
* Easy (75.24%)
* Likes:    65
* Dislikes: 13
* Testcase Example:  '2\n3\n15'

```md
You are given a positive integer n representing an n x n cargo deck on a ship. Each cell on the deck can hold one container with a weight of exactly w.
However, the total weight of all containers, if loaded onto the deck, must not exceed the ship&#39;s maximum weight capacity, maxWeight.
Return the maximum number of containers that can be loaded onto the ship.

Example 1:

Input: n = 2, w = 3, maxWeight = 15
Output: 4
Explanation:
The deck has 4 cells, and each container weighs 3. The total weight of loading all containers is 12, which does not exceed maxWeight.

Example 2:

Input: n = 3, w = 5, maxWeight = 20
Output: 4
Explanation:
The deck has 9 cells, and each container weighs 5. The maximum number of containers that can be loaded without exceeding maxWeight is 4.


Constraints:

1 <= n <= 1000
1 <= w <= 1000
1 <= maxWeight <= 109


```

## 题目翻译

n×n 甲板，每格放一个重量 w 的集装箱，总重量不超过 maxWeight，求最多能放多少个。

## 解题思路

直接返回 min(n*n, floor(maxWeight/w))

## Solution

[SourceCode](./solution.js)
