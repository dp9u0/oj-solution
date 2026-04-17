# [1840] Maximum Building Height

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-building-height/description/)

* algorithms
* Hard (38.43%)
* Likes:    404
* Dislikes: 23
* Testcase Example:  '5\n[[2,1],[4,1]]'

```md
You want to build n new buildings in a city. The new buildings will be built in a line and are labeled from 1 to n.
However, there are city restrictions on the heights of the new buildings:

The height of each building must be a non-negative integer.
The height of the first building must be 0.
The height difference between any two adjacent buildings cannot exceed 1.

Additionally, there are city restrictions on the maximum height of specific buildings. These restrictions are given as a 2D integer array restrictions where restrictions[i] = [idi, maxHeighti] indicates that building idi must have a height less than or equal to maxHeighti.
It is guaranteed that each building will appear at most once in restrictions, and building 1 will not be in restrictions.
Return the maximum possible height of the tallest building.

Example 1:


Input: n = 5, restrictions = [[2,1],[4,1]]
Output: 2
Explanation: The green area in the image indicates the maximum allowed height for each building.
We can build the buildings with heights [0,1,2,1,2], and the tallest building has a height of 2.
Example 2:


Input: n = 6, restrictions = []
Output: 5
Explanation: The green area in the image indicates the maximum allowed height for each building.
We can build the buildings with heights [0,1,2,3,4,5], and the tallest building has a height of 5.

Example 3:


Input: n = 10, restrictions = [[5,3],[2,5],[7,4],[10,3]]
Output: 5
Explanation: The green area in the image indicates the maximum allowed height for each building.
We can build the buildings with heights [0,1,2,3,3,4,4,5,4,3], and the tallest building has a height of 5.


Constraints:

2 <= n <= 109
0 <= restrictions.length <= min(n - 1, 105)
2 <= idi <= n
idiis unique.
0 <= maxHeighti <= 109


```

## 中文翻译

在一条线上建 n 栋建筑（编号 1 到 n）。限制：
- 高度为非负整数
- 第一栋高度为 0
- 相邻建筑高度差不超过 1
- 额外限制：某些建筑有最大高度约束

返回最高建筑的最大可能高度。

## 解题思路

**两遍传播**：

1. 添加建筑 1 的限制 [1, 0]，按位置排序所有约束
2. 从左到右传播：h[i] = min(h[i], h[i-1] + (pos[i] - pos[i-1]))（受前一个约束和距离限制）
3. 从右到左传播：h[i] = min(h[i], h[i+1] + (pos[i+1] - pos[i]))
4. 两个相邻约束之间，最高点为 (h[i] + h[i+1] + dist) / 2 取整

时间复杂度：O(m log m)

## Solution

[SourceCode](./solution.js)
