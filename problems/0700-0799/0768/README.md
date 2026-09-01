# [768] Max Chunks To Make Sorted II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/description/)

* algorithms
* Hard (54.73%)
* Likes:    2000
* Dislikes: 63
* Testcase Example:  '[5,4,3,2,1]'

```md
You are given an integer array arr.
We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.
Return the largest number of chunks we can make to sort the array.

Example 1:

Input: arr = [5,4,3,2,1]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [5, 4], [3, 2, 1] will result in [4, 5, 1, 2, 3], which isn&#39;t sorted.

Example 2:

Input: arr = [2,1,3,4,4]
Output: 4
Explanation:
We can split into two chunks, such as [2, 1], [3, 4, 4].
However, splitting into [2, 1], [3], [4], [4] is the highest number of chunks possible.


Constraints:

1 <= arr.length <= 2000
0 <= arr[i] <= 108


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定整数数组 arr，将其分成若干块，每块单独排序后拼接结果等于整体排序结果。求最多能分成多少块。

## 解题思路

预处理前缀最大值和后缀最小值。可以在位置 i 后切分的条件是 max(arr[0..i]) <= min(arr[i+1..n-1])。统计满足条件的位置数即为答案。
