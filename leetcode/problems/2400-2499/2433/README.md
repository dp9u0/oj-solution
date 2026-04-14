# [2433] Find The Original Array of Prefix Xor

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/)

* algorithms
* Medium (88.33%)
* Likes:    1512
* Dislikes: 91
* Testcase Example:  '[5,2,0,3,1]'

```md
You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].

Note that ^ denotes the bitwise-xor operation.
It can be proven that the answer is unique.

Example 1:

Input: pref = [5,2,0,3,1]
Output: [5,7,2,3,2]
Explanation: From the array [5,7,2,3,2] we have the following:
- pref[0] = 5.
- pref[1] = 5 ^ 7 = 2.
- pref[2] = 5 ^ 7 ^ 2 = 0.
- pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
- pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.

Example 2:

Input: pref = [13]
Output: [13]
Explanation: We have pref[0] = arr[0] = 13.


Constraints:

1 <= pref.length <= 105
0 <= pref[i] <= 106


```

## 翻译

给定前缀 XOR 数组 pref，还原原数组 arr。pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i]。

## Approach

arr[i] = pref[i] ^ pref[i-1]。因为 pref[i] = pref[i-1] ^ arr[i]，所以 arr[i] = pref[i] ^ pref[i-1]。arr[0] = pref[0]。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
