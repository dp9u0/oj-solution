# [LCR 004] 只出现一次的数字 II

## Description


```md
https://leetcode.cn/problems/WGki4K/description/
* algorithms
* Medium (70.96%)
* Likes:    165
* Dislikes: -
* Testcase Example:  '[2,2,3,2]'
给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

示例 1：
输入：nums = [2,2,3,2]
输出：3
示例 2：
输入：nums = [0,1,0,1,0,1,100]
输出：100

提示：
1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
nums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次

进阶：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

注意：本题与主站 137 题相同：https://leetcode.cn/problems/single-number-ii/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an integer array `nums` where every element appears **three times** except for one, which appears **exactly once**. Find the single element and return it.

**Example 1:**
> Input: `nums = [2,2,3,2]`
> Output: `3`

**Example 2:**
> Input: `nums = [0,1,0,1,0,1,100]`
> Output: `100`

**Constraints:**
- `1 <= nums.length <= 3 * 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`
- Every element appears three times except for one which appears once.

**Follow-up:** Your algorithm should run in linear time. Can you do it without using extra space?

Note: This problem is the same as LeetCode 137 on the main site.

---

## Approach

Since every element except one appears **3 times**, consider each bit position independently:

- For each of the 32 bit positions, count how many numbers have that bit set.
- Every value appearing 3 times contributes its bits in multiples of 3, so `count % 3` leaves exactly the bits belonging to the single number.
- Set those bits into the result.

For bit 31 (the sign bit in two's complement), a set bit contributes `-2^31` (i.e. `1 << 31` in JS), which naturally handles negative results.

Complexity: `O(32n) = O(n)` time, `O(1)` extra space.
