# [453] 最小操作次数使数组元素相等

## Description


```md
https://leetcode.cn/problems/minimum-moves-to-equal-array-elements/description/
* algorithms
* Medium (61.68%)
* Likes:    616
* Dislikes: -
* Testcase Example:  '[1,2,3]'
给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。

示例 1：
输入：nums = [1,2,3]
输出：3
解释：
只需要3次操作（注意每次操作会增加两个元素的值）：
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
示例 2：
输入：nums = [1,1,1]
输出：0

提示：
n == nums.length
1 <= nums.length <= 105
-109 <= nums[i] <= 109
答案保证符合 32-bit 整数

```

## Description (English)

Given an integer array `nums` of length `n`, in one operation you can add `1` to `n - 1` elements of the array. Return the minimum number of operations required to make all elements of the array equal.

Example 1:
Input: nums = [1,2,3]
Output: 3
Explanation: Only 3 operations are needed (note each operation adds 1 to two elements):
[1,2,3] => [2,3,3] => [3,4,3] => [4,4,4]

Example 2:
Input: nums = [1,1,1]
Output: 0

Constraints:
- n == nums.length
- 1 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9
- The answer is guaranteed to fit in a 32-bit integer.

## Approach

Key insight: adding 1 to the other `n - 1` elements is equivalent (in terms of relative differences) to subtracting 1 from the single element that was left out. So instead of raising everyone else, we can imagine lowering one element at a time — and the process ends when every element has been lowered to the initial minimum.

Therefore the answer is `sum(nums) - min(nums) * n`, i.e. `Σ(nums[i] - min)`.

Why this is optimal: relative differences can only shrink via "one element drops 1 relative to the rest", and each drop can close at most 1 of the total gap `Σ(nums[i] - min)` between non-minimum elements and the minimum; no operation changes any pairwise absolute difference except through such a decrement, so this count is both achievable and a lower bound.

Complexity: O(n) time, O(1) extra space.

## Solution

[SourceCode](./solution.js)
