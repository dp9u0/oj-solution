# [3912] Valid Elements in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-elements-in-an-array/description/)

* algorithms
* Easy (57.41%)
* Likes:    32
* Dislikes: 1
* Testcase Example:  '[1,2,4,2,3,2]'

```md
You are given an integer array nums.
An element nums[i] is considered valid if it satisfies at least one of the following conditions:

It is strictly greater than every element to its left.
It is strictly greater than every element to its right.

The first and last elements are always valid.
Return an array of all valid elements in the same order as they appear in nums.

Example 1:

Input: nums = [1,2,4,2,3,2]
Output: [1,2,4,3,2]
Explanation:

nums[0] and nums[5] are always valid.
nums[1] and nums[2] are strictly greater than every element to their left.
nums[4] is strictly greater than every element to its right.
Thus, the answer is [1, 2, 4, 3, 2].


Example 2:

Input: nums = [5,5,5,5]
Output: [5,5]
Explanation:

The first and last elements are always valid.
No other elements are strictly greater than all elements to their left or to their right.
Thus, the answer is [5, 5].


Example 3:

Input: nums = [1]
Output: [1]
Explanation:
Since there is only one element, it is always valid. Thus, the answer is [1].


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100


```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译

给定整数数组 nums。如果元素 nums[i] 满足以下至少一个条件，则认为它是有效元素：

- 它严格大于其左边所有元素；
- 它严格大于其右边所有元素。

第一个和最后一个元素总是有效的。按 nums 中出现的顺序返回所有有效元素。

示例 1：nums = [1,2,4,2,3,2] → 输出 [1,2,4,3,2]
示例 2：nums = [5,5,5,5] → 输出 [5,5]（中间的 5 都不严格大于左侧或右侧的全部元素）
示例 3：nums = [1] → 输出 [1]

## 解题思路

关键观察：「严格大于左边所有元素」等价于「严格大于左侧前缀最大值」；「严格大于右边所有元素」等价于「严格大于右侧后缀最大值」。首元素左侧为空、尾元素右侧为空，天然满足条件，无需特判。

做法（O(n) 时间，一次预处理 + 一次扫描）：

1. 预处理后缀最大值数组 suffixMax[i] = max(nums[i..n-1])，另设 suffixMax[n] = -Infinity 表示右侧为空。
2. 从左到右扫描，维护已见前缀最大值 leftMax（初始 -Infinity）。若 nums[i] > leftMax 或 nums[i] > suffixMax[i+1]，则该元素有效，加入结果。
3. 扫描过程中更新 leftMax。

注意严格比较：相等的元素不算有效（示例 2 中相等的 5 均无效），恰好由「> 严格大于最大值」保证。结果天然保持原顺序。

复杂度：时间 O(n)，空间 O(n)。
