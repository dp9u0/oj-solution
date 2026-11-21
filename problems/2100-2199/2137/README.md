# [2137] 通过倒水操作让所有的水桶所含水量相等

## Description


```md
https://leetcode.cn/problems/pour-water-between-buckets-to-make-water-levels-equal/description/
* algorithms
* Medium (61.25%)
* Likes:    13
* Dislikes: -
* Testcase Example:  '[1,2,7]\n80'
你有 n 个水桶，每个水桶中所含的水量用一个 下标从 0 开始 的数组 buckets 给出，第 i 个水桶中有 buckets[i] 升水。
你想让所有的水桶中所含的水量相同。你可以从一个水桶向其它任意一个水桶倒任意数量的水（可以不是整数）。但是，你每倒 k 升水，百分之 loss 的水会洒掉。
请返回经过倒水操作，所有水桶中的水量相同时，每个水桶中的 最大 水量。如果你的答案和标准答案的误差不超过 10-5，那么答案将被通过。

示例 1:
输入: buckets = [1,2,7], loss = 80
输出: 2.00000
解释: 从水桶 2 向水桶 0 倒 5 升水。
5 * 80% = 4 升水会洒掉，水桶 0 只会获得 5 - 4 = 1 升水。
此时所有的水桶中都含有 2 升水，所以返回 2。
示例 2:
输入: buckets = [2,4,6], loss = 50
输出: 3.50000
解释: 从水桶 1 向水桶 0 倒 0.5 升水。
0.5 * 50% = 0.25 升水会洒掉，水桶 0 只会获得 0.5 - 0.25 = 0.25 升水。
此时, buckets = [2.25, 3.5, 6].
从水桶 2 向水桶 0 倒 2.5 升水。
2.5 * 50% = 1.25 升水会洒掉，水桶 0 只会获得 2.5 - 1.25 = 1.25 升水。
此时所有的水桶中都含有 3.5 升水，所以返回 3.5。
示例 3:
输入: buckets = [3,3,3,3], loss = 40
输出: 3.00000
解释: 所有的水桶已经含有相同的水量。

提示:
1 <= buckets.length <= 105
0 <= buckets[i] <= 105
0 <= loss <= 99
Hint 1: What is the range that the answer must fall into?
Hint 2: The answer has to be in the range [0, max(buckets)] (inclusive).
Hint 3: For a number x, is there an efficient way to check if it is possible to make the amount of water in each bucket x.
Hint 4: Let in be the total amount of water that needs to be poured into buckets and out be the total amount of water that needs to be poured out of buckets to make the amount of water in each bucket x. If out - (out * loss) >= in, then it is possible.

```

## Solution

[SourceCode](./solution.js)

## English Translation

There are `n` buckets with `buckets[i]` liters each. You may pour any (real) amount from any bucket to another; every `k` liters poured loses `loss`% to spillage, so only `k * (1 - loss/100)` arrives. Make all buckets hold the same amount and return the maximum possible level. Error 1e-5 accepted.

Example 1:
Input: buckets = [1,2,7], loss = 80
Output: 2.00000

Example 2:
Input: buckets = [2,4,6], loss = 50
Output: 3.50000

Example 3:
Input: buckets = [3,3,3,3], loss = 40
Output: 3.00000

Constraints: 1 <= buckets.length <= 10^5, 0 <= buckets[i] <= 10^5, 0 <= loss <= 99.

## Approach

Binary search the target level `x` in [0, max(buckets)]. Feasibility: let `in = sum(max(0, x - b_i))` be the total that must arrive, and `out = sum(max(0, b_i - x))` the total poured. The arriving water is `out * (1 - loss/100)`, so `x` is feasible iff `out * (1 - loss/100) >= in`. About 100 iterations of an O(n) check gives 1e-9 precision.
