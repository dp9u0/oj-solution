# [2524] 子数组的最大频率分数

## Description


```md
https://leetcode.cn/problems/maximum-frequency-score-of-a-subarray/description/
* algorithms
* Hard (43.80%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '[1,1,1,2,1,2]\n3'
给定一个整数数组 nums 和一个 正 整数 k 。
数组的 频率得分 是数组中 不同 值的 幂次 之和，并将和对 109 + 7 取模。
例如，数组 [5,4,5,7,4,4] 的频率得分为 (43 + 52 + 71) modulo (109 + 7) = 96 。
返回 nums 中长度为 k 的 子数组 的 最大 频率得分。你需要返回取模后的最大值，而不是实际值。
子数组 是一个数组的连续部分。

示例 1 ：
输入：nums = [1,1,1,2,1,2], k = 3
输出：5
解释：子数组 [2,1,2] 的频率分数等于 5。可以证明这是我们可以获得的最大频率分数。
示例 2 ：
输入：nums = [1,1,1,1,1,1], k = 4
输出：1
解释：所有长度为 4 的子数组的频率得分都等于 1。

提示：
1 <= k <= nums.length <= 105
1 <= nums[i] <= 106
Hint 1: Calculate the frequency score of each subarray of size k and return the maximum one.
Hint 2: Use the sliding window technique to keep the frequency scores.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Score of an array = sum over DISTINCT values v of v^(count of v), mod 1e9+7. Return the maximum score over all length-k subarrays.

Example 1:
Input: nums = [1,1,1,2,1,2], k = 3
Output: 5

Example 2:
Input: nums = [1,1,1,1,1,1], k = 4
Output: 1

Constraints: 1 <= k <= nums.length <= 10^5, 1 <= nums[i] <= 10^6.

## Approach

Sliding window maintaining total = sum of v^(cnt_v) over present values, plus per-value cached power v^(cnt_v). Entering element x: if cnt was 0, add x^1; else replace x^c with x^(c+1) (multiply cache by x). Leaving: symmetric with modular inverse (x^(p-2)). Cache multiplications use BigInt — base^2 and power*inverse products near 1e9^2 exceed the 2^53 safe-integer range (enter's cache*x stays under 1e15 and is safe). O(n log p).
