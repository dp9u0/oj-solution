# [3960] Frequency Balance Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/frequency-balance-subarray/description/)

* algorithms
* Medium (29.63%)
* Likes:    77
* Dislikes: 127
* Testcase Example:  '[1,2,2,1,2,3,3,3]'

```md
You are given an integer array ​​​​​​​nums.
Define a frequency balance subarray as follows:

If the subarray contains only one distinct value, it is frequency balanced.
Otherwise, there must exist a positive integer f such that every distinct value in the subarray occurs either f or 2 * f times, and both frequencies occur among the distinct values.

Return an integer denoting the length of the longest frequency balance subarray.

Example 1:

Input: nums = [1,2,2,1,2,3,3,3]
Output: 5
Explanation:

The longest frequency balance subarray is [2, 1, 2, 3, 3].
The elements that appear most frequently are 2 and 3, both appearing twice.
The remaining element 1 appears once, meeting the requirements.


Example 2:

Input: nums = [5,5,5,5]
Output: 4
Explanation:

The longest frequency balance subarray is [5, 5, 5, 5].
The element that appears most frequently is 5.
There are no other elements meeting the requirements.


Example 3:

Input: nums = [1,2,3,4]
Output: 1
Explanation:
Since all elements appear only once, the length of the longest frequency balance subarray is 1.


Constraints:

1 <= nums.length <= 10​​​​​​​3
1 <= nums[i] <= 10​​​​​​​9


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

"频率平衡子数组"：只含一个不同值；或存在正整数 f 使每个不同值出现 f 或 2f 次，且两种频率都出现。返回最长频率平衡子数组的长度。

示例：`[1,2,2,1,2,3,3,3]` → `5`（子数组 [2,1,2,3,3]：2 和 3 各 2 次、1 一次）

约束：n ≤ 1000，值 ≤ 1e9

## 解题思路

n 小 → 枚举左端点，右端点递增，维护 值→频次 与 **频次→有几个值** 两张 Map；平衡 ⟺ 非零频次键恰为 {f, 2f} 两个（或仅一个不同值）。每次 O(1) 更新 + O(1) 小检查。O(n²)。暴力对拍验证。