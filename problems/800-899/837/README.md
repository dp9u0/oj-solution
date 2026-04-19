# [837] New 21 Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/new-21-game/description/)

* algorithms
* Medium (51.97%)
* Likes:    2495
* Dislikes: 2007
* Testcase Example:  '10\n1\n10'

```md
Alice plays the following game, loosely based on the card game '21'.
Alice starts with 0 points and draws numbers while she has less than k points. During each draw, she gains an integer number of points randomly from the range [1, maxPts], where maxPts is an integer. Each draw is independent and the outcomes have equal probabilities.
Alice stops drawing numbers when she gets k or more points.
Return the probability that Alice has n or fewer points.
Answers within 10-5 of the actual answer are considered accepted.

Example 1:

Input: n = 10, k = 1, maxPts = 10
Output: 1.00000
Explanation: Alice gets a single card, then stops.

Example 2:

Input: n = 6, k = 1, maxPts = 10
Output: 0.60000
Explanation: Alice gets a single card, then stops.
In 6 out of 10 possibilities, she is at or below 6 points.

Example 3:

Input: n = 21, k = 17, maxPts = 10
Output: 0.73278


Constraints:

0 <= k <= n <= 104
1 <= maxPts <= 104


```

## 中文翻译

Alice 从 0 分开始，每次随机抽 [1, maxPts] 的整数加分，直到分数 >= k 停止。求最终分数 <= n 的概率。

## 解题思路

DP + 滑动窗口优化。dp[i] 表示分数为 i 的概率。dp[i] = (dp[i-1] + dp[i-2] + ... + dp[i-maxPts]) / maxPts，即从前 maxPts 个状态转移。用滑动窗口维护窗口和避免重复计算。

## Solution

[SourceCode](./solution.js)
