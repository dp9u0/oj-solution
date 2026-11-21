# [2158] 每天绘制新区域的数量

## Description


```md
https://leetcode.cn/problems/amount-of-new-area-painted-each-day/description/
* algorithms
* Hard (54.30%)
* Likes:    20
* Dislikes: -
* Testcase Example:  '[[1,4],[4,7],[5,8]]'
有一幅细长的画，可以用数轴来表示。 给你一个长度为 n 、下标从 0 开始的二维整数数组 paint ，其中 paint[i] = [starti, endi] 表示在第 i 天你需要绘制 starti 和 endi 之间的区域。
多次绘制同一区域会导致不均匀，因此每个区域最多只能绘制 一次 。
返回一个长度为 n 的整数数组 worklog，其中 worklog[i] 是你在第 i 天绘制的 新 区域的数量。

示例 1：
输入：paint = [[1,4],[4,7],[5,8]]
输出：[3,3,1]
解释：
在第 0 天，绘制 1 到 4 之间的所有内容。
第 0 天绘制的新区域数量为 4 - 1 = 3 。
在第 1 天，绘制 4 到 7 之间的所有内容。
第 1 天绘制的新区域数量为 7 - 4 = 3 。
在第 2 天，绘制 7 到 8 之间的所有内容。
5 到 7 之间的所有内容都已在第 1 天绘制完毕。
第 2 天绘制的新区域数量为 8 - 7 = 1 。
示例 2：
输入：paint = [[1,4],[5,8],[4,7]]
输出：[3,3,1]
解释：
在第 0 天，绘制 1 到 4 之间的所有内容。
第 0 天绘制的新区域数量为 4 - 1 = 3 。
第 1 天，绘制 5 到 8 之间的所有内容。
第 1 天绘制的新区域数量为 8 - 5 = 3 。
在第 2 天，绘制 4 到 5 之间的所有内容。
5 到 7 之间的所有内容都已在第 1 天绘制完毕。
第 2 天绘制的新区域数量为 5 - 4 = 1 。
示例 3：
输入：paint = [[1,5],[2,4]]
输出：[4,0]
解释：
在第 0 天，绘制 1 到 5 之间的所有内容。
第 0 天绘制的新区域数量为 5 - 1 = 4 。
在第 1 天，什么都不画，因为第 0 天已经画了 2 到 4 之间的所有内容。
第 1 天绘制的新区域数量为 0 。

提示：
1 <= paint.length <= 105
paint[i].length == 2
0 <= starti < endi <= 5 * 104
Hint 1: What’s a good way to keep track of intervals that you have already painted?
Hint 2: Create an array of all 1’s, and when you have painted an interval, set the values in that interval to 0.
Hint 3: Using this array, how can you quickly calculate the amount of new area that you paint on a given day?
Hint 4: Calculate the sum of the new array in the interval that you paint.

```

## Solution

[SourceCode](./solution.js)

## English Translation

A canvas is a number line. `paint[i] = [start_i, end_i]` means on day i you paint the region between start_i and end_i. Each region may be painted at most once; repaints are skipped. Return `worklog[i]` = the amount of NEW area painted on day i.

Example 1:
Input: paint = [[1,4],[4,7],[5,8]]
Output: [3,3,1]

Example 2:
Input: paint = [[1,4],[5,8],[4,7]]
Output: [3,3,1]

Example 3:
Input: paint = [[1,5],[2,4]]
Output: [4,0]

Constraints: 1 <= paint.length <= 10^5, 0 <= start_i < end_i <= 5 * 10^4.

## Approach

Segment tree over positions [0, 5*10^4) storing the count of already-painted positions with an "all painted" lazy tag. Per day: unpainted = (end - start) - query(start, end); record it; then range-assign painted = 1 over [start, end). Each day costs O(log C); total O(n log C).
