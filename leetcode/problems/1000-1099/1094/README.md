# [1094] Car Pooling

## Description

[LeetCode Problem Description](https://leetcode.com/problems/car-pooling/description/)

* algorithms
* Medium (56.26%)
* Likes:    4844
* Dislikes: 125
* Testcase Example:  '[[2,1,5],[3,3,7]]\n4'

```md
There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).
You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car&#39;s initial location.
Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

Example 1:

Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false

Example 2:

Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true


Constraints:

1 <= trips.length <= 1000
trips[i].length == 3
1 <= numPassengersi <= 100
0 <= fromi < toi <= 1000
1 <= capacity <= 105


```

## 翻译

一辆车有 `capacity` 个空座位，只能向东行驶。给定 `trips` 数组，每个 `trips[i] = [numPassengers, from, to]` 表示在第 `from` 站上车 `numPassengers` 人，第 `to` 站下车。判断是否能完成所有行程（途中乘客数不超过容量）。

## Approach

差分数组。创建长度 1001 的数组 `diff`，对每个 trip 在 `from` 位置加乘客数，在 `to` 位置减乘客数。然后前缀和还原每站的乘客数，若任何一站超过 capacity 则返回 false。

时间复杂度 O(n + M)，M=1001。空间复杂度 O(M)。

## Solution

[SourceCode](./solution.js)
