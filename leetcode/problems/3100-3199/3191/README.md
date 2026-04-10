# [3191] Minimum Operations to Make Binary Array Elements Equal to One I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/description/)

* algorithms
* Medium (80.41%)
* Likes:    681
* Dislikes: 36
* Testcase Example:  '[0,1,1,1,0,0]'

```md
You are given a binary array nums.
You can do the following operation on the array any number of times (possibly zero):

Choose any 3 consecutive elements from the array and flip all of them.

Flipping an element means changing its value from 0 to 1, and from 1 to 0.
Return the minimum number of operations required to make all elements in nums equal to 1. If it is impossible, return -1.

Example 1:

Input: nums = [0,1,1,1,0,0]
Output: 3
Explanation:
We can do the following operations:

Choose the elements at indices 0, 1 and 2. The resulting array is nums = [1,0,0,1,0,0].
Choose the elements at indices 1, 2 and 3. The resulting array is nums = [1,1,1,0,0,0].
Choose the elements at indices 3, 4 and 5. The resulting array is nums = [1,1,1,1,1,1].


Example 2:

Input: nums = [0,1,1,1]
Output: -1
Explanation:
It is impossible to make all elements equal to 1.


Constraints:

3 <= nums.length <= 105
0 <= nums[i] <= 1


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个二进制数组 nums，每次操作可以选择任意 3 个连续元素并全部翻转。求使所有元素变为 1 的最少操作次数，若不可能则返回 -1。

## Approach

贪心：从左到右遍历，遇到 nums[i] == 0 时，必须翻转以 i 为起点的 3 个元素。用差分数组记录翻转次数，当前位置的实际翻转次数为偶数则值不变，奇数则翻转。

遍历结束后检查最后两个元素是否都为 1。

时间复杂度 O(n)，空间 O(n)。
