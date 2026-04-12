# [764] Largest Plus Sign

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-plus-sign/description/)

* algorithms
* Medium (49.11%)
* Likes:    1537
* Dislikes: 242
* Testcase Example:  '5\n[[4,2]]'

```md
You are given an integer n. You have an n x n binary grid grid with all values initially 1&#39;s except for some indices given in the array mines. The ith element of the array mines is defined as mines[i] = [xi, yi] where grid[xi][yi] == 0.
Return the order of the largest axis-aligned plus sign of 1&#39;s contained in grid. If there is none, return 0.
An axis-aligned plus sign of 1&#39;s of order k has some center grid[r][c] == 1 along with four arms of length k - 1 going up, down, left, and right, and made of 1&#39;s. Note that there could be 0&#39;s or 1&#39;s beyond the arms of the plus sign, only the relevant area of the plus sign is checked for 1&#39;s.

Example 1:


Input: n = 5, mines = [[4,2]]
Output: 2
Explanation: In the above grid, the largest plus sign can only be of order 2. One of them is shown.

Example 2:


Input: n = 1, mines = [[0,0]]
Output: 0
Explanation: There is no plus sign, so return 0.


Constraints:

1 <= n <= 500
1 <= mines.length <= 5000
0 <= xi, yi < n
All the pairs (xi, yi) are unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数 n 和一个 mines 数组，构造一个 n×n 的二进制网格，初始全为 1，但 mines 中指定的位置为 0。返回网格中最大的十字形（加号）的阶数。阶为 k 的十字形表示中心为 1，且上下左右各有 k-1 个连续的 1。

## 解题思路

**四个方向 DP**

对每个格子 (r, c)，计算四个方向（左、右、上、下）连续 1 的长度。该格子处十字形的阶数为四个方向长度的最小值。

具体做法：
- 建立一个 n×n 的 grid，mines 中的位置设为 0，其余为 1
- left[r][c] = 从左到右连续 1 的长度
- right[r][c] = 从右到左连续 1 的长度
- up[r][c] = 从上到下连续 1 的长度
- down[r][c] = 从下到上连续 1 的长度
- 对每个格子，order = min(left, right, up, down)
- 遍历所有格子取最大 order

可以用一个 dp 数组，四次遍历分别累加四个方向的值，最终每个位置存四个方向的最小值。

时间复杂度 O(n²)，空间复杂度 O(n²)。
