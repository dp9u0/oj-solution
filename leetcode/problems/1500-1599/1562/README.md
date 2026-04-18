# [1562] Find Latest Group of Size M

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-latest-group-of-size-m/description/)

* algorithms
* Medium (43.80%)
* Likes:    679
* Dislikes: 144
* Testcase Example:  '[3,5,1,2,4]\n1'

```md
Given an array arr that represents a permutation of numbers from 1 to n.
You have a binary string of size n that initially has all its bits set to zero. At each step i (assuming both the binary string and arr are 1-indexed) from 1 to n, the bit at position arr[i] is set to 1.
You are also given an integer m. Find the latest step at which there exists a group of ones of length m. A group of ones is a contiguous substring of 1&#39;s such that it cannot be extended in either direction.
Return the latest step at which there exists a group of ones of length exactly m. If no such group exists, return -1.

Example 1:

Input: arr = [3,5,1,2,4], m = 1
Output: 4
Explanation:
Step 1: '00100', groups: ['1']
Step 2: '00101', groups: ['1', '1']
Step 3: '10101', groups: ['1', '1', '1']
Step 4: '11101', groups: ['111', '1']
Step 5: '11111', groups: ['11111']
The latest step at which there exists a group of size 1 is step 4.

Example 2:

Input: arr = [3,1,5,4,2], m = 2
Output: -1
Explanation:
Step 1: '00100', groups: ['1']
Step 2: '10100', groups: ['1', '1']
Step 3: '10101', groups: ['1', '1', '1']
Step 4: '10111', groups: ['1', '111']
Step 5: '11111', groups: ['11111']
No group of size 2 exists during any step.


Constraints:

n == arr.length
1 <= m <= n <= 105
1 <= arr[i] <= n
All integers in arr are distinct.


```

## 翻译

长度n的二进制串初始全0。每步将arr[i]位置设为1。求最后一步使得存在长度恰好为m的连续1组。不存在则返回-1。

## 解题思路

并查集。每步设1后与左右邻居合并，维护每个连通块大小和大小为m的组数countM。countM>0时更新答案。

## Solution

[SourceCode](./solution.js)
