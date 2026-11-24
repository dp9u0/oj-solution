# [3934] 最短唯一子数组

## Description


```md
https://leetcode.cn/problems/smallest-unique-subarray/description/
* algorithms
* Hard (55.01%)
* Likes:    7
* Dislikes: -
* Testcase Example:  '[3,3,3]'
给你一个整数数组 nums 。
找出 nums 中与其他任何 子数组 均 不 相同 的 子数组 的 最小 长度。
返回一个整数，表示此类 子数组 的 最小可能长度 。
子数组 是数组中的一个连续的非空元素序列。
如果两个 子数组 具有相同的长度，并且对应位置的元素也相同，则认为这两个 子数组 是相同的。

示例 1：
输入： nums = [3,3,3]
输出： 3
解释：
长度为 1 的子数组：[3] → 出现 3 次
长度为 2 的子数组：[3, 3] → 出现 2 次
长度为 3 的子数组：[3, 3, 3] → 出现 1 次
子数组 [3, 3, 3] 是唯一的，因此最小唯一子数组的长度为 3。
示例 2：
输入： nums = [2,1,2,3,3]
输出： 1
解释：
长度为 1 的子数组：
[2] → 出现 2 次
[1] → 出现 1 次
[3] → 出现 2 次
子数组 [1] 是唯一的，因此最小唯一子数组的长度为 1。
示例 3：
输入： nums = [1,1,2,2,1]
输出： 2
解释：
长度为 1 的子数组：
[1] → 出现 3 次
[2] → 出现 2 次
长度为 2 的子数组：
[1, 1] → 出现 1 次
[1, 2] → 出现 1 次
[2, 2] → 出现 1 次
[2, 1] → 出现 1 次
至少有一个长度为 2 的子数组是唯一的，因此最小唯一子数组的长度为 2。

提示：
1 <= nums.length <= 105
1 <= nums[i] <= 105
Hint 1: Think in terms of checking a fixed length len: count all subarrays of length len, and see whether any one appears exactly once.
Hint 2: Use rolling hash so each subarray can be represented in O(1) after preprocessing, instead of comparing arrays directly.
Hint 3: The answer can be binary searched because if there is a unique subarray of length len, then there is also a unique subarray of some length > len.
Hint 4: For each checked length, store frequencies of hashes in a hashmap. If any hash has frequency 1, that length works.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given an integer array `nums`.

Find the minimum length of a subarray of `nums` that is different from any other subarray. Return an integer denoting the minimum possible length of such a subarray.

A subarray is a contiguous non-empty sequence of elements within an array.

Two subarrays are considered the same if they have the same length and the elements at corresponding positions are equal.

Example 1: nums = [3,3,3] → Output: 3
- Length-1 subarrays: [3] → occurs 3 times
- Length-2 subarrays: [3,3] → occurs 2 times
- Length-3 subarrays: [3,3,3] → occurs 1 time (unique, so the answer is 3)

Example 2: nums = [2,1,2,3,3] → Output: 1 (subarray [1] occurs exactly once)

Example 3: nums = [1,1,2,2,1] → Output: 2 (every length-1 subarray repeats; e.g. [1,1] occurs exactly once)

Constraints: 1 <= nums.length <= 10^5, 1 <= nums[i] <= 10^5

## Approach

**Binary search on the answer + rolling hash counting.**

For a fixed length `len`, define f(len) = true iff at least one subarray of length `len` occurs exactly once in `nums`.

Monotonicity: if some length-`len` subarray `s` starting at `i` is unique, then a length-`len+1` unique subarray also exists. Any occurrence of the extension `s + [nums[i+len]]` must start at a position where `s` occurs (its prefix equals `s`), which is only `i`; likewise `s` can be extended left when it touches the right end. The only non-extendable case is `len = n`, where the whole array is trivially unique. Hence f is false, false, ..., false, true, ..., true over `len ∈ [1, n]`, and binary search finds the minimal true length.

check(len): preprocess prefix polynomial hashes (two independent base/mod pairs to make collisions negligible), then each subarray hash is computed in O(1) by the rolling formula. Count frequencies in a hash map; return true if any hash has frequency 1. Note a collision can only merge counts, so it can never report a false positive.

Complexity: O(n log n) time, O(n) space.
