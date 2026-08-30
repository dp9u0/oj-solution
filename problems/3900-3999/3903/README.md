# [3903] Smallest Stable Index I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-stable-index-i/description/)

* algorithms
* Easy (68.70%)
* Likes:    40
* Dislikes: -
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
1 <= nums.length <= 100
0 <= nums[i] <= 109
0 <= k <= 109
Hint 1: Simulate as described

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给定一个长度为 n 的整数数组 nums 和一个整数 k。

对于每个下标 i，定义其不稳定性得分为 max(nums[0..i]) - min(nums[i..n-1])。

换句话说：
- max(nums[0..i]) 是下标 0 到 i 中元素的最大值（前缀最大值）。
- min(nums[i..n-1]) 是下标 i 到 n-1 中元素的最小值（后缀最小值）。

如果某个下标 i 的不稳定性得分小于等于 k，则称该下标是「稳定的」。

返回最小的稳定下标。如果不存在这样的下标，返回 -1。

示例 1：
输入：nums = [5,0,1,4], k = 3
输出：3
解释：
- 下标 0：[5] 的最大值是 5，[5,0,1,4] 的最小值是 0，得分为 5 - 0 = 5。
- 下标 1：[5,0] 的最大值是 5，[0,1,4] 的最小值是 0，得分为 5 - 0 = 5。
- 下标 2：[5,0,1] 的最大值是 5，[1,4] 的最小值是 1，得分为 5 - 1 = 4。
- 下标 3：[5,0,1,4] 的最大值是 5，[4] 的最小值是 4，得分为 5 - 4 = 1。
第一个得分小于等于 k = 3 的下标是 3，因此答案为 3。

示例 2：
输入：nums = [3,2,1], k = 1
输出：-1
解释：所有下标的得分都是 3 - 1 = 2，均大于 k = 1，返回 -1。

示例 3：
输入：nums = [0], k = 0
输出：0
解释：下标 0 的得分为 0 - 0 = 0，小于等于 k = 0，返回 0。

约束：
- 1 <= nums.length <= 100
- 0 <= nums[i] <= 10^9
- 0 <= k <= 10^9

## 解题思路

1. 从右向左预处理后缀最小值数组 suffixMin，其中 suffixMin[i] = min(nums[i..n-1])。
2. 从左向右遍历，用一个变量 prefixMax 维护前缀最大值 max(nums[0..i])。
3. 对每个下标 i 计算得分 prefixMax - suffixMin[i]，遇到第一个小于等于 k 的下标立即返回。
4. 若遍历结束仍未找到，返回 -1。

时间复杂度 O(n)，空间复杂度 O(n)。
