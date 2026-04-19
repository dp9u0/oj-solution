# [3346] Maximum Frequency of an Element After Performing Operations I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/description/)

* algorithms
* Medium (40.08%)
* Likes:    631
* Dislikes: 108
* Testcase Example:  '[1,4,5]\n1\n2'

```md
You are given an integer array nums and two integers k and numOperations.
You must perform an operation numOperations times on nums, where in each operation you:

Select an index i that was not selected in any previous operations.
Add an integer in the range [-k, k] to nums[i].

Return the maximum possible frequency of any element in nums after performing the operations.

Example 1:

Input: nums = [1,4,5], k = 1, numOperations = 2
Output: 2
Explanation:
We can achieve a maximum frequency of two by:

Adding 0 to nums[1]. nums becomes [1, 4, 5].
Adding -1 to nums[2]. nums becomes [1, 4, 4].


Example 2:

Input: nums = [5,11,20,20], k = 5, numOperations = 1
Output: 2
Explanation:
We can achieve a maximum frequency of two by:

Adding 0 to nums[1].



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
0 <= k <= 105
0 <= numOperations <= nums.length


```

## 中文翻译

给定数组 nums，每次操作选一个未选过的下标 i，给 nums[i] 加上 [-k, k] 范围内的整数。执行 numOperations 次操作后，求数组中任意元素的最大频率。

## 解题思路

排序后，对每个元素值 v，用滑动窗口统计有多少元素在 [v-k, v+k] 范围内（可以通过操作变为 v）。最大频率 = min(窗口内元素数, 该值本身的频率 + numOperations)。

用哈希表统计频率，排序后双指针滑动窗口。

## Solution

[SourceCode](./solution.js)
