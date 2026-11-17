# [4101] 找到所有数组中消失的数字 III

## Description


```md
https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array-iii/description/
* algorithms
* Medium (74.51%)
* Dislikes: -
* Testcase Example:  '[3,9,7]\n1\n12'
给定一个整数数组 nums 和两个整数 lower 和 upper。
如果一个整数位于闭区间 [lower, upper] 内，且没有出现在 nums 中，则称该整数为 缺失整数。
返回一个二维整数数组，表示所有缺失整数按 连续区间 分组后的结果。每个区间表示为 [start, end]，包含两个端点，并按照 start 递增的顺序返回所有区间。
连续的缺失整数必须属于同一个区间。如果没有缺失整数，则返回一个空数组。

示例 1：
输入： nums = [3,9,7], lower = 1, upper = 12
输出： [[1,2],[4,6],[8,8],[10,12]]
解释：
缺失整数为 [1, 2, 4, 5, 6, 8, 10, 11, 12]。
将这些缺失整数分组成最少数量的连续区间，得到 [1, 2]、[4, 6]、[8, 8] 和 [10, 12]。
因此，答案为 [[1, 2], [4, 6], [8, 8], [10, 12]]。
示例 2：
输入： nums = [1,1,1000000000], lower = 5, upper = 1000000000
输出： [[5,999999999]]
解释：
整数 1 位于 [lower, upper] 范围之外，因此不会影响该区间内的缺失整数。
在指定范围内，唯一出现在 nums 中的整数是 1000000000。
从 5 到 999999999 的所有整数均缺失，且它们是连续的，因此构成一个区间 [5, 999999999]。
示例 3：
输入： nums = [2,3,5], lower = 2, upper = 3
输出： []
解释：
整数 2 和 3 都出现在 nums 中，因此不存在缺失整数。
所以，答案为 []。

提示：
1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= lower <= upper <= 109
Hint 1: Sort nums so you can find gaps between present values without checking every integer in [lower, upper].
Hint 2: Keep a cursor cur starting at lower. Skip values below cur and stop at values above upper. For each remaining value x, record [cur, x - 1] if cur < x, then set cur = x + 1. After the scan, record [cur, upper] if cur <= upper.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an integer array `nums` (unsorted, may contain duplicates and values outside the range) and integers `lower`, `upper`, group all integers in `[lower, upper]` not present in `nums` into minimal contiguous intervals `[start, end]`, sorted by start.

**Example 1:**
nums = [3,9,7], lower = 1, upper = 12 → [[1,2],[4,6],[8,8],[10,12]]

**Constraints:**
- 1 <= nums.length <= 10^5, 1 <= nums[i] <= 10^9
- 1 <= lower <= upper <= 10^9

## Approach

排序 + 游标:游标 `cur` 从 lower 起,跳过小于 cur 或大于 upper 的值;对界内值 x,`cur < x` 时输出 `[cur, x-1]` 并把 cur 推到 x+1。扫描结束若 `cur <= upper` 输出尾部区间。

时间 O(n log n),空间 O(1)(不计输出)。
