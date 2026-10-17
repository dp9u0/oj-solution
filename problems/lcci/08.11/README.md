# [面试题 08.11] 硬币

## Description


```md
https://leetcode.cn/problems/coin-lcci/description/
* lcci
* Medium (49.82%)
* Likes:    299
* Dislikes: -
* Testcase Example:  '5'
硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)
示例 1：
输入：n = 5
输出：2
解释：有两种方式可以凑成总金额:
5=5
5=1+1+1+1+1
示例 2：
输入：n = 10
输出：4
解释：有四种方式可以凑成总金额:
10=10
10=5+5
10=5+1+1+1+1+1
10=1+1+1+1+1+1+1+1+1+1
说明：
注意:
你可以假设：
0 <= n (总金额) <= 1000000
Hint 1: 试着把它分解成子问题。如果你在做改变，第一选择是什么？
Hint 2: 如果你正在进行换零操作，不妨从决定需要多少个币值为25分的硬币开始。
Hint 3: 一旦你决定用两个25分兑换98分，就需要弄清楚用5分、10分和1分兑换 48分有多少种方式。
Hint 4: 分析你的算法。有重复性的工作吗？你能优化它吗？
Hint 5: 试试制表法。

```

## Description (English)

Coins. Given an unlimited supply of coins with denominations 25, 10, 5 and 1 cents, write code to compute the number of ways to represent n cents. The result can be large — return it modulo 1000000007.

Example 1:
Input: n = 5
Output: 2 (5; 1+1+1+1+1)

Example 2:
Input: n = 10
Output: 4 (10; 5+5; 5+1×5; 1×10)

Note: 0 <= n <= 1000000.

## 思路

完全背包计数 O(4n)：`dp[c]` 为凑出 c 的方案数，按面额 1/5/10/25 的顺序外层递推（保证组合不重复计数），`dp[c] += dp[c - coin]`，全程取模。

## Solution

[SourceCode](./solution.js)
