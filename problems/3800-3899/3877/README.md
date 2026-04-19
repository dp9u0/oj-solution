# [3877] Minimum Removals to Achieve Target XOR

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-removals-to-achieve-target-xor/description/)

* algorithms
* Medium (41.56%)
* Likes:    88
* Dislikes: 4
* Testcase Example:  '[1,2,3]\n2'

```md
You are given an integer array nums and an integer target.
You may remove any number of elements from nums (possibly zero).
Return the minimum number of removals required so that the bitwise XOR of the remaining elements equals target. If it is impossible to achieve target, return -1.
The bitwise XOR of an empty array is 0.

Example 1:

Input: nums = [1,2,3], target = 2
Output: 1
Explanation:

Removing nums[1] = 2 leaves [nums[0], nums[2]] = [1, 3].
The XOR of [1, 3] is 2, which equals target.
It is not possible to achieve XOR = 2 in less than one removal, therefore the answer is 1.


Example 2:

Input: nums = [2,4], target = 1
Output: -1
Explanation:
It is impossible to remove elements to achieve target. Thus, the answer is -1.

Example 3:

Input: nums = [7], target = 7
Output: 0
Explanation:
The XOR of all elements is nums[0] = 7, which equals target. Thus, no removal is needed.


Constraints:

1 <= nums.length <= 40
0 <= nums[i] <= 104
0 <= target <= 104


```

## 中文翻译

给定数组 nums 和目标 target。可以移除任意个元素（含零个），使剩余元素的异或等于 target。返回最少移除数，不可能则返回 -1。空数组异或为 0。

## 解题思路

n ≤ 40，可用 meet-in-the-middle。将数组分成前后两半，分别枚举子集的 (xor, count) 对。对前半部分的每个子集 xor1，需要在后半部分找 xor2 使得 xor1 ^ xor2 == target，即 xor2 == xor1 ^ target。对后半部分按 xor 值分组，保留最小 count。然后遍历前半部分查找匹配。

每半最多 20 个元素，子集数 2^20 ≈ 1M，可以接受。

## Solution

[SourceCode](./solution.js)
