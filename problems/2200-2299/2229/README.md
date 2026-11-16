# [2229] 检查数组是否连贯

## Description


```md
https://leetcode.cn/problems/check-if-an-array-is-consecutive/description/
* algorithms
* Easy (63.54%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[1,3,4,2]'
给你一个整数数组 nums ，如果 nums 是一个 连贯数组 ，则返回 true ，否则返回 false 。
如果数组包含 [x, x + n - 1] 范围内的所有数字（包括 x 和 x + n - 1 ），则该数组为连贯数组；其中 x 是数组中最小的数，n 是数组的长度。

示例 1：
输入：nums = [1,3,4,2]
输出：true
解释：
最小值是 1 ，数组长度为 4 。
范围 [x, x + n - 1] 中的所有值都出现在 nums 中：[1, 1 + 4 - 1] = [1, 4] = (1, 2, 3, 4) 。
因此，nums 是一个连贯数组。
示例 2：
输入：nums = [1,3]
输出：false
解释：
最小值是 1 ，数组长度为 2 。
范围 [x, x + n - 1] 中的所有值没有都出现在 nums 中：[1, 1 + 2 - 1] = [1, 2] = (1, 2) 。
因此，nums 不是一个连贯数组。
示例 3：
输入：nums = [3,5,4]
输出：true
解释：
最小值是 3 ，数组长度为 3 。
范围 [x, x + n - 1] 中的所有值都出现在 nums 中：[3, 3 + 3 - 1] = [3, 5] = (3，4，5) 。
因此，nums 是一个连贯数组。

提示：
1 <= nums.length <= 105
0 <= nums[i] <= 105
Hint 1: Try sorting nums.
Hint 2: If nums is consecutive and sorted in ascending order, then nums[i] + 1 = nums[i + 1] for every i in the range 0 ≤ i < nums.length - 1.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given an integer array `nums`. Return `true` if `nums` is a consecutive array: it contains every number in the range `[x, x + n - 1]` (inclusive), where `x` is the minimum of the array and `n` is its length. Otherwise return `false`.

**Constraints:**
- 1 <= nums.length <= 10^5
- 0 <= nums[i] <= 10^5

## Approach

不用排序:数组恰好覆盖 `[min, min+n-1]` 当且仅当 ① 所有值互不相同(Set 大小 = n)且 ② `max - min == n - 1`。两者缺一不可。

时间 O(n),空间 O(n)。
