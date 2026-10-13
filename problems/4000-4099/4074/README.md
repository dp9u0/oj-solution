# [4074] 和为目标值的最大乘积对

## Description


```md
https://leetcode.cn/problems/maximum-product-pair-with-target-sum/description/
* algorithms
* Easy (55.48%)
* Dislikes: -
* Testcase Example:  '[1,2,3,4]\n5'
给你一个整数数组 nums 和一个整数 target。
当一个由 不同 下标组成的二元组 (i, j) 满足以下条件，称它是 有效的 ：
nums[i] + nums[j] == target
nums[i] > nums[j]
返回一个 有效的 二元组 [i, j]，使其 乘积 nums[i] * nums[j] 在所有有效二元组中是 最大 的。如果不存在有效的二元组，返回 [-1, -1]。
如果有多个有效二元组都能达到 最大 乘积，你可以返回其中的 任意一个 。

示例 1：
输入： nums = [1,2,3,4], target = 5
输出： [2,1]
解释：
存在 2 个有效的二元组：


序号
(i, j)
nums[i]
nums[j]
和
积




1
(3, 0)
4
1
5
4


2
(2, 1)
3
2
5
6


两个二元组的和均为 5 且满足 nums[i] > nums[j]。第二个二元组的乘积更大，3 * 2 = 6，因此答案是 [2, 1]。
示例 2：
输入： nums = [-3,-1,4,2], target = 1
输出： [3,1]
解释：
存在 2 个有效的二元组：


序号
(i, j)
nums[i]
nums[j]
和
积




1
(2, 0)
4
-3
1
-12


2
(3, 1)
2
-1
1
-2


由于 -2 > -12，因此选择下标 (3, 1) 对应的二元组，答案是 [3, 1]。
示例 3：
输入： nums = [3,3,5], target = 6
输出： [-1,-1]
解释：
不存在有效的二元组，因为 nums[0] 和 nums[1] 的和虽然为 6，但它们是相等的。

提示：
2 <= nums.length <= 100
-100 <= nums[i], target <= 100
Hint 1: 1a (Enumeration): Enumerate every pair of indices and check whether their values sum to target and are different..
Hint 2: 1b (Enumeration): Keep the valid pair with the largest product, even if that product is negative. Return the index of the larger value first.
Hint 3: 2a (Hash Map): Store an index for each value. For a value x, its required partner is target - x.
Hint 4: 2b (Hash Map): Ignore partners equal to x. Compare the products of the remaining matching pairs and return their indices in the required order.
Hint 5: 3a (Sorting and Two Pointers): Sort the values together with their original indices, then use two pointers to find pairs summing to target.
Hint 6: 3b (Sorting and Two Pointers): Among matching pairs with different values, keep the one with the largest product and return the original indices, with the larger value first

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译 (English Translation)

Given an integer array `nums` and an integer `target`, a pair of **distinct** indices `(i, j)` is **valid** if:
- `nums[i] + nums[j] == target`
- `nums[i] > nums[j]`

Return a valid pair `[i, j]` whose product `nums[i] * nums[j]` is **maximum** among all valid pairs. If no valid pair exists, return `[-1, -1]`. If multiple valid pairs achieve the maximum product, you may return **any** of them.

**Constraints:** `2 <= nums.length <= 100`, `-100 <= nums[i], target <= 100`

## Approach (解题思路)

**哈希表，O(n)**

- 建值 → 首个下标的 map（答案不唯一，任取下标即可）。
- 对每个出现的值 v，互补值 c = target - v；仅当 c **严格小于** v（保证 nums[i] > nums[j]，示例 3 中 3+3=6 但值相等被排除）且 c 出现过时，(v, c) 为候选，乘积 v*c。
- 取乘积最大的候选，返回 [v 的下标, c 的下标]；无候选返回 [-1, -1]。
- 注意乘积可能为负（示例 2 两个候选积均为负，取较大者 -2），照常比较即可。

**时间复杂度：** O(n)　**空间复杂度：** O(n)
