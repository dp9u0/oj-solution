# [2059] Minimum Operations to Convert Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-convert-number/description/)

* algorithms
* Medium (51.74%)
* Likes:    682
* Dislikes: 34
* Testcase Example:  '[2,4,12]\n2\n12'

```md
You are given a 0-indexed integer array nums containing distinct numbers, an integer start, and an integer goal. There is an integer x that is initially set to start, and you want to perform operations on x such that it is converted to goal. You can perform the following operation repeatedly on the number x:
If 0 <= x <= 1000, then for any index i in the array (0 <= i < nums.length), you can set x to any of the following:

x + nums[i]
x - nums[i]
x ^ nums[i] (bitwise-XOR)

Note that you can use each nums[i] any number of times in any order. Operations that set x to be out of the range 0 <= x <= 1000 are valid, but no more operations can be done afterward.
Return the minimum number of operations needed to convert x = start into goal, and -1 if it is not possible.

Example 1:

Input: nums = [2,4,12], start = 2, goal = 12
Output: 2
Explanation: We can go from 2 &rarr; 14 &rarr; 12 with the following 2 operations.
- 2 + 12 = 14
- 14 - 2 = 12

Example 2:

Input: nums = [3,5,7], start = 0, goal = -4
Output: 2
Explanation: We can go from 0 &rarr; 3 &rarr; -4 with the following 2 operations.
- 0 + 3 = 3
- 3 - 7 = -4
Note that the last operation sets x out of the range 0 <= x <= 1000, which is valid.

Example 3:

Input: nums = [2,8,16], start = 0, goal = 1
Output: -1
Explanation: There is no way to convert 0 into 1.


Constraints:

1 <= nums.length <= 1000
-109 <= nums[i], goal <= 109
0 <= start <= 1000
start != goal
All the integers in nums are distinct.


```

## 中文翻译

给定数组 nums、初始值 start 和目标 goal。初始 x=start，每次可对 x 执行 x+nums[i]、x-nums[i]、x^nums[i]（i 任意选取）。若 0<=x<=1000 可继续操作，否则停止。求最少操作次数使 x=goal，不可行返回 -1。

## 解题思路

BFS：从 start 开始，对每个在 [0,1000] 范围内的 x，尝试所有三种操作。若结果等于 goal 则返回当前步数+1；若结果仍在 [0,1000] 且未访问过则入队。用 visited 数组避免重复。

时间复杂度：O(1001 * n)，空间复杂度：O(1001)

## Solution

[SourceCode](./solution.js)
