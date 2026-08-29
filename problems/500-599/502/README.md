# [502] IPO

## Description

[LeetCode Problem Description](https://leetcode.com/problems/ipo/description/)

* algorithms
* Hard (53.77%)
* Likes:    4259
* Dislikes: 288
* Testcase Example:  '2\n0\n[1,2,3]\n[0,1,1]'

```md
Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most k distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.
You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it.
Initially, you have w capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.
Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital.
The answer is guaranteed to fit in a 32-bit signed integer.

Example 1:

Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
Output: 4
Explanation: Since your initial capital is 0, you can only start the project indexed 0.
After finishing it you will obtain profit 1 and your capital becomes 1.
With capital 1, you can either start the project indexed 1 or the project indexed 2.
Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.

Example 2:

Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
Output: 6


Constraints:

1 <= k <= 105
0 <= w <= 109
n == profits.length
n == capital.length
1 <= n <= 105
0 <= profits[i] <= 104
0 <= capital[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

n 个项目各有纯利润 `profits[i]` 与启动门槛 `capital[i]`。初始资本 `w`，至多做 k 个不同项目（完成后利润计入资本）。返回最终最大资本。

示例 1：`k=2, w=0, profits=[1,2,3], capital=[0,1,1]` → `4`
示例 2：`k=3, w=0, [1,2,3], [0,1,2]` → `6`

约束：`k, n ≤ 10^5`，`w ≤ 10^9`，`profits[i] ≤ 10^4`

## 解题思路

经典贪心：项目按 `capital` 升序排序；维护可用项目（资本达标）利润的**大顶堆**。每轮：把所有新达标项目入堆，取堆顶（最大利润）完成，资本增加；重复 k 次或堆空。正确性：每步取当前可选的最大利润最优（利润非负，多拿不亏）。

O(n log n + k log n)。