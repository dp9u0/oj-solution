# [3119] 最大数量的可修复坑洼

## Description


```md
https://leetcode.cn/problems/maximum-number-of-potholes-that-can-be-fixed/description/
* algorithms
* Medium (26.53%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '".."\n5'
给定一个字符串 road，只包含字符 "x" 和 "."，其中每个 "x" 代表一个坑洼，每个 "." 代表一个平滑的道路，以及一个整数 budget。
在一次修复操作中，您可以以 n + 1 的价格修复 n 个连续坑洼。
返回可以修复的坑洼的 最大 数量，以便所有修复的价格总和 不会超过 给定的预算 budget。
示例 1:
输入: road = "..", budget = 5
输出: 0
解释:
没有坑洼需要修复。
示例 2:
输入: road = "..xxxxx", budget = 4
输出: 3
解释:
我们修复了前三个坑洼（它们是连续的）。任务所需的预算为 3 + 1 = 4。
示例 3:
输入: road = "x.x.xxx...x", budget = 14
输出: 6
解释:
我们可以修复所有的坑洼。总花费为 (1 + 1) + (1 + 1) + (3 + 1) + (1 + 1) = 10 在我们的预算 14 之内。

提示：
1 <= road.length <= 105
1 <= budget <= 105 + 1
road 只包含字符 '.' 和 'x'。
Hint 1: Find all consecutive blocks of ’x’.
Hint 2: Sort them by their length.
Hint 3: Try to fix the block from the largest one until you have enough budget.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): road of '.'/'x', budget b. Fixing n consecutive potholes costs n+1. Maximize potholes fixed with total cost <= b.

Approach: collect consecutive 'x' block lengths, sort descending (larger blocks are more cost-efficient, n/(n+1) grows with n). For each block L: if budget >= L+1, fix all (budget -= L+1, ans += L); else fix budget-1 from it and stop. O(n log n).
