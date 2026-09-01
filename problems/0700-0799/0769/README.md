# [769] Max Chunks To Make Sorted

## Description

[LeetCode Problem Description](https://leetcode.com/problems/max-chunks-to-make-sorted/description/)

* algorithms
* Medium (64.13%)
* Likes:    3655
* Dislikes: 367
* Testcase Example:  '[4,3,2,1,0]'

```md
You are given an integer array arr of length n that represents a permutation of the integers in the range [0, n - 1].
We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.
Return the largest number of chunks we can make to sort the array.

Example 1:

Input: arr = [4,3,2,1,0]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn&#39;t sorted.

Example 2:

Input: arr = [1,0,2,3,4]
Output: 4
Explanation:
We can split into two chunks, such as [1, 0], [2, 3, 4].
However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.


Constraints:

n == arr.length
1 <= n <= 10
0 <= arr[i] < n
All the elements of arr are unique.


```

## 翻译

给定一个长度为 n 的整数数组 arr，是 [0, n-1] 的一个排列。将 arr 分成若干块，每块单独排序后拼接结果应等于排序后的数组。返回最多能分成多少块。

## Approach

贪心：遍历数组，维护前缀最大值。当 `max == i` 时，说明 [0..i] 包含了恰好 0..i 的所有元素，可以在此处切分。每次满足条件则块数 +1。

## Solution

[SourceCode](./solution.js)
