# [2557] 从一个范围内选择最多整数 II

## Description


```md
https://leetcode.cn/problems/maximum-number-of-integers-to-choose-from-a-range-ii/description/
* algorithms
* Medium (36.45%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[1,4,6]\n6\n4'
给你一个整数数组 banned 和两个整数 n 和 maxSum 。你需要按照以下规则选择一些整数：
被选择整数的范围是 [1, n] 。
每个整数 至多 选择 一次 。
被选择整数不能在数组 banned 中。
被选择整数的和不超过 maxSum 。
请你返回按照上述规则 最多 可以选择的整数数目。

示例 1：
输入：banned = [1,4,6], n = 6, maxSum = 4
输出：1
解释：你可以选择整数 3 。
3 在范围 [1, 6] 内，且不在 banned 中，所选整数的和为 3 ，也没有超过 maxSum 。
示例 2：
输入：banned = [4,3,5,6], n = 7, maxSum = 18
输出：3
解释：你可以选择整数 1, 2 和 7 。
它们都在范围 [1, 7] 中，且都没出现在 banned 中，所选整数的和为 10 ，没有超过 maxSum 。

提示：
1 <= banned.length <= 105
1 <= banned[i] <= n <= 109
1 <= maxSum <= 1015
Hint 1: It is optimal always to take the smallest possible integer you can choose.
Hint 2: Between every consecutive banned integers, can you find how many integers you can choose?
Hint 3: Think of using binary search to find that.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Choose integers from [1, n], each at most once, not in banned, total sum <= maxSum; maximize the count. n up to 1e9, maxSum up to 1e15.

Example 1:
Input: banned = [1,4,6], n = 6, maxSum = 4
Output: 1

Example 2:
Input: banned = [4,3,5,6], n = 7, maxSum = 18
Output: 3

Constraints: banned.length <= 10^5, 1 <= banned[i] <= n <= 10^9, 1 <= maxSum <= 10^15.

## Approach

Greedy smallest-first. Sort unique banned values; the choosable numbers form contiguous runs between them. For each run [lo, hi]: taking all t = hi - lo + 1 of them costs (lo + hi) * t / 2 - if affordable, take all; otherwise binary search the largest t with t * lo + t*(t-1)/2 <= remaining budget, take that many and stop (budget saturated). Numbers fit in doubles (< 2^53) exactly. O(m log m + m log n).
