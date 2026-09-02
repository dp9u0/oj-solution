# [LCR 011] 连续数组

## Description


```md
https://leetcode.cn/problems/A1NYOS/description/
* algorithms
* Medium (54.48%)
* Likes:    161
* Dislikes: -
* Testcase Example:  '[0,1]'
给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。

示例 1：
输入: nums = [0,1]
输出: 2
解释: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
示例 2：
输入: nums = [0,1,0]
输出: 2
解释: [0, 1] (或 [1, 0]) 是具有相同数量 0 和 1 的最长连续子数组。

提示：
1 <= nums.length <= 105
nums[i] 不是 0 就是 1

注意：本题与主站 525 题相同： https://leetcode.cn/problems/contiguous-array/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given a binary array `nums`, find the length of the **longest contiguous subarray** containing an equal number of `0`s and `1`s.

**Example 1:** `[0,1]` → `2`
**Example 2:** `[0,1,0]` → `2` (`[0,1]` or `[1,0]`)

**Constraints:** `1 <= nums.length <= 10^5`, elements are 0 or 1.

Note: same as LeetCode 525.

---

## Approach

Map `0 -> -1` and `1 -> +1`. A subarray has equal 0s/1s iff its sum is 0, i.e. prefix sums at its two ends are equal.

- Track the running prefix sum; store the **first** index where each prefix sum appeared.
- For each current prefix sum `pre` at index `i`, if `pre` was seen before at index `j`, then `nums[j+1..i]` is a valid subarray of length `i - j`. Update the max.
- Initialize map `{0: -1}` (prefix sum 0 before the array starts).

Complexity: `O(n)` time, `O(n)` space.
