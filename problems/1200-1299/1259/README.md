# [1259] 不相交的握手

## Description


```md
https://leetcode.cn/problems/handshakes-that-dont-cross/description/
* algorithms
* Hard (52.95%)
* Likes:    60
* Dislikes: -
* Testcase Example:  '4'
偶数 个人站成一个圆，总人数为 num_people 。每个人与除自己外的一个人握手，所以总共会有 num_people / 2 次握手。
将握手的人之间连线，请你返回连线不会相交的握手方案数。
由于结果可能会很大，请你返回答案 模 10^9+7 后的结果。

示例 1：
输入：num_people = 2
输出：1
示例 2：
输入：num_people = 4
输出：2
解释：总共有两种方案，第一种方案是 [(1,2),(3,4)] ，第二种方案是 [(2,3),(4,1)] 。
示例 3：
输入：num_people = 6
输出：5
示例 4：
输入：num_people = 8
输出：14

提示：
2 <= num_people <= 1000
num_people % 2 == 0
Hint 1: Use dynamic programming.
Hint 2: Let dp[n] be the number of ways that n people can handshake.
Hint 3: Then fix a person as a pivot and turn for every other person who will have a handshake, the answer is the sum of the products of the new two subproblems.

```

## Solution

[SourceCode](./solution.js)

## Translation

num_people (even) around a circle; count non-crossing perfect matchings mod 1e9+7 — the Catalan numbers.

- Example: 4 → 2; 8 → 14

## Approach

**卡特兰数 DP**。固定 1 号,他与 j 握手把圆分成 j−2 与 n−j 两段(均为偶数):dp[n] = Σ_{k 偶} dp[k]·dp[n−2−k],dp[0] = 1。O(n²) 模 1e9+7。
