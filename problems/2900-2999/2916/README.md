# [2916] 子数组不同元素数目的平方和 II

## Description


```md
https://leetcode.cn/problems/subarrays-distinct-element-sum-of-squares-ii/description/
* algorithms
* Hard (41.24%)
* Likes:    23
* Dislikes: -
* Testcase Example:  '[1,2,1]'
给你一个下标从 0 开始的整数数组 nums 。
定义 nums 一个子数组的 不同计数 值如下：
令 nums[i..j] 表示 nums 中所有下标在 i 到 j 范围内的元素构成的子数组（满足 0 <= i <= j < nums.length ），那么我们称子数组 nums[i..j] 中不同值的数目为 nums[i..j] 的不同计数。
请你返回 nums 中所有子数组的 不同计数 的 平方 和。
由于答案可能会很大，请你将它对 109 + 7 取余 后返回。
子数组指的是一个数组里面一段连续 非空 的元素序列。

示例 1：
输入：nums = [1,2,1]
输出：15
解释：六个子数组分别为：
[1]: 1 个互不相同的元素。
[2]: 1 个互不相同的元素。
[1]: 1 个互不相同的元素。
[1,2]: 2 个互不相同的元素。
[2,1]: 2 个互不相同的元素。
[1,2,1]: 2 个互不相同的元素。
所有不同计数的平方和为 12 + 12 + 12 + 22 + 22 + 22 = 15 。
示例 2：
输入：nums = [2,2]
输出：3
解释：三个子数组分别为：
[2]: 1 个互不相同的元素。
[2]: 1 个互不相同的元素。
[2,2]: 1 个互不相同的元素。
所有不同计数的平方和为 12 + 12 + 12 = 3 。

提示：
1 <= nums.length <= 105
1 <= nums[i] <= 105
Hint 1: Consider the sum of the count of distinct values of subarrays ending with index i, let’s call it sum. Now if you need the sum of all subarrays ending with index i + 1 think how it can be related to sum and what extra will be needed to add to this.
Hint 2: You can find that extra sum using the segment tree.

```

## Description (English)

You are given a 0-indexed integer array `nums`.

Define the **distinct count** of a subarray of `nums` as follows:

Let `nums[i..j]` denote the subarray consisting of all elements of `nums` at indices in the range `i` to `j` (with `0 <= i <= j < nums.length`). Then the **distinct count** of `nums[i..j]` is the number of distinct values in `nums[i..j]`.

Return the sum of the **squares of the distinct counts** of all subarrays of `nums`.

Since the answer may be very large, return it modulo `10^9 + 7`.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,2,1]
Output: 15
Explanation: The six subarrays are:
[1] with 1 distinct element, [2] with 1, [1] with 1, [1,2] with 2, [2,1] with 2, [1,2,1] with 2.
So the sum of squares of distinct counts is 1^2 + 1^2 + 1^2 + 2^2 + 2^2 + 2^2 = 15.

Example 2:
Input: nums = [2,2]
Output: 3
Explanation: The three subarrays all have 1 distinct element, so the answer is 3.

Constraints:
- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^5

## Approach

**Core idea: enumerate right endpoints + segment tree with range-add / range-sum (maintaining sum and sum of squares).**

Let `d(l, i)` be the distinct count of subarray `nums[l..i]`. The answer is `Σ_i Σ_l d(l, i)^2`, i.e., for every right endpoint `i` we need `Σ_l d(l, i)^2`.

**Transition when the right endpoint moves from `i-1` to `i`** (with `v = nums[i]` and `last[v]` the previous occurrence of `v`):

- If `l > last[v]`: value `v` does not appear in `nums[l..i-1]`, so `d(l, i) = d(l, i-1) + 1`.
- If `l <= last[v]`: `v` already appears (at index `last[v]`), so `d(l, i) = d(l, i-1)`.

So each step is a **range add of +1 on left endpoints `[last[v] + 1, i]`**.

Maintain a segment tree indexed by left endpoint `l`, storing `sum = Σ d(l)` and `sumsq = Σ d(l)^2` over ranges. When +1 is applied to a segment of length `len` whose current sum is `s`:

- `sumsq += (2s + len)` (each element `d` becomes `d+1`, contributing `2d + 1`)
- `sum += len`

Both are handled by a lazy "add" tag: applying an add of `a` to a node gives
`sumsq += 2*a*sum + a^2*len`, `sum += a*len`, `lazy += a`.
All values stay well within the exact-integer range of JS numbers (max term ≈ 10^15), so no BigInt is needed.

**Per step `i`:** do the range add, then query `sumsq` over `[0, i]` and add it to the answer. `last[v]` is then updated to `i`.

Total complexity: `O(n log n)` time, `O(n)` space.

Verification on the samples:
- `[1,2,1]`: contributions per `i` are `1^2=1`, `(2^2+1^2)=5`, `(2^2+2^2+1^2)=9`; total `15`. ✓
- `[2,2]`: `1`, `(1^2+1^2)=2`; total `3`. ✓

## Solution

[SourceCode](./solution.js)
