# [3785] Minimum Swaps to Avoid Forbidden Values

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-swaps-to-avoid-forbidden-values/description/)

* algorithms
* Hard (30.40%)
* Likes:    110
* Dislikes: 7
* Testcase Example:  '[1,2,3]\n[3,2,1]'

```md
You are given two integer arrays, nums and forbidden, each of length n.
You may perform the following operation any number of times (including zero):

Choose two distinct indices i and j, and swap nums[i] with nums[j].

Return the minimum number of swaps required such that, for every index i, the value of nums[i] is not equal to forbidden[i]. If no amount of swaps can ensure that every index avoids its forbidden value, return -1.

Example 1:

Input: nums = [1,2,3], forbidden = [3,2,1]
Output: 1
Explanation:
One optimal set of swaps:

Select indices i = 0 and j = 1 in nums and swap them, resulting in nums = [2, 1, 3].
After this swap, for every index i, nums[i] is not equal to forbidden[i].


Example 2:

Input: nums = [4,6,6,5], forbidden = [4,6,5,5]
Output: 2
Explanation:
One optimal set of swaps:

Select indices i = 0 and j = 2 in nums and swap them, resulting in nums = [6, 6, 4, 5].
Select indices i = 1 and j = 3 in nums and swap them, resulting in nums = [6, 5, 4, 6].
After these swaps, for every index i, nums[i] is not equal to forbidden[i].


Example 3:

Input: nums = [7,7], forbidden = [8,7]
Output: -1
Explanation:
It is not possible to make nums[i] different from forbidden[i] for all indices.
Example 4:

Input: nums = [1,2], forbidden = [2,1]
Output: 0
Explanation:
No swaps are required because nums[i] is already different from forbidden[i] for all indices, so the answer is 0.


Constraints:

1 <= n == nums.length == forbidden.length <= 105
1 <= nums[i], forbidden[i] <= 109


```

## 题目翻译

给定数组 nums 和 forbidden，长度均为 n。可任意交换 nums 中两个位置。求最少交换次数使得 nums[i] != forbidden[i] 对所有 i 成立。不可能返回 -1。

## 解题思路

**可行性检查 + 数学公式**

1. **可行性**：对每个值 v，需要 count_v(nums) + count_v(forbidden) <= n。若某值违反则返回 -1。

2. **最少交换**：设冲突位置数 k（nums[i]==forbidden[i]），冲突中同值最大频次 c_max。
   - 每次交换最多修复 2 个冲突，需要 ≥ ceil(k/2) 次交换
   - 同值冲突不能互相交换，需要 ≥ c_max 次交换
   - 答案 = max(ceil(k/2), c_max)

时间 O(n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
