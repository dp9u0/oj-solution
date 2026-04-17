# [3459] Length of Longest V-Shaped Diagonal Segment

## Description

[LeetCode Problem Description](https://leetcode.com/problems/length-of-longest-v-shaped-diagonal-segment/description/)

* algorithms
* Hard (56.24%)
* Likes:    376
* Dislikes: 66
* Testcase Example:  '[[2,2,1,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]'

```md
You are given a 2D integer matrix grid of size n x m, where each element is either 0, 1, or 2.
A V-shaped diagonal segment is defined as:

The segment starts with 1.
The subsequent elements follow this infinite sequence: 2, 0, 2, 0, ....
The segment:

Starts along a diagonal direction (top-left to bottom-right, bottom-right to top-left, top-right to bottom-left, or bottom-left to top-right).
Continues the sequence in the same diagonal direction.
Makes at most one clockwise 90-degree turn to another diagonal direction while maintaining the sequence.



Return the length of the longest V-shaped diagonal segment. If no valid segment exists, return 0.

Example 1:

Input: grid = [[2,2,1,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]
Output: 5
Explanation:

The longest V-shaped diagonal segment has a length of 5 and follows these coordinates: (0,2) &rarr; (1,3) &rarr; (2,4), takes a 90-degree clockwise turn at (2,4), and continues as (3,3) &rarr; (4,2).

Example 2:

Input: grid = [[2,2,2,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]
Output: 4
Explanation:

The longest V-shaped diagonal segment has a length of 4 and follows these coordinates: (2,3) &rarr; (3,2), takes a 90-degree clockwise turn at (3,2), and continues as (2,1) &rarr; (1,0).

Example 3:

Input: grid = [[1,2,2,2,2],[2,2,2,2,0],[2,0,0,0,0],[0,0,2,2,2],[2,0,0,2,0]]
Output: 5
Explanation:

The longest V-shaped diagonal segment has a length of 5 and follows these coordinates: (0,0) &rarr; (1,1) &rarr; (2,2) &rarr; (3,3) &rarr; (4,4).

Example 4:

Input: grid = [[1]]
Output: 1
Explanation:
The longest V-shaped diagonal segment has a length of 1 and follows these coordinates: (0,0).


Constraints:

n == grid.length
m == grid[i].length
1 <= n, m <= 500
grid[i][j] is either 0, 1 or 2.


```

## 题目翻译

给定一个 n×m 的矩阵 grid，元素为 0、1 或 2。定义 V 形对角线段：
- 以 1 开头
- 后续元素遵循序列 2, 0, 2, 0, ...
- 沿对角线方向行进（四个对角方向之一）
- 最多做一次顺时针 90° 转向另一个对角方向，同时保持序列

返回最长 V 形对角线段的长度。若不存在则返回 0。

## 解题思路

**预处理 + 枚举起点 + 顺时针转向**

关键：序列 1, 2, 0, 2, 0, ... 中，位置 0 为 1，奇数位为 2，偶数位(≥2)为 0。

1. 预处理 `next2[r][c][d]`：从 (r,c) 沿方向 d 的最长 2,0,2,0,... 序列长度
2. 预处理 `next0[r][c][d]`：从 (r,c) 沿方向 d 的最长 0,2,0,2,... 序列长度
3. 对每个值为 1 的格子，尝试 4 个起始方向 d1：
   - 不转向：L1 = 1 + next2[下一格][d1]
   - 在第 k 步转向 d2=(d1+1)%4：总长 = (k+1) + (segLen奇? next2 : next0)[转向后下一格][d2]
4. 取所有情况的最大值

时间 O(nm × max(n,m))，空间 O(nm)。

## Solution

[SourceCode](./solution.js)
