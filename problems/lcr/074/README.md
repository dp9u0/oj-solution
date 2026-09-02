# [LCR 074] 合并区间

## Description


```md
https://leetcode.cn/problems/SsGoHC/description/
* algorithms
* Medium (56.02%)
* Likes:    72
* Dislikes: -
* Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

示例 1：
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

提示：
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

注意：本题与主站 56 题相同： https://leetcode.cn/problems/merge-intervals/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an array `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals and return an array of non-overlapping intervals that exactly covers all inputs.

**Example 1:** `[[1,3],[2,6],[8,10],[15,18]]` → `[[1,6],[8,10],[15,18]]`
**Example 2:** `[[1,4],[4,5]]` → `[[1,5]]` (touching counts as overlapping)

**Constraints:** `1 <= intervals.length <= 10^4`, `0 <= start_i <= end_i <= 10^4`.

Note: same as LeetCode 56.

---

## Approach

- **Sort** intervals by start.
- Greedily sweep: keep a `cur` interval; for the next interval, if it starts `<= cur.end`, extend `cur.end = max(cur.end, next.end)`; otherwise push `cur` and start a new one.
- Append the last `cur` at the end.

Complexity: `O(n log n)` time (sort), `O(n)` space for result.
