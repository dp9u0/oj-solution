# [4119] 有效整数中最少置位数目

## Description


```md
https://leetcode.cn/problems/minimum-set-bits-in-a-valid-integer/description/
* algorithms
* Hard (58.14%)
* Dislikes: -
* Testcase Example:  '[6,7,3]\n2'
给你一个长度为 n 的整数数组 nums 和一个整数 k。
令 x1, x2, ..., xn-k+1 按从左到右的顺序，依次表示 nums 中每个长度为 k 的 子数组 的 按位与 结果。
如果对于每个 1 <= i <= n - k + 1，都有 (y & xi) != 0，则称正整数 y 是 有效的。
返回所有 有效 整数 y 中 置位 数量的 最小值。如果不存在有效的整数，返回 -1。
置位 是指一个数的二进制表示中值为 1 的位。
子数组 是数组中连续的 非空 元素序列。

示例 1：
输入： nums = [6,7,3], k = 2
输出： 1
解释：
长度为 k = 2 的两个子数组为 [6, 7] 和 [7, 3]。
它们的按位与结果为 x1 = 6 & 7 = 6 和 x2 = 7 & 3 = 3。
y = 2 是有效的，因为 2 & 6 = 2 且 2 & 3 = 2，均不为零。
y = 2 有 1 个置位（"010"），因此答案为 1。
示例 2：
输入： nums = [3,5,12], k = 1
输出： 2
解释：
由于 k = 1，每个子数组只有一个元素，因此 x1 = 3，x2 = 5，x3 = 12。
y = 9 是有效的，因为 9 & 3 = 1，9 & 5 = 1，且 9 & 12 = 8，均不为零。
y = 9 有 2 个置位（"1001"），因此答案为 2。
示例 3：
输入： nums = [2,1], k = 2
输出： -1
解释：
长度为 k = 2 的唯一子数组为 [2, 1]，其按位与结果为 x1 = 2 & 1 = 0。
由于 x1 = 0，不存在有效的 y。因此，答案为 -1。

提示：
1 <= n == nums.length <= 105
1 <= k <= n
0 <= nums[i] <= 105
Hint 1: Only 17 bit positions matter. Compute every length-k subarray AND using a sliding window that counts the occurrences of each bit.
Hint 2: If any window AND is zero, no valid integer exists. Otherwise, the selected bits must intersect every window AND.
Hint 3: Let FULL = (1 << 17) - 1. A candidate y fails exactly when some window AND is a submask of FULL ^ y.
Hint 4: Initialize bad[mask] for masks that occur as window ANDs. Use subset DP to determine, for every mask, whether any of its submasks occurs.
Hint 5: Among masks y with bad[FULL ^ y] equal to false, minimize the number of set bits. The total time is O(17 * n + 17 * 2^17).

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): y is valid iff y & (AND of every length-k window) != 0. Minimize popcount(y), or -1.

Approach: sliding window with per-bit counts gives each window AND mask (bit set iff count == k); 17 bits since nums[i] <= 1e5. Collect distinct masks into bad[]; if 0 is bad -> -1. SOS subset DP: sub[mask] = true if some bad mask is a submask of mask. Valid y iff sub[FULL ^ y] is false; answer = min popcount over valid y. O(17n + 17*2^17).
