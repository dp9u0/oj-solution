# [3155] 可升级服务器的最大数量

## Description


```md
https://leetcode.cn/problems/maximum-number-of-upgradable-servers/description/
* algorithms
* Medium (21.98%)
* Dislikes: -
* Testcase Example:  '[4,3]\n[3,5]\n[4,2]\n[8,9]'
你有 n 个数据中心并且需要升级他们的服务器。
给定四个长度为 n 的数组 count，upgrade，sell 和 money，分别针对每个数据中心表示：
服务器的数量
升级单个服务器的成本
出售服务器获得的钱
你最初拥有的钱
返回一个数组 answer，其中对于每个数据中心，answer 中相应的元素代表可以升级的 最大 服务器数量。
请注意，一个数据中心的资金 不能 用于另一个数据中心。

示例 1：
输入：count = [4,3], upgrade = [3,5], sell = [4,2], money = [8,9]
输出：[3,2]
解释：
对于第一个数据中心，如果我们出售一台服务器，我们将会有 8 + 4 = 12 单位的钱并且我们能够升级其余的 3 台服务器。
对于第二个数据中心，如果我们出售一台服务器，我们将会有 9 + 2 = 11 单位的钱并且我们能够升级其余的 2 台服务器。
示例 2：
输入：count = [1], upgrade = [2], sell = [1], money = [1]
输出：[0]

提示：
1 <= count.length == upgrade.length == sell.length == money.length <= 105
1 <= count[i], upgrade[i], sell[i], money[i] <= 105
Hint 1: Use binary search to find the maximum number of servers that can be upgraded for each data center separately.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Per data center: upgrade k servers (cost k*upgrade each... total k*upgrade), sell the rest (count-k) for sell*(count-k). Maximize k with money + sell*(count-k) >= k*upgrade.

Approach: closed form: k <= (money + sell*count) / (upgrade + sell); answer = min(count, floor(...)). Values <= ~1e10 < 2^53, exact in doubles. O(n).

Verified: [4,3]/[3,5]/[4,2]/[8,9] -> [3,2]; [1]/[2]/[1]/[1] -> [0].
