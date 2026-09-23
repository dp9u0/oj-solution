# [4056] 统计相交区间对 I

## Description


```md
https://leetcode.cn/problems/number-of-intersecting-interval-pairs-i/description/
* algorithms
* Easy (69.94%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[[1,2],[2,3],[3,4]]'
给你一个包含 n 个元素的二维整数数组 intervals，其中 intervals[i] = [starti, endi] 表示从 starti 到 endi 的 闭区间 。
返回满足 0 <= i < j < n，且 intervals[i] 与 intervals[j] 相交 的下标对 (i, j) 的数量。
如果两个区间至少有一个公共点，则称它们 相交。仅共享一个端点的情况也视为相交。

示例 1：
输入： intervals = [[1,2],[2,3],[3,4]]
输出： 2
解释：
共有 2 对相交区间：
区间 [1, 2] 和 [2, 3] 在点 2 处相交。
区间 [2, 3] 和 [3, 4] 在点 3 处相交。
示例 2：
输入： intervals = [[1,5],[2,4],[3,6]]
输出： 3
解释：
共有 3 对相交区间：
[1, 5] 和 [2, 4] 的交集为 [2, 4]。
[1, 5] 和 [3, 6] 的交集为 [3, 5]。
[2, 4] 和 [3, 6] 的交集为 [3, 4]。
示例 3：
输入： intervals = [[1,2],[3,4],[5,6]]
输出： 0
解释：
不存在相交的区间对。因此，答案为 0。

提示：
2 <= intervals.length <= 100
intervals[i] == [starti, endi]
0 <= starti <= endi <= 100
Hint 1: Check every pair of intervals. They intersect exactly when max(starti, startj) <= min(endi, endj).

```

## Description (English)

You are given a 2D integer array `intervals` of `n` elements, where `intervals[i] = [starti, endi]` represents the closed interval from `starti` to `endi`.

Return the number of index pairs `(i, j)` with `0 <= i < j < n` such that `intervals[i]` and `intervals[j]` intersect.

Two intervals are said to intersect if they share at least one common point. Sharing only an endpoint also counts as intersecting.

Example 1:
Input: intervals = [[1,2],[2,3],[3,4]]
Output: 2
Explanation: [1,2] and [2,3] intersect at point 2; [2,3] and [3,4] intersect at point 3.

Example 2:
Input: intervals = [[1,5],[2,4],[3,6]]
Output: 3
Explanation: All three pairs intersect.

Example 3:
Input: intervals = [[1,2],[3,4],[5,6]]
Output: 0
Explanation: No pair of intervals intersects.

Constraints:
2 <= intervals.length <= 100
intervals[i] == [starti, endi]
0 <= starti <= endi <= 100

## 思路

n <= 100，直接暴力枚举所有区间对 `(i, j)`，两闭区间 `[s1, e1]` 与 `[s2, e2]` 相交等价于 `max(s1, s2) <= min(e1, e2)`，满足则计数。

复杂度：时间 `O(n^2)`，空间 `O(1)`。

## Solution

[SourceCode](./solution.js)
