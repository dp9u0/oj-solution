# [3875] 构造奇偶一致的数组 I

## Description


```md
https://leetcode.cn/problems/construct-uniform-parity-array-i/description/
* algorithms
* Easy (81.72%)
* Likes:    7
* Dislikes: -
* Testcase Example:  '[2,3]'
给你一个长度为 n 的数组 nums1，其中包含 互不相同 的整数。
你需要构造另一个长度为 n 的数组 nums2，使得 nums2 中的元素要么全部为 奇数，要么全部为 偶数。
对于每个下标 i，你必须从以下两种选择中 任选其一（顺序不限）：
nums2[i] = nums1[i]
nums2[i] = nums1[i] - nums1[j]，其中 j != i
如果能够构造出满足条件的数组，则返回 true；否则，返回 false。

示例 1：
输入： nums1 = [2,3]
输出： true
解释：
选择 nums2[0] = nums1[0] - nums1[1] = 2 - 3 = -1。
选择 nums2[1] = nums1[1] = 3。
nums2 = [-1, 3]，两个元素均为奇数。因此答案为 true。
示例 2：
输入： nums1 = [4,6]
输出： true
解释：​​​​​​​
选择 nums2[0] = nums1[0] = 4。
选择 nums2[1] = nums1[1] = 6。
nums2 = [4, 6]，两个元素均为偶数。因此答案为 true。

提示：
1 <= n == nums1.length <= 100
1 <= nums1[i] <= 100
nums1 中的所有整数互不相同。
Hint 1: There is only one possible answer.

```

## English Description

You are given an array `nums1` of length `n` containing distinct integers.

You need to construct another array `nums2` of length `n` such that all elements in `nums2` are either all odd or all even.

For each index `i`, you must choose exactly one of the following (in any order):
- `nums2[i] = nums1[i]`
- `nums2[i] = nums1[i] - nums1[j]`, where `j != i`

Return `true` if such an array can be constructed; otherwise return `false`.

Example 1:
Input: nums1 = [2,3]
Output: true

Example 2:
Input: nums1 = [4,6]
Output: true

Constraints:
- 1 <= n == nums1.length <= 100
- 1 <= nums1[i] <= 100
- All integers in nums1 are distinct.

## Solution Approach

**Parity Analysis (Math)**

The answer is always `true`, regardless of the input.

Key observation:
1. If all elements of `nums1` already share the same parity, simply choose `nums2[i] = nums1[i]` for every index — `nums2` is uniform. → `true`.
2. If `nums1` mixes odd and even numbers, pick one odd element `a` and one even element `b`. For every index `i`, choose `nums2[i] = nums1[i] - nums1[j]` where `j` is the index of the chosen element of opposite parity:
   - `odd - even = odd`, and `even - odd = odd`.
   - So every `nums2[i]` becomes odd → `nums2` is uniform. → `true`.

Both cases yield `true`, so the function unconditionally returns `true`. (Verified exhaustively for all distinct subsets of {1..5} of size ≤ 4 — zero counterexamples.)

- Time: O(1)
- Space: O(1)

## Solution

[SourceCode](./solution.js)
