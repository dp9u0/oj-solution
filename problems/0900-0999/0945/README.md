# [945] Minimum Increment to Make Array Unique

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-increment-to-make-array-unique/description/)

* algorithms
* Medium (60.62%)
* Likes:    2781
* Dislikes: 86
* Testcase Example:  '[1,2,2]'

```md
You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.
Return the minimum number of moves to make every value in nums unique.
The test cases are generated so that the answer fits in a 32-bit integer.

Example 1:

Input: nums = [1,2,2]
Output: 1
Explanation: After 1 move, the array could be [1, 2, 3].

Example 2:

Input: nums = [3,2,1,2,1,7]
Output: 6
Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown that it is impossible for the array to have all unique values with 5 or less moves.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数数组 nums，每次操作可以将某个元素加 1。返回使数组中所有值唯一的最少操作次数。

## Approach

排序后贪心。排序后遍历，维护当前最小可用值 `next`。若 nums[i] < next，需要增加到 next；否则 next = nums[i] + 1。累加增量即为答案。

时间复杂度 O(n log n)，空间 O(1)。
