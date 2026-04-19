# [3724] Minimum Operations to Transform Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-transform-array/description/)

* algorithms
* Medium (39.69%)
* Likes:    89
* Dislikes: 7
* Testcase Example:  '[2,8]\n[1,7,3]'

```md
You are given two integer arrays nums1 of length n and nums2 of length n + 1.
You want to transform nums1 into nums2 using the minimum number of operations.
You may perform the following operations any number of times, each time choosing an index i:

Increase nums1[i] by 1.
Decrease nums1[i] by 1.
Append nums1[i] to the end of the array.

Return the minimum number of operations required to transform nums1 into nums2.

Example 1:

Input: nums1 = [2,8], nums2 = [1,7,3]
Output: 4
Explanation:



Step
i
Operation
nums1[i]
Updated nums1




1
0
Append
-
[2, 8, 2]


2
0
Decrement
Decreases to 1
[1, 8, 2]


3
1
Decrement
Decreases to 7
[1, 7, 2]


4
2
Increment
Increases to 3
[1, 7, 3]



Thus, after 4 operations nums1 is transformed into nums2.

Example 2:

Input: nums1 = [1,3,6], nums2 = [2,4,5,3]
Output: 4
Explanation:



Step
i
Operation
nums1[i]
Updated nums1




1
1
Append
-
[1, 3, 6, 3]


2
0
Increment
Increases to 2
[2, 3, 6, 3]


3
1
Increment
Increases to 4
[2, 4, 6, 3]


4
2
Decrement
Decreases to 5
[2, 4, 5, 3]



Thus, after 4 operations nums1 is transformed into nums2.

Example 3:

Input: nums1 = [2], nums2 = [3,4]
Output: 3
Explanation:



Step
i
Operation
nums1[i]
Updated nums1




1
0
Increment
Increases to 3
[3]


2
0
Append
-
[3, 3]


3
1
Increment
Increases to 4
[3, 4]



Thus, after 3 operations nums1 is transformed into nums2.


Constraints:

1 <= n == nums1.length <= 105
nums2.length == n + 1
1 <= nums1[i], nums2[i] <= 105


```

## 题目翻译

给定两个整数数组 `nums1`（长度 n）和 `nums2`（长度 n+1）。可执行三种操作：将 `nums1[i]` 加 1、减 1、或追加到末尾。返回将 `nums1` 变成 `nums2` 的最少操作次数。

## 解题思路

恰好需要一次 append 操作（因为长度差 1）。关键是选择 append 哪个 `nums1[i]`。
append 前，先将 `nums1[i]` 改为某个值 v，再 append，这样位置 i 和末尾都是 v。
对每个 i，三元组 (nums1[i], nums2[i], nums2[n]) 的中位数是最优 v。
取所有 i 中总代价最小的。

## Solution

[SourceCode](./solution.js)
