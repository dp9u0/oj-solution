# [2256] Minimum Average Difference

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-average-difference/description/)

* algorithms
* Medium (43.84%)
* Likes:    1569
* Dislikes: 182
* Testcase Example:  '[2,5,3,9,5,3]'

```md
You are given a 0-indexed integer array nums of length n.
The average difference of the index i is the absolute difference between the average of the first i + 1 elements of nums and the average of the last n - i - 1 elements. Both averages should be rounded down to the nearest integer.
Return the index with the minimum average difference. If there are multiple such indices, return the smallest one.
Note:

The absolute difference of two numbers is the absolute value of their difference.
The average of n elements is the sum of the n elements divided (integer division) by n.
The average of 0 elements is considered to be 0.


Example 1:

Input: nums = [2,5,3,9,5,3]
Output: 3
Explanation:
- The average difference of index 0 is:
2 / 1 - (5 + 3 + 9 + 5 + 3) / 5
=
2 / 1 - 25 / 5
=
2 - 5
= 3.
- The average difference of index 1 is:
(2 + 5) / 2 - (3 + 9 + 5 + 3) / 4
=
7 / 2 - 20 / 4
=
3 - 5
= 2.
- The average difference of index 2 is:
(2 + 5 + 3) / 3 - (9 + 5 + 3) / 3
=
10 / 3 - 17 / 3
=
3 - 5
= 2.
- The average difference of index 3 is:
(2 + 5 + 3 + 9) / 4 - (5 + 3) / 2
=
19 / 4 - 8 / 2
=
4 - 4
= 0.
- The average difference of index 4 is:
(2 + 5 + 3 + 9 + 5) / 5 - 3 / 1
=
24 / 5 - 3 / 1
=
4 - 3
= 1.
- The average difference of index 5 is:
(2 + 5 + 3 + 9 + 5 + 3) / 6 - 0
=
27 / 6 - 0
=
4 - 0
= 4.
The average difference of index 3 is the minimum average difference so return 3.

Example 2:

Input: nums = [0]
Output: 0
Explanation:
The only index is 0 so return 0.
The average difference of index 0 is:
0 / 1 - 0
=
0 - 0
= 0.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105


```

## 翻译

给定数组 nums，索引 i 的平均差为：前 i+1 个元素平均值与后 n-i-1 个元素平均值之差的绝对值。返回平均差最小的索引（多个则取最小的）。

## Approach

前缀和：先算总和 totalSum，遍历时维护前缀和 prefixSum。对每个 i，前半平均 `Math.floor(prefixSum / (i+1))`，后半平均 `Math.floor((totalSum - prefixSum) / (n-i-1))`（后半为空时视为 0）。找最小差对应的索引。

## Solution

[SourceCode](./solution.js)
