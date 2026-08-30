# [3940] Limit Occurrences in Sorted Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/limit-occurrences-in-sorted-array/description/)

* algorithms
* Easy (73.45%)
* Likes:    43
* Dislikes: -
* Testcase Example:  '[1,1,1,2,2,3]\n2'

```md
You are given a sorted integer array nums and an integer k.
Return an array such that each distinct element appears at most k times, while preserving the relative order of the elements in nums.
Note: If a distinct element appears at least k times, then it must appear exactly k times in the resulting array.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,1,2,2,3]
Explanation:
Each element can appear at most 2 times.

The element 1 appears 3 times, so only 2 occurrences are kept.
The element 2 appears 2 times, so both occurrences are kept.
The element 3 appears 1 time, so it is kept.

Thus, the resulting array is [1, 1, 2, 2, 3].

Example 2:

Input: nums = [1,2,3], k = 1
Output: [1,2,3]
Explanation:
All elements are distinct and already appear at most once, so the array remains unchanged.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
nums is sorted in non-decreasing order.
1 <= k <= nums.length


Follow-up:

Can you solve this in-place using O(1) extra space?
Note that the space used for returning or resizing the result does not count toward the space complexity mentioned above, as some languages do not support in-place resizing.

Hint 1: Go through the array, maintaining a counter of the number of occurrences of the largest integer so far.
Hint 2: If the counter is currently more than k, ignore the current element.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给你一个已排序的整数数组 `nums` 和一个整数 `k`。

返回一个新数组，使得每个不同的元素最多出现 `k` 次，同时保持 `nums` 中元素的相对顺序。

注意：如果某个不同元素出现次数至少为 `k` 次，那么它在结果数组中必须恰好出现 `k` 次。

示例 1：

输入：nums = [1,1,1,2,2,3], k = 2
输出：[1,1,2,2,3]
解释：每个元素最多出现 2 次。元素 1 出现 3 次，只保留 2 次；元素 2 出现 2 次，全部保留；元素 3 出现 1 次，保留。

示例 2：

输入：nums = [1,2,3], k = 1
输出：[1,2,3]
解释：所有元素互不相同，本来就最多出现 1 次，数组保持不变。

约束：
- 1 <= nums.length <= 100
- 1 <= nums[i] <= 100
- nums 按非递减顺序排序
- 1 <= k <= nums.length

进阶：能否使用 O(1) 额外空间原地解决？（返回结果所占空间不计入空间复杂度）

## 解题思路

由于数组已排序，相等的元素必然相邻。因此只需一次遍历：

1. 维护结果数组 `res` 和当前元素已保留的计数 `count`。
2. 遍历 `nums`：
   - 若当前元素与 `res` 末尾元素不同，说明进入新的元素段，重置 `count = 1` 并加入结果。
   - 若相同且 `count < k`，则 `count++` 并加入结果。
   - 若相同且 `count >= k`，跳过该元素。
3. 返回 `res`。

时间复杂度 O(n)，额外空间复杂度 O(1)（不含返回结果）。
