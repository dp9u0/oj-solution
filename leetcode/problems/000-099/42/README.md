# 42. Trapping Rain Water

## Description

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

## Example

Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

## Solution

[SourceCode](./solution.js)

### 思路一

每个index 存放水的量由该位置的 左侧最大值和右侧最大值决定，因此可以遍历两次
一次确定该位置的左侧最大值 第二次（从右向左）确定该位置的右侧最大值同时计算存水量

### 思路二(遍历一次)

从左向右遍历,记录当前左侧最大值(maxHight),以及从左侧最大值到现在,每个高度对应的位置的数量(slot),每次向右遍历一个,都需要重新判断,slot 中的每个高度是否可以继续加水提升高度，例如 当前最大值为 3 ,有一个点高度为 0,继续遍历,下一个点高度为2,则高度为0 的可以加水到高度为2，此时 slot 中 高度为2 的点有两个。当下一个点为3时,继续加水，同时清空solt（把新的3更新为左侧最大值）