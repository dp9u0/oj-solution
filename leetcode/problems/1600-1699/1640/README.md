# [1640] Check Array Formation Through Concatenation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-array-formation-through-concatenation/description/)

* algorithms
* Easy (57.32%)
* Likes:    942
* Dislikes: 143
* Testcase Example:  '[15,88]\n[[88],[15]]'

```md
You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].
Return true if it is possible to form the array arr from pieces. Otherwise, return false.

Example 1:

Input: arr = [15,88], pieces = [[88],[15]]
Output: true
Explanation: Concatenate [15] then [88]

Example 2:

Input: arr = [49,18,16], pieces = [[16,18,49]]
Output: false
Explanation: Even though the numbers match, we cannot reorder pieces[0].

Example 3:

Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
Output: true
Explanation: Concatenate [91] then [4,64] then [78]


Constraints:

1 <= pieces.length <= arr.length <= 100
sum(pieces[i].length) == arr.length
1 <= pieces[i].length <= arr.length
1 <= arr[i], pieces[i][j] <= 100
The integers in arr are distinct.
The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).


```

## 题目翻译

给定数组 arr 和二维数组 pieces，判断能否通过拼接 pieces 中的子数组（保持内部顺序）来形成 arr。

## 解题思路

用 HashMap 建立 pieces 每个子数组首元素到子数组的映射。遍历 arr，根据当前元素查找对应的 piece，逐个匹配。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
