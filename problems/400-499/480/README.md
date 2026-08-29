# [480] Sliding Window Median

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sliding-window-median/description/)

* algorithms
* Hard (39.08%)
* Likes:    3647
* Dislikes: 243
* Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'

```md
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.

For examples, if arr = [2,3,4], the median is 3.
For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.

You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted.

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
Explanation:
Window position                Median
---------------                -----
[1  3  -1] -3  5  3  6  7        1
1 [3  -1  -3] 5  3  6  7       -1
1  3 [-1  -3  5] 3  6  7       -1
1  3  -1 [-3  5  3] 6  7        3
1  3  -1  -3 [5  3  6] 7        5
1  3  -1  -3  5 [3  6  7]       6

Example 2:

Input: nums = [1,2,3,4,2,3,1,4,2], k = 3
Output: [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]


Constraints:

1 <= k <= nums.length <= 105
-231 <= nums[i] <= 231 - 1


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

长度 k 的滑窗从左到右移动，返回每个窗口的中位数（偶数个取中间两数均值，误差 1e-5 内接受）。

示例 1：`[1,3,-1,-3,5,3,6,7], k=3` → `[1,-1,-1,3,5,6]`
示例 2：`[1,2,3,4,2,3,1,4,2], k=3` → `[2,3,3,3,2,3,2]`

约束：`1 <= k <= n <= 10^5`，`|nums[i]| <= 2^31−1`

## 解题思路

值域大（±2^31）→ **离散化 + 树状数组**维护窗口内计数：

- 每次滑窗 O(log n) 加/删；中位数用树状数组上**倍增找第 rank 小**：k 奇取第 (k+1)/2 小，k 偶取第 k/2 与 k/2+1 小的均值；
- 两数之和 ≤ 2^33 < 2^53，双精度精确。

复杂度 O(n log n)。中位数均值输出为浮点数。