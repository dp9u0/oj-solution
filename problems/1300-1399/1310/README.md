# [1310] XOR Queries of a Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/xor-queries-of-a-subarray/description/)

* algorithms
* Medium (78.08%)
* Likes:    2103
* Dislikes: 61
* Testcase Example:  '[1,3,4,8]\n[[0,1],[1,2],[0,3],[3,3]]'

```md
You are given an array arr of positive integers. You are also given the array queries where queries[i] = [lefti, righti].
For each query i compute the XOR of elements from lefti to righti (that is, arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti] ).
Return an array answer where answer[i] is the answer to the ith query.

Example 1:

Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
Output: [2,7,14,8]
Explanation:
The binary representation of the elements in the array are:
1 = 0001
3 = 0011
4 = 0100
8 = 1000
The XOR values for queries are:
[0,1] = 1 xor 3 = 2
[1,2] = 3 xor 4 = 7
[0,3] = 1 xor 3 xor 4 xor 8 = 14
[3,3] = 8

Example 2:

Input: arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
Output: [8,0,4,4]


Constraints:

1 <= arr.length, queries.length <= 3 * 104
1 <= arr[i] <= 109
queries[i].length == 2
0 <= lefti <= righti < arr.length


```

## 题目翻译

给定正整数数组 `arr` 和查询数组 `queries`，queries[i] = [left_i, right_i]。对每个查询计算 arr[left_i] XOR arr[left_i+1] XOR ... XOR arr[right_i]。返回答案数组。

**示例 1：** arr=[1,3,4,8], queries=[[0,1],[1,2],[0,3],[3,3]] → [2,7,14,8]
**示例 2：** arr=[4,8,2,10], queries=[[2,3],[1,3],[0,0],[0,3]] → [8,0,4,4]

**约束：**
- 1 <= arr.length, queries.length <= 3*10^4
- 1 <= arr[i] <= 10^9

## 解题思路 (Approach)

前缀异或。预处理 prefixXor[i] = arr[0] ^ arr[1] ^ ... ^ arr[i-1]，则区间 [left, right] 的异或 = prefixXor[right+1] ^ prefixXor[left]（利用 a^b^a = b 的性质）。

时间复杂度：O(n + q)，空间复杂度：O(n)。

## Solution

[SourceCode](./solution.js)
