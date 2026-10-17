# [面试题 17.21] 直方图的水量

## Description


```md
https://leetcode.cn/problems/volume-of-histogram-lcci/description/
* lcci
* Hard (63.62%)
* Likes:    294
* Dislikes: -
* Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。
上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marcos 贡献此图。
示例：
输入：[0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
Hint 1: 直方图中最高的长方形起什么作用?
Hint 2: 想象一下最高的长方形、左边第二高的长方形和右边第二高的长方形。水会填满它们之间的区域。你能计算出其面积吗？其余的面积怎么办？
Hint 3: 为了计算出整体上最高的长方形和左侧最高的长方形之间的面积，你只需遍历直方图并减去这两个长方形之间的任何长方形的面积。你可以在右侧做同样的事情。如何处理剩下的图表?
Hint 4: 你可以通过重复这个过程来处理图的其余部分：找到最高的长方形和第二高的长方形，然后减去它们之间的长方形的面积。
Hint 5: 怎样才能更快地找到两边的下一个最高的长方形?
Hint 6: 你能通过预计算来得出每边下一个最高的长方形是哪个么？
Hint 7: 作为另一种解决方案，请从每个长方形的角度来考虑。每个长方形上面都有水。每个长方形上面会有多少水？
Hint 8: 每个长方形的顶部都有水，水的高度应与左侧最高长方形和右侧最高长方形的较小值相匹配，也就是说，water_on_top[i] = min(tallest_ bar(0->i), tallest_bar(i, n))。
Hint 9: 你应该能在O(N)时间和O(N)空间中解出该题。

```

## Description (English)

Given a histogram (also known as a bar chart), imagine pouring water from the top continuously. How much water can the histogram hold? Bars have width 1. For the histogram [0,1,0,2,1,0,1,3,2,1,2,1], it can hold 6 units of water (shown in blue). Thanks to Marcos for this figure.

Example:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

## 思路

双指针 O(n)/O(1)：水位 `min(leftMax, rightMax)`。维护左右指针与两侧已见最大值，**较矮一侧**的水位由它自己决定（另一侧必然 ≥ 它），可安全结算该格水量 `sideMax - height[side]` 后指针内移。水只在柱间蓄，端点格贡献 0 天然成立。

## Solution

[SourceCode](./solution.js)
