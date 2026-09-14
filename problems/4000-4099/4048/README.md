# [4048] 统计等间距出现整数数目 I

## Description


```md
https://leetcode.cn/problems/count-values-with-equally-spaced-occurrences-i/description/
* algorithms
* Easy (75.83%)
* Dislikes: -
* Testcase Example:  '[1,8,1,5,1,5,8,5]'
给你一个整数数组 nums。
如果一个整数 x 满足以下条件，则被称为 特别 的：
x 在 nums 中 恰好出现三次。
x 的 所有 三次出现，在 nums 中都是 等间隔 的。换句话说，如果 x 的所有出现位置的下标为 i1 < i2 < i3，那么 i2 - i1 = i3 - i2。
返回 nums 中 不同 特别整数的数量。

示例 1:
输入: nums = [1,8,1,5,1,5,8,5]
输出: 2
解释:
1 是特别的，因为它恰好出现三次，且出现的等间隔下标为 0、2 和 4。
5 是特别的，因为它恰好出现三次，且出现的等间隔下标为 3、5 和 7。
8 不是特别的，因为它只出现了两次。
因此，答案是 2。
示例 2:
输入: nums = [8,8,8,8]
输出: 0
解释:
8 不是特别的，因为它出现的次数不是恰好三次。因此，答案是 0。
示例 3:
输入: nums = [8,6,6,8,8]
输出: 0
解释:
8 出现的下标为 0、3 和 4，这些下标不是等间隔的。6 只出现了两次。因此，没有整数是特别的。

提示:
3 <= nums.length <= 100
1 <= nums[i] <= 100
Hint 1: 1a (Brute Force). Count each value's occurrences, then enumerate all triples of indices i < j < k. Count a triple if nums[i] == nums[j] == nums[k], j - i == k - j, and the value appears exactly three times in the array.
Hint 2: 2a (Grouping Indices). Group occurrence indices by value. Count the groups containing exactly three indices whose two consecutive gaps are equal.

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译 (English Translation)

You are given an integer array `nums`.

An integer `x` is called **special** if:
- `x` appears in `nums` **exactly three times**, and
- all three occurrences are **equally spaced**. In other words, if its positions are `i1 < i2 < i3`, then `i2 - i1 == i3 - i2`.

Return the number of **distinct** special integers in `nums`.

**Example 1:** `nums = [1,8,1,5,1,5,8,5]` → `2` (1 at indices 0,2,4; 5 at indices 3,5,7)
**Example 2:** `nums = [8,8,8,8]` → `0` (appears four times)
**Example 3:** `nums = [8,6,6,8,8]` → `0`

**Constraints:** `3 <= nums.length <= 100`, `1 <= nums[i] <= 100`

## Approach (解题思路)

**按值分组下标，O(n)**

用哈希表把每个值的出现下标分组；对每组检查：长度恰好为 3 且 `idx[1]-idx[0] === idx[2]-idx[1]`，满足则计数 +1。

**时间复杂度：** O(n)
**空间复杂度：** O(n)
