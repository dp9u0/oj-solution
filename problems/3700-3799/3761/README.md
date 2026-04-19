# [3761] Minimum Absolute Distance Between Mirror Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-absolute-distance-between-mirror-pairs/description/)

* algorithms
* Medium (44.42%)
* Likes:    78
* Dislikes: 4
* Testcase Example:  '[12,21,45,33,54]'

```md
You are given an integer array nums.
A mirror pair is a pair of indices (i, j) such that:

0 <= i < j < nums.length, and
reverse(nums[i]) == nums[j], where reverse(x) denotes the integer formed by reversing the digits of x. Leading zeros are omitted after reversing, for example reverse(120) = 21.

Return the minimum absolute distance between the indices of any mirror pair. The absolute distance between indices i and j is abs(i - j).
If no mirror pair exists, return -1.

Example 1:

Input: nums = [12,21,45,33,54]
Output: 1
Explanation:
The mirror pairs are:

(0, 1) since reverse(nums[0]) = reverse(12) = 21 = nums[1], giving an absolute distance abs(0 - 1) = 1.
(2, 4) since reverse(nums[2]) = reverse(45) = 54 = nums[4], giving an absolute distance abs(2 - 4) = 2.

The minimum absolute distance among all pairs is 1.

Example 2:

Input: nums = [120,21]
Output: 1
Explanation:
There is only one mirror pair (0, 1) since reverse(nums[0]) = reverse(120) = 21 = nums[1].
The minimum absolute distance is 1.

Example 3:

Input: nums = [21,120]
Output: -1
Explanation:
There are no mirror pairs in the array.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109​​​​​​​


```

## 题目翻译

给定整数数组 nums。"镜像对"是满足 reverse(nums[i]) == nums[j] 的索引对 (i, j)（i < j）。reverse(x) 表示翻转 x 的数字并去掉前导零。求所有镜像对中 |i-j| 的最小值，不存在则返回 -1。

## 解题思路

**哈希表记录最近出现位置**

遍历数组，对每个 nums[j]，计算 reverse(nums[j])，在哈希表中查找该反转值最近出现的索引 i（i < j），更新最小距离。然后将 nums[j] 本身存入哈希表。

关键：只需记录每个值最近一次出现的索引，因为距离随索引差单调递增。

时间复杂度 O(n × d)，d 为数字位数。

## Solution

[SourceCode](./solution.js)
