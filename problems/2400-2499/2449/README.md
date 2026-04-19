# [2449] Minimum Number of Operations to Make Arrays Similar

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/description/)

* algorithms
* Hard (61.44%)
* Likes:    451
* Dislikes: 16
* Testcase Example:  '[8,12,6]\n[2,14,10]'

```md
You are given two positive integer arrays nums and target, of the same length.
In one operation, you can choose any two distinct indices i and j where 0 <= i, j < nums.length and:

set nums[i] = nums[i] + 2 and
set nums[j] = nums[j] - 2.

Two arrays are considered to be similar if the frequency of each element is the same.
Return the minimum number of operations required to make nums similar to target. The test cases are generated such that nums can always be similar to target.

Example 1:

Input: nums = [8,12,6], target = [2,14,10]
Output: 2
Explanation: It is possible to make nums similar to target in two operations:
- Choose i = 0 and j = 2, nums = [10,12,4].
- Choose i = 1 and j = 2, nums = [10,14,2].
It can be shown that 2 is the minimum number of operations needed.

Example 2:

Input: nums = [1,2,5], target = [4,1,3]
Output: 1
Explanation: We can make nums similar to target in one operation:
- Choose i = 1 and j = 2, nums = [1,4,3].

Example 3:

Input: nums = [1,1,1,1,1], target = [1,1,1,1,1]
Output: 0
Explanation: The array nums is already similiar to target.


Constraints:

n == nums.length == target.length
1 <= n <= 105
1 <= nums[i], target[i] <= 106
It is possible to make nums similar to target.


```

## 题目翻译

给定两个正整数数组 nums 和 target。一次操作选择两个不同下标 i, j，使 nums[i] += 2, nums[j] -= 2。两个数组"相似"当且仅当每个元素的频率相同。求使 nums 与 target 相似的最少操作次数。

## 解题思路

**奇偶分组 + 贪心排序匹配**。

关键观察：
- 每次操作改变一个数 +2，另一个数 -2。因此每个数的奇偶性不变。
- 奇数只能变成奇数，偶数只能变成偶数。
- 将 nums 和 target 分别按奇偶性分成两组。
- 对每组分别排序，然后一一对应匹配。
- 对于每个匹配对 (a, b)，如果 a < b，需要增加 (b-a)/2 次；如果 a > b，需要减少 (a-b)/2 次。
- 由于每次操作同时处理一个增加和一个减少，总操作数 = 所有正差值之和 / 2。

## Solution

[SourceCode](./solution.js)
