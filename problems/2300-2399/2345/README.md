# [2345] 寻找可见山的数量

## Description


```md
https://leetcode.cn/problems/finding-the-number-of-visible-mountains/description/
* algorithms
* Medium (43.11%)
* Likes:    12
* Dislikes: -
* Testcase Example:  '[[2,2],[6,3],[5,4]]'
给定一个 下标从 0 开始 的二维整数数组 peaks，其中 peaks[i] = [xi, yi] 表示山 i 在坐标 (xi, yi) 处有一个峰值。山可以被描述为一个直角等腰三角形，它的底部沿着 x 轴，山峰处有一个直角。更正式地说，上山和下山的 梯度 分别为 1 和 -1。
一座山如果它的顶峰不在另一座山 (包括其他山的边界) 之内，那么它被认为是 可见 的。
返回可见山的数量。

示例 1:
输入: peaks = [[2,2],[6,3],[5,4]]
输出: 2
解释: 上面的图表显示了山脉。
- 山 0 是可见的，因为它的峰值不在另一座山的里面或另一座山的边界。
- 山 1 是不可见的，因为它的顶峰在山 2 的边界。
- 山 2 是可见的，因为它的峰值不在另一座山的里面或另一座山的边界。
有 2 座山是可见的。
示例 2:
输入: peaks = [[1,3],[1,3]]
输出: 0
解释: 上面的图表显示了这些山 (它们完全重叠)。
两座山都看不见，因为它们的山峰在彼此里面。

提示:
1 <= peaks.length <= 105
peaks[i].length == 2
1 <= xi, yi <= 105
Hint 1: How can we efficiently find for each mountain the relevant mountains to compare itself against to check whether or not it would be visible?
Hint 2: Do you notice a pattern after sorting the peaks by their x-coordinates?
Hint 3: After sorting, process the peaks sequentially and use a monotonic stack to store currently visible mountains.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Mountain i has apex (xi, yi) and is a right isosceles triangle with base on the x-axis (slopes ±1). A mountain is visible if its apex lies strictly-or-boundary outside every other mountain. Count visible mountains.

Example 1:
Input: peaks = [[2,2],[6,3],[5,4]]
Output: 2

Example 2:
Input: peaks = [[1,3],[1,3]]
Output: 0

Constraints: 1 <= peaks.length <= 10^5, 1 <= xi, yi <= 10^5.

## Approach

Mountain (x, y) becomes the interval [x-y, x+y]; mountain A contains B's apex iff A's interval contains B's interval (l_A <= l_B and r_B <= r_A). Note invisible mountains still block others.

Sort intervals by (l asc, r desc). Then equal-l groups with descending r: a later interval can only be covered by an earlier one, and a duplicate group's members cover each other (all invisible). Sweep with a stack of blockers whose r values are strictly increasing (top = max r): a group is covered iff stack-top r >= its r; if not covered, push it (once) and count it only when the group has exactly one member.

O(n log n).
