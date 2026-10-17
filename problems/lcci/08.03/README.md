# [面试题 08.03] 魔术索引

## Description


```md
https://leetcode.cn/problems/magic-index-lcci/description/
* lcci
* Easy (67.25%)
* Likes:    136
* Dislikes: -
* Testcase Example:  '[0, 2, 3, 4, 5]'
魔术索引。 在数组A[0...n-1]中，有所谓的魔术索引，满足条件A[i] = i。给定一个有序整数数组，编写一种方法找出魔术索引，若有的话，在数组A中找出一个魔术索引，如果没有，则返回-1。若有多个魔术索引，返回索引值最小的一个。
示例 1：
输入：nums = [0, 2, 3, 4, 5]
输出：0
说明：0下标的元素为0
示例 2：
输入：nums = [1, 1, 1]
输出：1
说明：
nums长度在[1, 1000000]之间
此题为原书中的 Follow-up，即数组中可能包含重复元素的版本

```

## Description (English)

Magic index. In array A[0...n-1], a magic index satisfies A[i] = i. Given a sorted integer array (which may contain duplicates), find a magic index if it exists, returning the smallest such index, otherwise -1.

Example 1:
Input: nums = [0, 2, 3, 4, 5]
Output: 0

Example 2:
Input: nums = [1, 1, 1]
Output: 1

Notes: length in [1, 1000000] (the follow-up variant with duplicates).

## 思路

跳跃剪枝 O(n) 最坏、单次扫描：`nums[i] === i` 即答案（从左到右首个即最小）；否则若 `nums[i] > i`，区间 `(i, nums[i])` 内任意 k 满足 `nums[k] ≥ nums[i] > k`（有序性）必非魔术，可直接跳到 `nums[i]`；`nums[i] < i` 只能逐步 +1。迭代实现天然规避 1e6 深度。

## Solution

[SourceCode](./solution.js)
