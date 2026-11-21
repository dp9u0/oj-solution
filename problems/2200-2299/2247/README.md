# [2247] K 条高速公路的最大旅行费用

## Description


```md
https://leetcode.cn/problems/maximum-cost-of-trip-with-k-highways/description/
* algorithms
* Hard (54.45%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '5\n[[0,1,4],[2,1,3],[1,4,11],[3,2,3],[3,4,2]]\n3'
一系列高速公路连接从 0 到 n - 1 的 n 个城市。给定一个二维整数数组 highways，其中 highways[i] = [city1i, city2i, tolli] 表示有一条高速公路连接 city1i 和city2i，允许一辆汽车从 city1i 前往 city2i，反之亦然，费用为 tolli。
给你一个整数 k，你要正好经过 k 条公路。你可以从任何一个城市出发，但在旅途中每个城市最多只能访问一次。
返回您旅行的最大费用。如果没有符合要求的行程，则返回 -1。
示例 1:
输入: n = 5, highways = [[0,1,4],[2,1,3],[1,4,11],[3,2,3],[3,4,2]], k = 3
输出: 17
解释:
一个可能的路径是从 0 -> 1 -> 4 -> 3。这次旅行的费用是 4 + 11 + 2 = 17。
另一种可能的路径是从 4 -> 1 -> 2 -> 3。这次旅行的费用是 11 + 3 + 3 = 17。
可以证明，17 是任何有效行程的最大可能费用。
注意，旅行 4 -> 1 -> 0 -> 1 是不允许的，因为你访问了城市 1 两次。

示例 2:
输入: n = 4, highways = [[0,1,3],[2,3,2]], k = 2
输出: -1
解释: 没有长度为 2 的有效行程，因此返回-1。

提示:
2 <= n <= 15
1 <= highways.length <= 50
highways[i].length == 3
0 <= city1i, city2i <= n - 1
city1i != city2i
0 <= tolli <= 100
1 <= k <= 50

没有重复的高速公路。
Hint 1: Are there any computations being repeated?
Hint 2: The same path can be visited multiple times. Could we reuse the previously calculated result?
Hint 3: Store the nodes seen on the current path and the last node on the current path as a dynamic programming state.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Highways connect n cities (n <= 15) with tolls. A trip uses exactly k highways, starting anywhere, visiting each city at most once. Return the maximum total toll, or -1 if no such trip exists.

Example 1:
Input: n = 5, highways = [[0,1,4],[2,1,3],[1,4,11],[3,2,3],[3,4,2]], k = 3
Output: 17

Example 2:
Input: n = 4, highways = [[0,1,3],[2,3,2]], k = 2
Output: -1

Constraints: 2 <= n <= 15, 1 <= highways.length <= 50, 1 <= k <= 50.

## Approach

Bitmask DP: dp[mask][last] = maximum cost of a simple path covering exactly popcount(mask) cities and ending at last. Base: dp[1<<v][v] = 0. Transitions extend to any neighbor outside the mask, cost increases by the edge toll. A trip with exactly k highways corresponds to masks with k+1 bits; the answer is the maximum dp value over those masks. About 2^15 * 15 * 15 transitions.
