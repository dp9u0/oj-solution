# [1089] Duplicate Zeros

## Description

[LeetCode Problem Description](https://leetcode.com/problems/duplicate-zeros/description/)

* algorithms
* Easy (53.50%)
* Likes:    2849
* Dislikes: 798
* Testcase Example:  '[1,0,2,3,0,4,5,0]'

```md
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]


Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 9


```

## 中文翻译

给定定长数组 arr，将每个 0 复制一份（右移后续元素），超出数组长度的部分丢弃。原地修改，不返回。

## 解题思路

两次遍历。第一次统计零的个数，确定最终保留的元素范围（从右往左数，遇到 0 多占一个位置）。第二次从右往左复制，遇到 0 写两次。

## Solution

[SourceCode](./solution.js)
