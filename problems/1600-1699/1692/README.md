# [1692] 计算分配糖果的不同方式

## Description


```md
https://leetcode.cn/problems/count-ways-to-distribute-candies/description/
* algorithms
* Hard (43.63%)
* Likes:    11
* Dislikes: -
* Testcase Example:  '3\n2'
现有 n 颗 不同 糖果（分别标记为 1 到 n ）和 k 个相同的手袋。请把糖果分配到各个手袋中并保证每个手袋里至少有一颗糖果。
不考虑手袋和糖果的摆放顺序，会有多种不同的分配方式。如果某种分配方式中其中一个手袋里的糖果与另一种分配方式中所有手袋里的糖果都不相同，则认为这两种分配方式不同。
例如，(1), (2,3) 与(2), (1,3)的分配方式是不同的，因为第一种分配方式中手袋(2,3)里的糖果2和3，在第二种分配方式中被分配到了手袋(2)和(1,3) 中。
已知整数 n 和 k, 请返回分配糖果的不同方式。返回的答案如果数值太大，请取109 + 7的模，并返回。

示例 1：
输入：n = 3, k = 2
输出：3
解释：把糖果 3 分配到 2 个手袋中的一个，共有 3 种方式:
(1), (2,3)
(1,2), (3)
(1,3), (2)
示例 2：
输入：n = 4, k = 2
输出：7
解释：把糖果 4 分配到 2 个手袋中的一个，共有 7 种方式:
(1), (2,3,4)
(1,2), (3,4)
(1,3), (2,4)
(1,4), (2,3)
(1,2,3), (4)
(1,2,4), (3)
(1,3,4), (2)
示例 3：
输入：n = 20, k = 5
输出：206085257
解释：把 20 颗糖果分配到 5 个手袋种，共有 1881780996 种方式。1881780996 取 109 + 7的模，等于 206085257。

提示：
1 <= k <= n <= 1000
Hint 1: Try to define a recursive approach. For the ith candies, there will be one of the two following cases:
Hint 2: If the i - 1 previous candies are already distributed into k bags for the ith candy, you can have k * dp[n - 1][k] ways to distribute the ith candy. We need then to solve the state of (n - 1, k).
Hint 3: If the i - 1 previous candies are already distributed into k - 1 bags for the ith candy, you can have dp[n - 1][k - 1] ways to distribute the ith candy. We need then to solve the state of (n - 1, k - 1).
Hint 4: This approach will be too slow and will traverse some states more than once. We should use memoization to make the algorithm efficient.

```

## Solution

[SourceCode](./solution.js)

## Translation

Distribute n distinct candies into k non-empty (unlabeled) bags; count ways mod 1e9+7 — Stirling numbers of the second kind.

## Approach

**第二类斯特林数**。dp[i][j] = i 颗糖进 j 个非空袋的方式数:第 i 颗要么独占新袋 dp[i−1][j−1],要么并入既有袋(任选 j 个之一)j·dp[i−1][j]。dp[0][0]=1,即 S(n,k)。O(nk) 表 10⁶,乘积 < 2⁵³ 安全。
