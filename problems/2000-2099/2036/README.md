# [2036] 最大交替子数组和

## Description


```md
https://leetcode.cn/problems/maximum-alternating-subarray-sum/description/
* algorithms
* Medium (40.40%)
* Likes:    12
* Dislikes: -
* Testcase Example:  '[3,-1,1,2]'
子数组是以0下标开始的数组的连续非空子序列，从 i 到 j（0 <= i <= j < nums.length）的 子数组交替和 被定义为 nums[i] - nums[i+1] + nums[i+2] - ... +/- nums[j] 。
给定一个以0下标开始的整数数组nums，返回它所有可能的交替子数组和的最大值。

示例 1：
输入：nums = [3,-1,1,2]
输出：5
解释：
子数组 [3,-1,1]有最大的交替子数组和3 - (-1) + 1 = 5.
示例 2：
输入：nums = [2,2,2,2,2]
输出：2
解释：
子数组 [2], [2,2,2]和 [2,2,2,2,2]有相同的最大交替子数组和为2
[2]: 2.
[2,2,2]: 2 - 2 + 2 = 2.
[2,2,2,2,2]: 2 - 2 + 2 - 2 + 2 = 2.
示例 3：
输入：nums = [1]
输出：1
解释：
仅有一个非空子数组，为 [1]，它的交替子数组和为 1

提示：
1 <= nums.length <= 105
-105 <= nums[i] <= 105
Hint 1: How can Kadane's Algorithm help us?
Hint 2: If you convert all the numbers at odd indices to the negative version of that number, the problem simplifies to finding the maximum subarray sum.
Hint 3: However, this strategy needs you to start each subarray at an even index.
Hint 4: Do the same except converting all the numbers at even indices to the negative version of that number.

```

## Solution

[SourceCode](./solution.js)

## English Translation

The alternating sum of a subarray `nums[i..j]` is `nums[i] - nums[i+1] + nums[i+2] - ... ± nums[j]` (starting with +). Return the maximum alternating subarray sum over all non-empty subarrays.

Example 1:
Input: nums = [3,-1,1,2]
Output: 5 ([3,-1,1] -> 3-(-1)+1)

Example 2:
Input: nums = [2,2,2,2,2]
Output: 2

Example 3:
Input: nums = [1]
Output: 1

Constraints: 1 <= nums.length <= 10^5, -10^5 <= nums[i] <= 10^5.

## Approach

Kadane with two states per position j:
- `even[j]` — best alternating sum of a subarray ending at j where nums[j] carries a `+` sign: `max(odd[j-1] + nums[j], nums[j])` (may start a fresh subarray at j);
- `odd[j]` — best sum ending at j where nums[j] carries a `-` sign: `even[j-1] - nums[j]` (must extend; a one-element subarray cannot have a minus sign).

Answer is the max over all `even[j]` and `odd[j]`. Time O(n), space O(1).
