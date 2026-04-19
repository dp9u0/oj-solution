# [3219] Minimum Cost for Cutting Cake II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/description/)

* algorithms
* Hard (55.20%)
* Likes:    128
* Dislikes: 18
* Testcase Example:  '3\n2\n[1,3]\n[5]'

```md
There is an m x n cake that needs to be cut into 1 x 1 pieces.
You are given integers m, n, and two arrays:

horizontalCut of size m - 1, where horizontalCut[i] represents the cost to cut along the horizontal line i.
verticalCut of size n - 1, where verticalCut[j] represents the cost to cut along the vertical line j.

In one operation, you can choose any piece of cake that is not yet a 1 x 1 square and perform one of the following cuts:

Cut along a horizontal line i at a cost of horizontalCut[i].
Cut along a vertical line j at a cost of verticalCut[j].

After the cut, the piece of cake is divided into two distinct pieces.
The cost of a cut depends only on the initial cost of the line and does not change.
Return the minimum total cost to cut the entire cake into 1 x 1 pieces.

Example 1:

Input: m = 3, n = 2, horizontalCut = [1,3], verticalCut = [5]
Output: 13
Explanation:


Perform a cut on the vertical line 0 with cost 5, current total cost is 5.
Perform a cut on the horizontal line 0 on 3 x 1 subgrid with cost 1.
Perform a cut on the horizontal line 0 on 3 x 1 subgrid with cost 1.
Perform a cut on the horizontal line 1 on 2 x 1 subgrid with cost 3.
Perform a cut on the horizontal line 1 on 2 x 1 subgrid with cost 3.

The total cost is 5 + 1 + 1 + 3 + 3 = 13.

Example 2:

Input: m = 2, n = 2, horizontalCut = [7], verticalCut = [4]
Output: 15
Explanation:

Perform a cut on the horizontal line 0 with cost 7.
Perform a cut on the vertical line 0 on 1 x 2 subgrid with cost 4.
Perform a cut on the vertical line 0 on 1 x 2 subgrid with cost 4.

The total cost is 7 + 4 + 4 = 15.


Constraints:

1 <= m, n <= 105
horizontalCut.length == m - 1
verticalCut.length == n - 1
1 <= horizontalCut[i], verticalCut[i] <= 103


```

## 题目翻译

将一个 m×n 的蛋糕切成 1×1 的小块。每次可以沿水平线或垂直线切一刀，切刀代价固定。求最小总代价。

## 解题思路

**贪心：优先切最贵的刀**

每次切刀时，代价 = 刀的基础成本 × 垂直方向上的段数（或水平段数）。越早切的刀，垂直段数越少，所以应该先切贵的。

1. 将水平和垂直切刀分别降序排序
2. 双指针合并，每次选成本最大的切刀
3. 水平切的代价 × 当前垂直段数，垂直切的代价 × 当前水平段数

时间 O((m+n) log(m+n))，空间 O(1)（不计排序）。

## Solution

[SourceCode](./solution.js)
