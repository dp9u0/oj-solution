# [995] Minimum Number of K Consecutive Bit Flips

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/description/)

* algorithms
* Hard (62.43%)
* Likes:    2097
* Dislikes: 92
* Testcase Example:  '[0,1,0]\n1'

```md
You are given a binary array nums and an integer k.
A k-bit flip is choosing a subarray of length k from nums and simultaneously changing every 0 in the subarray to 1, and every 1 in the subarray to 0.
Return the minimum number of k-bit flips required so that there is no 0 in the array. If it is not possible, return -1.
A subarray is a contiguous part of an array.

Example 1:
Input: nums = [0,1,0], k = 1
Output: 2
Explanation: Flip nums[0], then flip nums[2].
Example 2:
Input: nums = [1,1,0], k = 2
Output: -1
Explanation: No matter how we flip subarrays of size 2, we cannot make the array become [1,1,1].
Example 3:
Input: nums = [0,0,0,1,0,1,1,0], k = 3
Output: 3
Explanation:
Flip nums[0],nums[1],nums[2]: nums becomes [1,1,1,1,0,1,1,0]
Flip nums[4],nums[5],nums[6]: nums becomes [1,1,1,1,1,0,0,0]
Flip nums[5],nums[6],nums[7]: nums becomes [1,1,1,1,1,1,1,1]

Constraints:
1
1

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给定一个二进制数组 `nums` 和一个整数 `k`。

**k 位翻转**是指从 `nums` 中选择一个长度为 `k` 的子数组，同时把子数组中的每个 0 变成 1，每个 1 变成 0。

返回使数组中不存在 0 所需的最少 k 位翻转次数。如果无法做到，返回 `-1`。

子数组是数组的连续部分。

示例 1：
输入：nums = [0,1,0], k = 1
输出：2
解释：翻转 nums[0]，然后翻转 nums[2]。

示例 2：
输入：nums = [1,1,0], k = 2
输出：-1
解释：无论怎样翻转大小为 2 的子数组，都无法使数组变成 [1,1,1]。

示例 3：
输入：nums = [0,0,0,1,0,1,1,0], k = 3
输出：3

## 解题思路

**贪心 + 滑动窗口（翻转次数奇偶性）**

1. **贪心策略**：从左到右扫描。当位置 `i` 当前为 0 时，必须执行一次以 `i` 为起点的翻转。原因：能覆盖位置 `i` 的窗口起点必然 ≤ `i`，而按从左到右的顺序处理时，起点 < `i` 的翻转已经全部确定，无法再补，所以唯一的选择就是在 `i` 处翻转。这保证了最小次数。

2. **如何知道位置 i 的"当前值"**：位置 `i` 的当前值 = 原始值异或上「覆盖它的翻转次数的奇偶性」。用一个计数器 `currentFlipCount` 维护以当前窗口（长度为 k 的滑窗内）发生的翻转次数：
   - 若 `i >= k`，先把滑窗左边界移出的翻转减掉：`currentFlipCount -= isFlipped[i - k]`。
   - 若 `(nums[i] + currentFlipCount) % 2 === 0`（当前为 0），则必须在 `i` 翻转：若 `i + k > n` 越界则返回 `-1`；否则标记 `isFlipped[i] = 1`（原地技巧：直接 `nums[i] += 2`，用 `>= 2` 表示在此处翻转过，`% 2` 仍是原值），`currentFlipCount++`，结果 `+1`。

3. **复杂度**：时间 O(n)，空间 O(1)（原地标记）。
