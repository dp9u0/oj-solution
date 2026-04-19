# [352] Data Stream as Disjoint Intervals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/data-stream-as-disjoint-intervals/description/)

* algorithms
* Hard (60.03%)
* Testcase Example:  '["SummaryRanges","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals","addNum","getIntervals"]\n' +

```md
'[[],[1],[],[3],[],[7],[],[2],[],[6],[]]'
Given a data stream input of non-negative integers a1, a2, ..., an, summarize the numbers seen so far as a list of disjoint intervals.
Implement the SummaryRanges class:
SummaryRanges() Initializes the object with an empty stream.
void addNum(int value) Adds the integer value to the stream.
int[][] getIntervals() Returns a summary of the integers in the stream currently as a list of disjoint intervals [starti, endi]. The answer should be sorted by starti.

Example 1:
Input
["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
[[], [1], [], [3], [], [7], [], [2], [], [6], []]
Output
[null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7, 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]
Explanation
SummaryRanges summaryRanges = new SummaryRanges();
summaryRanges.addNum(1);      // arr = [1]
summaryRanges.getIntervals(); // return [[1, 1]]
summaryRanges.addNum(3);      // arr = [1, 3]
summaryRanges.getIntervals(); // return [[1, 1], [3, 3]]
summaryRanges.addNum(7);      // arr = [1, 3, 7]
summaryRanges.getIntervals(); // return [[1, 1], [3, 3], [7, 7]]
summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
summaryRanges.getIntervals(); // return [[1, 3], [7, 7]]
summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
summaryRanges.getIntervals(); // return [[1, 3], [6, 7]]

Constraints:
0
At most 3 * 10^4 calls will be made to addNum and getIntervals.
At most 10^2 calls will be made to getIntervals.

Follow up: What if there are lots of merges and the number of disjoint intervals is small compared to the size of the data stream?

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
给定一个非负整数的数据流输入 a1, a2, ..., an，将到目前为止看到的数字总结为不相交的区间列表。

实现 `SummaryRanges` 类：
*   `SummaryRanges()` 使用空数据流初始化对象。
*   `void addNum(int value)` 向数据流中加入整数 `value`。
*   `int[][] getIntervals()` 以不相交区间 `[starti, endi]` 的列表形式返回对数据流中整数的总结。答案应该按 `starti` 排序。

### 解题思路 (Approach)
这是一道关于维护动态区间的题目。由于频繁插入数字并随时需要获取合并后的区间列表，我们需要一种能够快速找到插入位置并进行区间合并的数据结构。
考虑到区间是互不相交且有序的，我们可以维护一个按照区间起点排序的区间数组 `intervals`。
每次插入数字 `value` 时：
1. 寻找 `value` 可以插入的位置。可以使用二分查找，或者直接遍历（考虑到题意约束和 JS 的简单实现，由于 getIntervals 最多 10^2 次，addNum 3*10^4 次，若维护有序数组，插入可能较慢。但我们也可以用二分查找优化寻找插入点）。
2. 在维护一个有序区间列表时，寻找目标值 `value` 周围的区间，通常会有以下几种情况：
   - 包含：`value` 已经存在于某个区间 `[start, end]` 中 (`start <= value <= end`)，则不需要做任何事。
   - 合并左右：`value` 刚好填补了两个区间之间的空隙，即左边区间的 `end == value - 1`，右边区间的 `start == value + 1`，则将左右区间和 `value` 合并成一个大区间。
   - 合并左边：只和左边区间相连，左边区间的 `end == value - 1`，则更新左边区间的 `end = value`。
   - 合并右边：只和右边区间相连，右边区间的 `start == value + 1`，则更新右边区间的 `start = value`。
   - 都不相连：作为全新的独立区间 `[value, value]` 插入到合适位置。

由于 JS 数组的 `splice` 操作在数组较小时代价可接受，我们可以维护一个从小到大排序的区间数组，每次插入时利用二分查找定位并处理合并逻辑。
