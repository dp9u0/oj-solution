# [LCR 039] 柱状图中最大的矩形

## Description


```md
https://leetcode.cn/problems/0ynMMM/description/
* algorithms
* Hard (49.91%)
* Likes:    131
* Dislikes: -
* Testcase Example:  '[2,1,5,6,2,3]'
给定非负整数数组 heights ，数组中的数字用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
求在该柱状图中，能够勾勒出来的矩形的最大面积。

示例 1:
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
示例 2：
输入： heights = [2,4]
输出： 4

提示：
1 <= heights.length <=105
0 <= heights[i] <= 104

注意：本题与主站 84 题相同： https://leetcode.cn/problems/largest-rectangle-in-histogram/

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given an array of non-negative integers `heights` representing the heights of bars in a histogram where each bar has width 1, return the area of the largest rectangle that can be outlined in the histogram.

Example 1:
```
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The largest rectangle is the red area, with area 10.
```
Example 2:
```
Input: heights = [2,4]
Output: 4
```

Constraints:
- 1 <= heights.length <= 10^5
- 0 <= heights[i] <= 10^4

Note: This problem is identical to LeetCode 84 (Largest Rectangle in Histogram).

## Approach

**单调递增栈 (Monotonic Stack)**

对每个柱子，以其高度作为矩形的高，矩形的宽由左右两侧第一个「比它矮」的柱子限定。

维护一个单调递增栈（栈内高度递增，存的是下标）。遍历每个柱子：
- 当当前柱子高度 `heights[i]` 小于栈顶柱子的高度时，弹出栈顶 `top`。此时以 `heights[top]` 为高的矩形：
  - 左边界 = 新栈顶下标（或 -1，若栈空）
  - 右边界 = 当前下标 `i`
  - 面积 = `heights[top] * (i - leftBoundary - 1)`

在数组末尾追加一个高度为 0 的哨兵，保证最后栈内所有元素都能被弹出计算。

- 时间复杂度：O(n)，每个下标最多入栈/出栈一次
- 空间复杂度：O(n)
