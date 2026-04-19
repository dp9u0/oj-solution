# [1442] Count Triplets That Can Form Two Arrays of Equal XOR

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/description/)

* algorithms
* Medium (84.77%)
* Likes:    2029
* Dislikes: 138
* Testcase Example:  '[2,3,1,6,7]'

```md
Given an array of integers arr.
We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).
Let&#39;s define a and b as follows:

a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]

Note that ^ denotes the bitwise-xor operation.
Return the number of triplets (i, j and k) Where a == b.

Example 1:

Input: arr = [2,3,1,6,7]
Output: 4
Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)

Example 2:

Input: arr = [1,1,1,1,1]
Output: 10


Constraints:

1 <= arr.length <= 300
1 <= arr[i] <= 108


```

## 翻译

给定整数数组 `arr`，选择三个索引 `i, j, k`（`0 <= i < j <= k < arr.length`），定义 `a = arr[i] ^ ... ^ arr[j-1]`，`b = arr[j] ^ ... ^ arr[k]`。返回满足 `a == b` 的三元组个数。

## Approach

**前缀 XOR + 哈希表。** `a == b` 等价于 `a ^ b == 0`，即 `arr[i] ^ ... ^ arr[k] == 0`。此时 j 可以取 `i+1` 到 `k` 之间的任意位置（共 `k - i` 个）。

计算前缀 XOR `prefix[i] = arr[0] ^ ... ^ arr[i-1]`。若 `prefix[k+1] == prefix[i]`，说明区间 `[i, k]` 的 XOR 为 0，可贡献 `k - i` 个三元组。

用哈希表记录每个前缀 XOR 值出现的索引之和与次数，遍历时累加答案。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
