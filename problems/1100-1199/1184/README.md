# [1184] Distance Between Bus Stops

## Description

[LeetCode Problem Description](https://leetcode.com/problems/distance-between-bus-stops/description/)

* algorithms
* Easy (55.26%)
* Likes:    820
* Dislikes: 97
* Testcase Example:  '[1,2,3,4]\n0\n1'

```md
A bushas n stops numbered from 0 to n - 1 that forma circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops numberi and (i + 1) % n.
The bus goes along both directionsi.e. clockwise and counterclockwise.
Return the shortest distance between the givenstartand destinationstops.

Example 1:


Input: distance = [1,2,3,4], start = 0, destination = 1
Output: 1
Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

Example 2:


Input: distance = [1,2,3,4], start = 0, destination = 2
Output: 3
Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.


Example 3:


Input: distance = [1,2,3,4], start = 0, destination = 3
Output: 4
Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.


Constraints:

1 <= n<= 10^4
distance.length == n
0 <= start, destination < n
0 <= distance[i] <= 10^4


```

## 翻译

环形公交车站，distance[i]表示站i到站(i+1)%n的距离。公交可双向行驶，求从start到destination的最短距离。

## 解题思路

计算顺时针方向的距离和，与总距离相减得逆时针距离，取较小值。

## Solution

[SourceCode](./solution.js)
