# [3229] Minimum Operations to Make Array Equal to Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/description/)

* algorithms
* Hard (41.43%)
* Likes:    295
* Dislikes: 12
* Testcase Example:  '[3,5,1,2]\n[4,6,2,4]'

```md
You are given two positive integer arrays nums and target, of the same length.
In a single operation, you can select any subarray of nums and increment each element within that subarray by 1 or decrement each element within that subarray by 1.
Return the minimum number of operations required to make nums equal to the array target.

Example 1:

Input: nums = [3,5,1,2], target = [4,6,2,4]
Output: 2
Explanation:
We will perform the following operations to make nums equal to target:
- Incrementnums[0..3] by 1, nums = [4,6,2,3].
- Incrementnums[3..3] by 1, nums = [4,6,2,4].

Example 2:

Input: nums = [1,3,2], target = [2,1,4]
Output: 5
Explanation:
We will perform the following operations to make nums equal to target:
- Incrementnums[0..0] by 1, nums = [2,3,2].
- Decrementnums[1..1] by 1, nums = [2,2,2].
- Decrementnums[1..1] by 1, nums = [2,1,2].
- Incrementnums[2..2] by 1, nums = [2,1,3].
- Incrementnums[2..2] by 1, nums = [2,1,4].


Constraints:

1 <= nums.length == target.length <= 105
1 <= nums[i], target[i] <= 108


```

## 题目翻译

给定两个等长正整数数组nums和target。每次操作可选择任一子数组，将其中每个元素+1或-1。求将nums变为target的最少操作次数。

## 解题思路

令diff[i] = target[i] - nums[i]。问题转化为：对diff数组，每次操作选一子数组全部+1或-1，求将diff全变为0的最少操作次数。

这是经典的差分数组问题。对diff取差分：d[0]=diff[0], d[i]=diff[i]-diff[i-1]。最终d数组全0。每次对diff[l..r]+1等价于d[l]+1, d[r+1]-1。因此最少操作次数等于所有正差分值之和（或所有负差分值绝对值之和，两者相等）。

## Solution

[SourceCode](./solution.js)
