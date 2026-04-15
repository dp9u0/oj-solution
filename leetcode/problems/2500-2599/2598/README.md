# [2598] Smallest Missing Non-negative Integer After Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/description/)

* algorithms
* Medium (55.96%)
* Likes:    804
* Dislikes: 176
* Testcase Example:  '[1,-10,7,13,6,8]\n5'

```md
You are given a 0-indexed integer array nums and an integer value.
In one operation, you can add or subtract value from any element of nums.

For example, if nums = [1,2,3] and value = 2, you can choose to subtract value from nums[0] to make nums = [-1,2,3].

The MEX (minimum excluded) of an array is the smallest missing non-negative integer in it.

For example, the MEX of [-1,2,3] is 0 while the MEX of [1,0,3] is 2.

Return the maximum MEX of nums after applying the mentioned operation any number of times.

Example 1:

Input: nums = [1,-10,7,13,6,8], value = 5
Output: 4
Explanation: One can achieve this result by applying the following operations:
- Add value to nums[1] twice to make nums = [1,0,7,13,6,8]
- Subtract value from nums[2] once to make nums = [1,0,2,13,6,8]
- Subtract value from nums[3] twice to make nums = [1,0,2,3,6,8]
The MEX of nums is 4. It can be shown that 4 is the maximum MEX we can achieve.

Example 2:

Input: nums = [1,-10,7,13,6,8], value = 7
Output: 2
Explanation: One can achieve this result by applying the following operation:
- subtract value from nums[2] once to make nums = [1,-10,0,13,6,8]
The MEX of nums is 2. It can be shown that 2 is the maximum MEX we can achieve.


Constraints:

1 <= nums.length, value <= 105
-109 <= nums[i] <= 109


```

## 中文翻译

给定数组 nums 和整数 value，每次操作可将任意元素加减 value。求操作后数组能达到的最大 MEX（最小缺失非负整数）。

## 解题思路

每个数通过加减 value 可以变成任意同余数。统计每个余数 r (0 <= r < value) 出现的次数 cnt[r]。要使 MEX 最大，需要构造 0,1,2,... 的连续序列。对于余数 r，它能贡献的位置是 r, r+value, r+2*value, ...，所以 cnt[r] 决定了该余数能覆盖多少个位置。MEX = min(cnt[r]) * value + 第一个 cnt[r] 不够的余数 r。

更简单：遍历 i 从 0 开始，检查 cnt[i % value] 是否 > 0，若 > 0 则减 1 继续，否则返回 i。

时间复杂度：O(n)，空间复杂度：O(value)

## Solution

[SourceCode](./solution.js)
