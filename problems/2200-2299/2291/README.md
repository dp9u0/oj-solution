# [2291] 最大股票收益

## Description


```md
https://leetcode.cn/problems/maximum-profit-from-trading-stocks/description/
* algorithms
* Medium (57.56%)
* Likes:    14
* Dislikes: -
* Testcase Example:  '[5,4,6,2,3]\n[8,5,4,3,5]\n10'
给你两个下标从 0 开始的数组 present 和 future ，present[i] 和 future[i] 分别代表第 i 支股票现在和将来的价格。每支股票你最多购买 一次 ，你的预算为 budget 。
求最大的收益。

示例 1：
输入：present = [5,4,6,2,3], future = [8,5,4,3,5], budget = 10
输出：6
解释：你可以选择购买第 0,3,4 支股票获得最大收益：6 。总开销为：5 + 2 + 3 = 10 , 总收益是: 8 + 3 + 5 - 10 = 6 。
示例 2：
输入：present = [2,2,5], future = [3,4,10], budget = 6
输出：5
解释：你可以选择购买第 2 支股票获得最大收益：5 。总开销为：5 , 总收益是: 10 - 5 = 5 。
示例 3：
输入：present = [3,3,12], future = [0,3,15], budget = 10
输出：0
解释：你无法购买唯一一支正收益股票 2 ，因此你的收益是 0 。

提示：
n == present.length == future.length
1 <= n <= 1000
0 <= present[i], future[i] <= 100
0 <= budget <= 1000
Hint 1: Think of the 0-1 Knapsack Problem.
Hint 2: For the ith stock, the weight is present[i], and the value is future[i] - present[i].

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given `present`/`future` prices per stock and a `budget`, each stock may be bought at most once. Maximize total profit (future - present over bought stocks) without exceeding the budget.

Example 1:
Input: present = [5,4,6,2,3], future = [8,5,4,3,5], budget = 10
Output: 6

Example 2:
Input: present = [2,2,5], future = [3,4,10], budget = 6
Output: 5

Example 3:
Input: present = [3,3,12], future = [0,3,15], budget = 10
Output: 0

Constraints: 1 <= n <= 1000, 0 <= prices <= 100, 0 <= budget <= 1000.

## Approach

0-1 knapsack: weight present[i], profit future[i] - present[i]. One-dimensional dp over remaining budget, iterating the budget descending so each stock is used once. O(n * budget).
