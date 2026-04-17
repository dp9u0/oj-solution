# [1515] Best Position for a Service Centre

## Description

[LeetCode Problem Description](https://leetcode.com/problems/best-position-for-a-service-centre/description/)

* algorithms
* Hard (35.15%)
* Likes:    248
* Dislikes: 274
* Testcase Example:  '[[0,1],[1,0],[1,2],[2,1]]'

```md
A delivery company wants to build a new service center in a new city. The company knows the positions of all the customers in this city on a 2D-Map and wants to build the new center in a position such that the sum of the euclidean distances to all customers is minimum.
Given an array positions where positions[i] = [xi, yi] is the position of the ith customer on the map, return the minimum sum of the euclidean distances to all customers.
In other words, you need to choose the position of the service center [xcentre, ycentre] such that the following formula is minimized:

Answers within 10-5 of the actual value will be accepted.

Example 1:


Input: positions = [[0,1],[1,0],[1,2],[2,1]]
Output: 4.00000
Explanation: As shown, you can see that choosing [xcentre, ycentre] = [1, 1] will make the distance to each customer = 1, the sum of all distances is 4 which is the minimum possible we can achieve.

Example 2:


Input: positions = [[1,1],[3,3]]
Output: 2.82843
Explanation: The minimum possible sum of distances = sqrt(2) + sqrt(2) = 2.82843


Constraints:

1 <= positions.length <= 50
positions[i].length == 2
0 <= xi, yi <= 100


```

## 中文翻译

给定二维平面上的客户位置 positions，找到服务中心的最佳位置，使所有欧几里得距离之和最小。精度要求 10^-5。

## 解题思路

**嵌套三分搜索**：

1. 目标函数 f(x,y) = sum(dist((x,y), pos_i)) 是凸函数
2. 外层三分搜索 x，内层三分搜索 y
3. 对于凸函数，三分搜索可找到全局最优
4. 每层迭代 80 次足以达到 10^-5 精度

## Solution

[SourceCode](./solution.js)
