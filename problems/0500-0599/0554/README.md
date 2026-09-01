# [554] Brick Wall

## Description

[LeetCode Problem Description](https://leetcode.com/problems/brick-wall/description/)

* algorithms
* Medium (56.02%)
* Likes:    2674
* Dislikes: 186
* Testcase Example:  '[[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]'

```md
There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths. The total width of each row is the same.
Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.
Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line.

Example 1:


Input: wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
Output: 2

Example 2:

Input: wall = [[1],[1],[1]]
Output: 3


Constraints:

n == wall.length
1 <= n <= 104
1 <= wall[i].length <= 104
1 <= sum(wall[i].length) <= 2 * 104
sum(wall[i]) is the same for each row i.
1 <= wall[i][j] <= 231 - 1


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定砖墙，每行由若干砖块组成。画一条竖线从上到下穿过最少的砖块。线经过砖块边缘不算穿过。不能画在墙的两端边缘。返回最少穿过的砖块数。

## 解题思路

统计每个位置有多少行的砖块边缘经过该位置（前缀和）。边缘最多的位置穿过的砖块最少。答案 = 总行数 - 最大边缘数。用 Map 统计每行前缀和出现的次数。O(n×m)。
