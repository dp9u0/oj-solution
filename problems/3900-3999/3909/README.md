# [3909] Compare Sums of Bitonic Parts

## Description

[LeetCode Problem Description](https://leetcode.com/problems/compare-sums-of-bitonic-parts/description/)

* algorithms
* Medium (53.73%)
* Likes:    25
* Dislikes: 2
* Testcase Example:  '[1,3,2,1]'

```md
You are given a bitonic array nums of length n.
Split the array into two parts:

Ascending part: from index 0 to the peak element (inclusive).
Descending part: from the peak element to index n - 1 (inclusive).

The peak element belongs to both parts.
Return:

0 if the sum of the ascending part is greater.
1 if the sum of the descending part is greater.
-1 if both sums are equal.

Notes:

A bitonic array is an array that is strictly increasing up to a single peak element and then strictly decreasing.
An array is said to be strictly increasing if each element is strictly greater than its previous one (if exists).
An array is said to be strictly decreasing if each element is strictly smaller than its previous one (if exists).


Example 1:

Input: nums = [1,3,2,1]
Output: 1
Explanation:

Peak element is nums[1] = 3
Ascending part = [1, 3], sum is 1 + 3 = 4
Descending part = [3, 2, 1], sum is 3 + 2 + 1 = 6
Since the descending part has a larger sum, return 1.


Example 2:

Input: nums = [2,4,5,2]
Output: 0
Explanation:

Peak element is nums[2] = 5
Ascending part = [2, 4, 5], sum is 2 + 4 + 5 = 11
Descending part = [5, 2], sum is 5 + 2 = 7
Since the ascending part has a larger sum, return 0.


Example 3:

Input: nums = [1,2,4,3]
Output: -1
Explanation:

Peak element is nums[2] = 4
Ascending part = [1, 2, 4], sum is 1 + 2 + 4 = 7
Descending part = [4, 3], sum is 4 + 3 = 7
Since both parts have equal sums, return -1.



Constraints:

3 <= n == nums.length <= 105
1 <= nums[i] <= 109
nums is a bitonic array.

Hint 1: Find the peak (maximum element) in one pass.
Hint 2: Compute total sum, then derive ascending and descending sums using the peak index.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定一个长度为 n 的双调（bitonic）数组 `nums`，将数组分成两部分：

- 上升部分：从下标 0 到峰值元素（含）。
- 下降部分：从峰值元素到下标 n - 1（含）。

峰值元素同时属于两个部分。返回：

- 0：如果上升部分之和更大。
- 1：如果下降部分之和更大。
- -1：如果两部分之和相等。

说明：

- 双调数组是指严格递增到某个峰值元素后严格递减的数组。
- 严格递增指每个元素都严格大于前一个元素（如果存在）。
- 严格递减指每个元素都严格小于前一个元素（如果存在）。

示例 1：

输入：nums = [1,3,2,1]
输出：1
解释：峰值是 nums[1] = 3，上升部分 [1,3] 和为 4，下降部分 [3,2,1] 和为 6，下降部分更大，返回 1。

示例 2：

输入：nums = [2,4,5,2]
输出：0
解释：峰值是 nums[2] = 5，上升部分 [2,4,5] 和为 11，下降部分 [5,2] 和为 7，上升部分更大，返回 0。

示例 3：

输入：nums = [1,2,4,3]
输出：-1
解释：峰值是 nums[2] = 4，上升部分和为 7，下降部分和为 7，相等，返回 -1。

约束：

3 <= n == nums.length <= 10^5
1 <= nums[i] <= 10^9
nums 是双调数组。

## 解题思路

一次遍历即可，时间 O(n)、空间 O(1)：

1. 从左向右累加求和得到上升部分和 `ascSum`，当下标 i 满足 `nums[i] > nums[i+1]`（或到达末尾）时，i 即为峰值下标，停止累加。
2. 从峰值下标 + 1 继续累加剩余元素得到 `restSum`，下降部分和 `descSum = nums[peak] + restSum`（峰值计入下降部分）。
3. 比较：`ascSum > descSum` 返回 0；`descSum > ascSum` 返回 1；相等返回 -1。
