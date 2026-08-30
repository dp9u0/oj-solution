# [3904] Smallest Stable Index II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-stable-index-ii/description/)

* algorithms
* Medium (73.47%)
* Likes:    35
* Dislikes: 2
* Testcase Example:  '[5,0,1,4]\n3'

```md
You are given an integer array nums of length n and an integer k.
For each index i, define its instability score as max(nums[0..i]) - min(nums[i..n - 1]).
In other words:
max(nums[0..i]) is the largest value among the elements from index 0 to index i.
min(nums[i..n - 1]) is the smallest value among the elements from index i to index n - 1.
An index i is called stable if its instability score is less than or equal to k.
Return the smallest stable index. If no such index exists, return -1.

Example 1:
Input: nums = [5,0,1,4], k = 3
Output: 3
Explanation:
At index 0: The maximum in [5] is 5, and the minimum in [5, 0, 1, 4] is 0, so the instability score is 5 - 0 = 5.
At index 1: The maximum in [5, 0] is 5, and the minimum in [0, 1, 4] is 0, so the instability score is 5 - 0 = 5.
At index 2: The maximum in [5, 0, 1] is 5, and the minimum in [1, 4] is 1, so the instability score is 5 - 1 = 4.
At index 3: The maximum in [5, 0, 1, 4] is 5, and the minimum in [4] is 4, so the instability score is 5 - 4 = 1.
This is the first index with an instability score less than or equal to k = 3. Thus, the answer is 3.
Example 2:
Input: nums = [3,2,1], k = 1
Output: -1
Explanation:
At index 0, the instability score is 3 - 1 = 2.
At index 1, the instability score is 3 - 1 = 2.
At index 2, the instability score is 3 - 1 = 2.
None of these values is less than or equal to k = 1, so the answer is -1.
Example 3:
Input: nums = [0], k = 0
Output: 0
Explanation:
At index 0, the instability score is 0 - 0 = 0, which is less than or equal to k = 0. Therefore, the answer is 0.

Constraints:
1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= k <= 109
Hint 1: Precompute prefix maximums in an array prefMax, where prefMax[i] is the maximum of nums[0..i]
Hint 2: Precompute suffix minimums in an array suffMin, where suffMin[i] is the minimum of nums[i..n-1]
Hint 3: For each index i, compute the instability score as prefMax[i] - suffMin[i]
Hint 4: Return the smallest index where the instability score is <= k. If no such index exists, return -1

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个长度为 n 的整数数组 `nums` 和一个整数 `k`。

对于每个下标 `i`，定义其**不稳定度**为 `max(nums[0..i]) - min(nums[i..n-1])`，其中：

- `max(nums[0..i])` 表示下标 0 到 i 之间元素的最大值（前缀最大值）。
- `min(nums[i..n-1])` 表示下标 i 到 n-1 之间元素的最小值（后缀最小值）。

如果某个下标 `i` 的不稳定度小于等于 `k`，则称该下标是**稳定的**。

返回最小的稳定下标。如果不存在，返回 `-1`。

**示例 1：**
输入：`nums = [5,0,1,4], k = 3`
输出：`3`
解释：
- 下标 0：前缀 [5] 最大值 5，后缀 [5,0,1,4] 最小值 0，不稳定度 5。
- 下标 1：前缀 [5,0] 最大值 5，后缀 [0,1,4] 最小值 0，不稳定度 5。
- 下标 2：前缀 [5,0,1] 最大值 5，后缀 [1,4] 最小值 1，不稳定度 4。
- 下标 3：前缀 [5,0,1,4] 最大值 5，后缀 [4] 最小值 4，不稳定度 1。
第一个不稳定度 <= 3 的下标是 3。

**示例 2：**
输入：`nums = [3,2,1], k = 1`
输出：`-1`
解释：所有下标的不稳定度均为 2，大于 1。

**示例 3：**
输入：`nums = [0], k = 0`
输出：`0`

**约束：**
- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= k <= 10^9`

## 解题思路

**前缀最大值 + 后缀最小值，一次线性扫描，时间 O(n)，空间 O(n)（后缀最小值数组，前缀最大值可边扫边维护）。**

1. 从右往左预处理后缀最小值数组 `suffMin`，其中 `suffMin[i] = min(nums[i..n-1])`。
2. 从左往右扫描，维护 running 的前缀最大值 `prefMax`，对每个下标 `i` 计算不稳定度 `prefMax - suffMin[i]`。
3. 返回第一个满足 `不稳定度 <= k` 的下标；若扫完仍无，返回 `-1`。

注：不稳定度并非单调（前缀 max 不减、后缀 min 不减，差值不单调），所以不能二分，直接顺序找第一个满足条件的下标即可。
